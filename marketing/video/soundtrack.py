"""Bande son SecureFlow : musique + effets synthétisés, calés sur cues.json, mixés avec la voix (ducking).
Sortie : mix.wav (48 kHz stéréo). Tout est généré ici, aucun échantillon externe (aucun souci de droits)."""
import json, numpy as np
from scipy import signal
from scipy.io import wavfile

SR = 48000
C = json.load(open("cues.json"))
T = C["total"]
N = int(T * SR)
rng = np.random.default_rng(7)

music = np.zeros((N, 2)); sfx = np.zeros((N, 2))

def t_arr(d): return np.arange(int(d * SR)) / SR
def add(buf, t0, x, gain=1.0, pan=0.0):
    i = int(t0 * SR)
    if i >= N: return
    if x.ndim == 1:
        l, r = np.cos((pan + 1) * np.pi / 4), np.sin((pan + 1) * np.pi / 4)
        x = np.stack([x * l, x * r], 1) * np.sqrt(2)
    j = min(N, i + len(x)); buf[i:j] += x[: j - i] * gain
def lp(x, f, o=4): return signal.sosfilt(signal.butter(o, f, "low", fs=SR, output="sos"), x)
def hp(x, f, o=4): return signal.sosfilt(signal.butter(o, f, "high", fs=SR, output="sos"), x)
def bp(x, lo, hi, o=2): return signal.sosfilt(signal.butter(o, [lo, hi], "band", fs=SR, output="sos"), x)
def env_ad(d, a, dec):
    t = t_arr(d); e = np.minimum(1, t / max(a, 1e-4)) * np.exp(-np.maximum(0, t - a) / dec); return e
def fade(x, fi=0.01, fo=0.05):
    n1, n2 = int(fi * SR), int(fo * SR)
    if n1: x[:n1] *= np.linspace(0, 1, n1)[:, None] if x.ndim == 2 else np.linspace(0, 1, n1)
    if n2: x[-n2:] *= np.linspace(1, 0, n2)[:, None] if x.ndim == 2 else np.linspace(1, 0, n2)
    return x
def saw(f, t): return signal.sawtooth(2 * np.pi * f * t)
def note(n): return 440 * 2 ** ((n - 69) / 12)

def reverb(x, dur=2.6, mix=0.3, damp=5000):
    L = int(dur * SR); out = np.zeros((len(x) + L - 1, 2))
    for ch in range(2):
        ir = rng.standard_normal(L) * np.exp(-np.arange(L) / SR * (6.9 / dur))
        ir = lp(ir, damp); ir /= np.sqrt((ir ** 2).sum())
        src = x[:, ch] if x.ndim == 2 else x
        out[:, ch] = signal.fftconvolve(src, ir)[: len(out)] * mix
        out[: len(src), ch] += src * (1 - mix * 0.5)
    return out

# ---------------- éléments sonores ----------------
def heartbeat():
    d = 0.35; t = t_arr(d)
    f = 48 + 30 * np.exp(-t / 0.03)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env_ad(d, 0.005, 0.09)
def tick():
    x = hp(rng.standard_normal(int(0.03 * SR)), 2500) * env_ad(0.03, 0.001, 0.006); return x
def glitch(d=0.28):
    t = t_arr(d); x = np.zeros_like(t)
    for k in range(7):
        a, b = int(rng.uniform(0, d - 0.03) * SR), int(rng.uniform(0.01, 0.04) * SR)
        f = rng.choice([180, 360, 720, 1440, 2200])
        seg = np.sign(np.sin(2 * np.pi * f * t[: b])) * 0.6 + rng.standard_normal(b) * 0.4
        x[a : a + b] += seg[: len(x[a : a + b])]
    x = np.round(x * 6) / 6
    return bp(x, 150, 7000) * env_ad(d, 0.002, d / 2)
def boom(d=2.2, f0=60, f1=32, k=0.25):
    t = t_arr(d); f = f1 + (f0 - f1) * np.exp(-t / k)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env_ad(d, 0.004, 0.55)
def hit():
    d = 0.5; n = lp(rng.standard_normal(int(d * SR)), 3500) * env_ad(d, 0.001, 0.07)
    ring = sum(np.sin(2 * np.pi * f * t_arr(d)) * a for f, a in [(410, .5), (1130, .3), (2240, .2)]) * env_ad(d, 0.001, 0.18)
    return n * 0.9 + ring * 0.35
