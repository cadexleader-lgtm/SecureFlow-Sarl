# Supports marketing SecureFlow

Ce dossier contient la brochure PDF et la vidéo motion design de SecureFlow. Les deux sont générées à partir du code : pour une modification, on change le texte ou un repère, puis on régénère. Rien n'est à refaire à la main.

Le site web n'utilise pas ce dossier, qui n'a aucun impact sur lui.

## Installation (une seule fois)

```bash
cd marketing
npm install
pip install numpy scipy
```

Il faut aussi Chromium (via Playwright) et `ffmpeg`.

## Brochure — `brochure/`

- `build.mjs` : tout le contenu (textes, pages, styles). C'est ici qu'on modifie la brochure.
- `img/` : les photos et le logo détouré (`mark-blue.png`, `mark-white.png`).
- Commande : `npm run brochure` → `brochure/SecureFlow_Presentation_2026.pdf` (15 pages A4).
- Le script signale tout texte qui déborde de sa page.

## Vidéo — `video/`

| Fichier | Rôle |
|---|---|
| `SecureFlow_Voix_Off.md` | Script de la voix off, avec la direction de voix. |
| `voix_off_originale.mp3` | Voix off générée (89 s, avant montage). |
| `cues.json` | Repères en secondes, partagés par l'image et le son. |
| `motion.mjs` | Les 9 scènes animées (GSAP), rendues image par image à 30 i/s. |
| `soundtrack.py` | Musique et effets sonores synthétisés (aucun échantillon externe, donc aucun souci de droits), puis mixage avec la voix. |

### Régénérer la vidéo

```bash
cd marketing/video
# 1. Montage de la voix : réduit les blancs de 4,3 s et 10,4 s, ajoute 0,5 s d'amorce
ffmpeg -y -i voix_off_originale.mp3 -filter_complex "[0:a]aresample=48000,asplit=3[a][b][c];[a]atrim=0:57.47,asetpts=PTS-STARTPTS[s1];[b]atrim=60.88:71.29,asetpts=PTS-STARTPTS[s2];[c]atrim=80.51,asetpts=PTS-STARTPTS[s3];anullsrc=r=48000:cl=mono,atrim=0:0.5[lead];[lead][s1][s2][s3]concat=n=4:v=0:a=1,highpass=f=75,lowpass=f=15000,acompressor=threshold=-22dB:ratio=3:attack=8:release=120:makeup=3,alimiter=limit=0.89[out]" -map "[out]" -ac 1 vo_edit.wav
# 2. Images (environ 5 min) → video_silent.mp4
node motion.mjs
# 3. Son → mix.wav
python3 soundtrack.py
# 4. Assemblage final
ffmpeg -y -i video_silent.mp4 -i mix.wav -c:v copy -c:a aac -b:a 192k -af loudnorm=I=-14:TP=-1.5:LRA=11 -shortest SecureFlow_Motion_1080p.mp4
```

Pour vérifier une scène sans tout rendre : `node motion.mjs --stills 12.5,40,70` produit des captures dans `stills/`.

**Nouvelle voix off :** si elle change, il faut recaler `cues.json` sur les nouveaux moments où chaque phrase commence. L'image et le son suivent alors automatiquement.
