// config.js
// Configuração central do blog. Edite aqui para personalizar.

// ─── BASE URL ─────────────────────────────────────────────

const BASE = location.hostname === '127.0.0.1' || location.hostname === 'localhost'
  ? ''
  : '/blog';

// ─── CONFIG ───────────────────────────────────────────────

const CONFIG = {
  siteName:  "grcodev/blog",
  author:    "Guilherme Ribeiro",
  email:     "topverbs@gmail.com",
  github:    "https://github.com/grcodev",
  icon:      `${BASE}/grimbook_icon.png`,

  products: [
    {
      icon:  "🛠️",
      title: "Documentação de Projetos + JavaScript Boilerplate Kit",
      slug:  "jskit",
    },
    {
      icon:  "📘",
      title: "EBOOK Manual Completo Git & VSCode",
      slug:  "ebook",
    },
  ],
};