def whoosh(d=0.7, rev=False, lo=300, hi=6000, peak=0.55):
    t = t_arr(d); x = rng.standard_normal(len(t))
    out = np.zeros_like(x); seg = 256
    for i in range(0, len(x), seg):
        p = i / len(x); fc = lo * (hi / lo) ** (p if not rev else p)
        out[i : i + seg] = x[i : i + seg]
    # balayage par bancs de filtres
    bands = np.geomspace(lo, hi, 9); y = np.zeros_like(x)
    for bi, fc in enumerate(bands):
        w = np.exp(-((np.linspace(0, 1, len(t)) - bi / 8) ** 2) / 0.02)
        y += bp(x, fc / 1.4, min(fc * 1.4, SR / 2 - 100)) * w
    e = (t / (d * peak)) ** 2 * (t < d * peak) + np.exp(-(t - d * peak) / (d * 0.18)) * (t >= d * peak)
    if rev: e = (t / d) ** 3
    return y * e
def riser(d):
    t = t_arr(d); x = rng.standard_normal(len(t)); y = np.zeros_like(x); seg = int(0.05 * SR)
    for i in range(0, len(x), seg):
        p = i / len(x); fc = 300 * (8000 / 300) ** p
        y[i : i + seg] = bp(x[max(0, i - seg) : i + seg], fc / 1.3, min(fc * 1.3, 20000))[-len(y[i : i + seg]) :]
    tone = np.sin(2 * np.pi * np.cumsum(110 * 2 ** (2 * t / d)) / SR) * 0.25
    return (y + tone) * (t / d) ** 2.5
def bell(f, d=4.0):
    t = t_arr(d)
    x = sum(np.sin(2 * np.pi * f * m * t) * a * np.exp(-t / (d * dc)) for m, a, dc in [(1, 1, .35), (2, .45, .2), (3, .2, .12), (4.2, .12, .08)])
    return x * np.minimum(1, t / 0.004)
def kick():
    d = 0.4; t = t_arr(d); f = 45 + 110 * np.exp(-t / 0.025)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env_ad(d, 0.002, 0.12)
def clap():
    d = 0.25; return bp(rng.standard_normal(int(d * SR)), 900, 5000) * env_ad(d, 0.002, 0.05)
def hat(d=0.08): return hp(rng.standard_normal(int(d * SR)), 7000) * env_ad(d, 0.001, 0.02)
def pluck(f, d=0.6):
    t = t_arr(d); x = signal.sawtooth(2 * np.pi * f * t, 0.5) * 0.6 + np.sin(2 * np.pi * f * t)
    return lp(x * env_ad(d, 0.003, 0.16), 3500)
def pad(fs, d, a=0.6, r=0.8, cut=1600, det=0.18):
    t = t_arr(d); x = np.zeros((len(t), 2))
    for f in fs:
        for ch, dt in enumerate((-det, det)):
            x[:, ch] += saw(f * 2 ** (dt / 12), t) + 0.5 * saw(f * 2 ** (-dt / 12) * 2, t) * 0.3
    for ch in range(2): x[:, ch] = lp(x[:, ch], cut)
    e = np.minimum(1, t / a) * np.minimum(1, (d - t) / r).clip(0)
    return x * e[:, None] / max(1, len(fs))

# ---------------- PARTIE A : tension (0 → c4end) ----------------
A_end = C["c4end"]
tA = t_arr(A_end)
lfo = 1 + 0.25 * np.sin(2 * np.pi * 0.11 * tA)
drone = lp(saw(36.71, tA) + 0.7 * saw(73.42, tA) + 0.35 * saw(110.0, tA), 380) * lfo
swell = np.clip(tA / 3, 0, 1) * (0.55 + 0.45 * np.clip((tA - C["p1"]) / 2, 0, 1))
dis = lp(saw(77.78, tA), 600) * 0.35 * np.clip((tA - C["p1"]) / 3, 0, 1)
dr = (drone + dis) * swell
dr[-int(0.06 * SR):] *= np.linspace(1, 0, int(0.06 * SR))
add(music, 0, np.stack([dr * 0.9, np.roll(dr, 240) * 0.9], 1), 0.10)

