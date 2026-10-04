// Point d'entrée du prérendu SEO : transforme une URL en HTML complet + balises <head>.
// Utilisé uniquement au build (script/build.ts), jamais dans le navigateur.
// renderToPipeableStream + onAllReady attend les pages chargées à la demande (lazy).
import { renderToPipeableStream } from "react-dom/server";
import { Writable } from "stream";
import App from "./App";

export function render(url: string): Promise<{ html: string; head: string; htmlAttrs: string }> {
  const helmetContext: { helmet?: Record<string, { toString(): string }> } = {};
  return new Promise((resolve, reject) => {
    let html = "";
    const sink = new Writable({
      write(chunk, _enc, cb) {
        html += chunk.toString();
        cb();
      },
      final(cb) {
        const h = helmetContext.helmet;
        const head = h ? ["title", "meta", "link", "script"].map((k) => h[k]?.toString() ?? "").join("\n    ") : "";
        resolve({ html, head, htmlAttrs: h?.htmlAttributes?.toString() ?? "" });
        cb();
      },
    });
    const stream = renderToPipeableStream(<App ssrPath={url} helmetContext={helmetContext} />, {
      onAllReady() {
        stream.pipe(sink);
      },
      onError(err) {
        reject(err);
      },
    });
  });
}
