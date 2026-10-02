import { createRoot } from "react-dom/client";
import App, { loadBlogPost } from "./App";
import "./index.css";

// Sur une page article, on charge son code avant d'afficher, pour ne pas faire
// disparaître le contenu prérendu le temps du téléchargement.
const ready = /^\/blog\/\d+/.test(window.location.pathname) ? loadBlogPost() : Promise.resolve();
ready.finally(() => createRoot(document.getElementById("root")!).render(<App />));
