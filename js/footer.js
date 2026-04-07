// footer.js
// Renderiza o rodapé persistente com about, contato e links.

function renderFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;

  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-about">
        <span class="footer-brand">ScriptPRO</span>
        <p>Artigos, kits e recursos sobre desenvolvimento front-end — focado em quem já sabe o básico e quer ir mais fundo.</p>
      </div>



        <div class="footer-col">
          <span class="footer-col-title">Contato</span>
          <a href="mailto:topverbs@gmail.com">topverbs@gmail.com</a>
          <a href="https://github.com/ribeirorep" target="_blank" rel="noopener">GitHub</a>
          <a href="https://linkedin.com/in/gribeirodev" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 ScriptPRO</span>
      <a href="#" id="footer-legal-link">Privacidade e Termos</a>
    </div>
  `;

  // Legal modal / inline toggle
  document.getElementById("footer-legal-link").onclick = (e) => {
    e.preventDefault();
    showLegal();
  };

  // Rebind nav links inside footer
  footer.querySelectorAll("[data-link]").forEach((el) => {
    el.onclick = (e) => {
      e.preventDefault();
      const href = el.getAttribute("href");
      history.pushState(null, "", href);
      navigate(href);
    };
  });
}

// ─── LEGAL (inline no app) ───────────────────────────────

function showLegal() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="legal-wrap markdown-body">
      <h1>Documentos Legais — ScriptPRO</h1>
      <blockquote>
        <strong>ScriptPRO</strong> · Microempreendedor Individual<br>
        Produtos digitais, tutoriais e conteúdo educacional sobre programação<br>
        Última atualização: abril de 2026
      </blockquote>

      <h2>Sumário</h2>
      <ol>
        <li><a href="#privacidade">Política de Privacidade</a></li>
        <li><a href="#cookies">Política de Cookies</a></li>
        <li><a href="#termos">Termos de Uso</a></li>
      </ol>

      <hr>

      <h2 id="privacidade">1. Política de Privacidade</h2>
      <h3>1.1 Quem somos</h3>
      <p>A <strong>ScriptPRO</strong> é uma microempresa individual dedicada à criação e venda de produtos digitais — incluindo PDFs, tutoriais e materiais educacionais sobre programação — e à manutenção de um blog de conteúdo instrucional.</p>

      <h3>1.2 Quais dados coletamos</h3>
      <p><strong>Dados fornecidos por você:</strong> nome, e-mail, dados de pagamento (processados por terceiros), mensagens de contato.</p>
      <p><strong>Dados coletados automaticamente:</strong> IP, navegador, sistema operacional, páginas visitadas, fonte de acesso.</p>

      <h3>1.3 Para que usamos seus dados</h3>
      <p>Processamento de compras, entrega de produtos, suporte, newsletters (com consentimento), melhoria do conteúdo, obrigações legais e prevenção de fraudes.</p>

      <h3>1.4 Base legal (LGPD)</h3>
      <p>Art. 7º da Lei nº 13.709/2018 — execução de contrato, consentimento, obrigação legal e legítimo interesse.</p>

      <h3>1.5 Compartilhamento</h3>
      <p>Não vendemos seus dados. Compartilhamos apenas com plataformas de pagamento, e-mail e analytics — todos contratualmente obrigados a tratar com segurança.</p>

      <h3>1.6 Retenção</h3>
      <p>Dados de compra: 5 anos · Newsletter: até cancelamento · Logs: 6 meses · Suporte: 2 anos.</p>

      <h3>1.7 Seus direitos</h3>
      <p>Confirmar, acessar, corrigir, excluir, revogar consentimento, portabilidade e reclamar à ANPD.</p>

      <hr>

      <h2 id="cookies">2. Política de Cookies</h2>
      <p>Utilizamos cookies estritamente necessários (sessão, CSRF), de análise (Google Analytics, anonimizados) e de funcionalidade (preferências). Cookies de marketing apenas com consentimento.</p>
      <p>Você pode gerenciar cookies nas configurações do seu navegador a qualquer momento.</p>

      <hr>

      <h2 id="termos">3. Termos de Uso</h2>
      <h3>3.1 Licença dos produtos digitais</h3>
      <p>Licença pessoal, intransferível e não exclusiva para uso pessoal. É proibido revender, redistribuir ou criar produtos derivados para venda.</p>

      <h3>3.2 Política de reembolso</h3>
      <p>Produto com defeito técnico → reenvio ou reembolso integral. Conteúdo diferente do descrito → reembolso em até 7 dias. Arrependimento em até 7 dias sem download → reembolso integral (CDC Art. 49).</p>

      <h3>3.3 Lei aplicável</h3>
      <p>Leis da República Federativa do Brasil. Foro da comarca do domicílio do titular.</p>

      <hr>
      <p><em>© 2026 ScriptPRO — Todos os direitos reservados.</em></p>

      <div class="back-link-wrap">
        <a href="#" id="back-from-legal">← Voltar</a>
      </div>
    </div>
  `;

  document.title = "Legal | ScriptPRO";
  document.getElementById("back-from-legal").onclick = (e) => {
    e.preventDefault();
    history.back();
  };

  updateNavActive("");
  window.scrollTo(0, 0);
}