hb = heartbeat()
t = 0.6
while t < C["q3end"] + 0.6:
    bpm = 62 if t < C["q1"] else 78
    add(sfx, t, hb, 0.30); add(sfx, t + 0.24, hb, 0.18); t += 60 / bpm
t = C["q1"]
while t < C["q3end"]:
    add(sfx, t, tick(), 0.18, pan=0.3 if int(t * 2) % 2 else -0.3); t += 0.5
for k in ("q1", "q2", "q3"): add(sfx, C[k], glitch(), 0.20)
add(sfx, C["capital"] - 0.05, boom(2.5, 70, 30, 0.3), 0.40)
add(sfx, C["capital"] - 0.05, hit(), 0.18)
rd = C["p1"] - C["q3end"] + 0.1
add(sfx, C["q3end"] - 0.1, riser(rd), 0.22)
for k, pan in zip(("p1", "p2", "p3", "p4"), (-0.25, 0.25, -0.15, 0.15)):
    add(sfx, C[k], boom(), 0.42, pan); add(sfx, C[k], hit(), 0.26, pan)
# ostinato sombre (croches à 100 bpm) de p5 à la fin de la partie A
t = C["p5"]; step = 0.3; i = 0
while t < A_end - 0.1:
    f = [73.42, 73.42, 77.78, 73.42][i % 4] * (2 if i % 8 >= 6 else 1)
    x = lp(saw(f, t_arr(0.28)), 900) * env_ad(0.28, 0.005, 0.1)
    add(music, t, x, 0.09 * (0.6 + 0.4 * (t - C["p5"]) / (A_end - C["p5"])), pan=-0.2 if i % 2 else 0.2)
    t += step; i += 1
add(sfx, C["c4"] - 0.1, boom(2.6, 120, 28, 0.6), 0.40)
add(sfx, C["c4"], hit(), 0.22)

# ---------------- BASCULE ----------------
add(music, C["t1"], bell(note(57), 5), 0.10, -0.2)
add(music, C["t2"], bell(note(64), 5), 0.11, 0.2)
air = lp(rng.standard_normal(int((C["logo"] - C["t1"]) * SR)), 900) * np.linspace(0, 1, int((C["logo"] - C["t1"]) * SR)) ** 2
add(music, C["t1"], air, 0.05)
rw = whoosh(1.0, rev=True, lo=200, hi=9000)
add(sfx, C["logo"] - 1.0, rw, 0.35)
add(sfx, C["logo"], boom(3.0, 80, 30, 0.35), 0.55)
add(sfx, C["logo"], hit(), 0.25)
shimmer = sum(bell(note(n), 6) for n in (69, 73, 76, 81, 85)) / 3
add(music, C["logo"], shimmer, 0.10)

# ---------------- PARTIE B : corporate lumineux (logo → fin) ----------------
B0 = C["logo"]; beat = 0.6; bar = beat * 4
prog = [(57, [57, 61, 64]), (52, [52, 56, 59]), (54, [54, 57, 61]), (50, [50, 54, 57])]  # A E F#m D
end_music = T
nb = int((end_music - B0) / bar) + 1
padbuf = np.zeros((N, 2))
for b in range(nb):
    t0 = B0 + b * bar
    if t0 >= end_music: break
    root, ch = prog[b % 4]
    last = t0 + bar >= C["end"] + 0.3
    d = (end_music - t0) if last else bar + 0.6
    p = pad([note(n) for n in ch] + [note(ch[0] + 12)], d, a=0.35 if b else 0.9, r=0.6 if not last else 2.2)
    add(padbuf, t0, p, 1.0)
    if last: break
add(music, 0, reverb(padbuf, 2.8, 0.35)[:N], 0.20)

def on_grid(t):  # aligne sur la croche la plus proche de la grille de la partie B
    return B0 + round((t - B0) / (beat / 2)) * (beat / 2)
arp = np.zeros((N, 2))
for b in range(nb):
    t0 = B0 + b * bar; root, ch = prog[b % 4]
    tones = [ch[0] + 12, ch[1] + 12, ch[2] + 12, ch[1] + 12 + 12, ch[2] + 12, ch[1] + 12, ch[0] + 24, ch[2] + 12]
    for k in range(8):
        tt = t0 + k * beat / 2
        if tt < C["tiers"] or tt > C["end"] + 1.2: continue
        if C["secEnd"] < tt < C["cta1"] and k % 2: continue  # vision : plus aéré
        add(arp, tt, pluck(note(tones[k])), 0.5, pan=-0.35 if k % 2 else 0.35)
