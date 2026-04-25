// ui.js
// Componentes visuais fixos: navbar e footer.

// ─── NAVBAR ───────────────────────────────────────────────

function renderNavbar() {
  const nav = document.getElementById("nav");
  if (!nav) return;

  nav.innerHTML = `
    <img src="${CONFIG.icon}" style="width: 32px; height: 32px; border-radius: 25%;">
    <a href="${BASE}/" data-link>Home</a>
  `;

  bindLinks();
}

// ─── FOOTER ───────────────────────────────────────────────

function renderFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;

  const products = CONFIG.products.map((p, i) => `
    ${p.icon} ${p.title}
    <br><a href="${BASE}/p/${p.slug}" id="footer-product-${i}">→ Explorar</a>
    <br>
  `).join("");

  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-about">
        <span class="footer-brand">Sobre</span>
        <p>Projeto desenvolvido por ${CONFIG.author}.</p>
        <p><br>${products}</p>
      </div>
      <div class="footer-col">
        <span class="footer-col-title">Contato</span>
        <a href="mailto:${CONFIG.email}">${CONFIG.email}</a>
        <a href="${CONFIG.github}" target="_blank" rel="noopener">${CONFIG.github.replace('https://', '')}</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${CONFIG.siteName}</span>
      <a href="${BASE}/legal" id="footer-legal-link">Privacidade e Termos</a>
    </div>
  `;

  CONFIG.products.forEach((p, i) => {
    document.getElementById(`footer-product-${i}`).onclick = (e) => {
      e.preventDefault();
      navigate('/p/' + p.slug);
    };
  });

  document.getElementById("footer-legal-link").onclick = (e) => {
    e.preventDefault();
    navigate('/legal');
  };
}