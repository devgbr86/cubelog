// kits.js
// Renderiza a página de Kits.

function renderKits() {
  document.title = "Kits | Fyregrid";
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="markdown-body kits-page">
      <h1>Kits</h1>
      <p>Código pronto. Você adapta, entrega e segue em frente.</p>
      <p>Cada kit é um <code>.zip</code> com estrutura real de projeto — sem tutorial, sem enrolação. Você abre, lê o README, e já sabe o que fazer.</p>

      <hr>

      <h2>Para quem é isso</h2>
      <p>Para o dev que não quer partir do zero toda vez. Que já sabe o que está fazendo e só precisa da estrutura certa pra começar rápido.</p>
      <p>Não é curso. Não é template de landing page genérica. É código que você vai querer ter escrito.</p>

      <hr>

      <h2>O que tem nos kits</h2>
      <p><strong>Blueprints</strong> — arquitetura de projetos reais. Estrutura de pastas, convenções, separação de responsabilidades. Você clona, renomeia, e já está no modo produção.</p>
      <p><strong>Templates</strong> — interfaces prontas com HTML, CSS e JS vanilla. Sem framework obrigatório. Sem dependência desnecessária. Fácil de entender, fácil de customizar.</p>
      <p><strong>Boilerplates</strong> — pontos de partida para projetos específicos: blog estático, dashboard, portfólio, landing page. Cada um com decisões já tomadas pra você não perder tempo.</p>

      <hr>

      <h2>Como funciona</h2>
      <p>Você compra, recebe o <code>.zip</code>, extrai e usa. Sem assinatura, sem plataforma, sem DRM. O arquivo é seu.</p>

      <hr>

      <p>Os primeiros kits estão sendo finalizados. Se quiser ser avisado quando sair:</p>

      <div class="kits-contact">
        <a href="https://wa.me/5531996981103" target="_blank" rel="noopener" class="kits-cta kits-cta--secondary">
          WhatsApp · (31) 99698-1103
        </a>
        <a href="mailto:topverbs@gmail.com" class="kits-cta kits-cta--secondary">
          topverbs@gmail.com
        </a>
      </div>
    </div>
  `;

  updateNavActive("/kits");
  window.scrollTo(0, 0);
}