add(music, 0, reverb(arp, 1.6, 0.28)[:N], 0.13)

drums = np.zeros((N, 2)); bass = np.zeros((N, 2))
for b in range(nb):
    t0 = B0 + b * bar; root, ch = prog[b % 4]
    for k in range(8):
        tt = t0 + k * beat / 2
        in_main = C["s1"] - 0.2 <= tt < C["secEnd"] + 0.4
        in_cta = C["cta1"] <= tt < C["end"]
        if in_main or in_cta:
            if k % 2 == 0: add(bass, tt, lp(saw(note(root - 24), t_arr(0.28)) * env_ad(0.28, 0.004, 0.14), 350), 0.55)
            if k in (0, 4): add(drums, tt, kick(), 0.75)
            if in_main and k in (2, 6) and tt > C["s3"]: add(drums, tt, clap(), 0.22)
            if in_main and tt > C["s4"]: add(drums, tt, hat(), 0.13, pan=0.25)
add(music, 0, drums, 0.55); add(music, 0, bass, 0.30)

# transitions
for k, pan in zip(("s1", "s2", "s3", "s4", "s5"), (-0.4, 0.4, -0.4, 0.4, -0.4)):
    add(sfx, C[k] - 0.35, whoosh(0.6, lo=400, hi=7000, peak=0.6), 0.22, pan)
for i, k in enumerate(("sec1", "sec2", "sec3", "sec4", "sec5", "sec6", "sec7")):
    add(sfx, C[k] - 0.18, whoosh(0.35, lo=800, hi=9000, peak=0.5), 0.14, -0.5 if i % 2 else 0.5)
    add(sfx, C[k], bell(note(81 + [0, 4, 7, 12, 7, 4, 0][i]), 0.8), 0.035)
add(sfx, C["world"] - 1.2, riser(1.2), 0.08)
add(sfx, C["world"], boom(1.6, 70, 40, 0.2), 0.35)
add(music, C["secEnd"] + 0.4, sum(bell(note(n), 6) for n in (76, 81, 85)) / 3, 0.08)
add(sfx, C["cta1"] - 0.4, whoosh(0.6), 0.2)
add(sfx, C["cta2"], boom(2.0, 70, 38, 0.25), 0.35)
add(sfx, C["end"] + 0.2, boom(3.0, 80, 30, 0.35), 0.55)
add(sfx, C["end"] + 0.2, hit(), 0.12)
add(music, C["end"] + 0.2, shimmer, 0.14)

# ---------------- MIX + ducking sous la voix ----------------
sr_vo, vo = wavfile.read("vo_edit.wav")
vo = vo.astype(np.float64) / (32768 if vo.dtype == np.int16 else 1)
if vo.ndim > 1: vo = vo.mean(1)
vo = np.pad(vo, (0, max(0, N - len(vo))))[:N]
envv = np.sqrt(signal.sosfiltfilt(signal.butter(2, 4, "low", fs=SR, output="sos"), vo ** 2).clip(0))
envv = envv / (envv.max() + 1e-9)
act = np.clip(envv * 6, 0, 1)
# attaque rapide, relâchement lent
sm = np.copy(act); a_c, r_c = np.exp(-1 / (0.03 * SR)), np.exp(-1 / (0.35 * SR))
for i in range(1, N):
    c = a_c if act[i] > sm[i - 1] else r_c
    sm[i] = c * sm[i - 1] + (1 - c) * act[i]
duck_m = 1 - 0.6 * sm; duck_s = 1 - 0.4 * sm
mix = music * duck_m[:, None] + sfx * duck_s[:, None] + np.stack([vo, vo], 1) * 1.0
mix[-int(0.6 * SR):] *= np.linspace(1, 0, int(0.6 * SR))[:, None]
mix = mix / np.abs(mix).max() * 0.89
wavfile.write("mix.wav", SR, (mix * 32767).astype(np.int16))
wavfile.write("music_sfx_only.wav", SR, ((music + sfx) / np.abs(music + sfx).max() * 0.89 * 32767).astype(np.int16))
print("ok", N / SR)
