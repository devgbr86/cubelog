# Fyregrid Blog

Blog pessoal desenvolvido como uma Single Page Application (SPA) pura, sem frameworks ou bundlers. Hospedado no GitHub Pages sob o subpath `/blog`.

---

## Estrutura do projeto

O projeto é composto por arquivos HTML, CSS e JavaScript vanilla organizados de forma simples. Os artigos são escritos em Markdown com frontmatter YAML e ficam na pasta `articles/`. A lista de artigos é mantida em `data/articles.json`, que serve como índice central com título, slug, descrição, data e tags de cada post.

---

## Como os artigos funcionam

Cada artigo é um arquivo `.md` com um bloco de frontmatter no topo, delimitado por `---`, contendo metadados como título e data. O arquivo `articles.js` é responsável por fazer o parse desse frontmatter, separar o corpo do conteúdo e converter o Markdown para HTML usando a biblioteca `marked.js`. O resultado é injetado diretamente no DOM.

---

## Roteamento client-side

O roteamento é feito inteiramente no browser, sem servidor. Há três arquivos centrais nesse mecanismo.

### O problema do GitHub Pages com SPAs

O GitHub Pages serve arquivos estáticos. Quando o usuário acessa uma URL como `/blog/post/meu-artigo` diretamente ou dá refresh, o servidor procura um arquivo físico nesse caminho — que não existe. O resultado seria uma página 404 do próprio GitHub.

### A solucao com 404.html

O GitHub Pages permite customizar a página de erro 404. O arquivo `404.html` aproveita isso: em vez de mostrar um erro, ele extrai o path da URL atual, remove o prefixo `/blog`, e redireciona o usuario para `/?path=/post/meu-artigo`. Assim o `index.html` carrega normalmente com o path desejado como parametro de query string.

### router.js

O `router.js` e o cerebro da navegacao. Ele define a variavel `BASE`, que e detectada automaticamente: em localhost fica vazia, no GitHub Pages vale `/blog`. Isso permite desenvolver localmente sem configurar nada.

A funcao `navigate(path)` atualiza a URL do browser usando a History API (`pushState` ou `replaceState`) sem recarregar a pagina, e chama `resolveRoute` para renderizar o conteudo correto.

A funcao `resolveRoute(path)` mapeia o path para a funcao de render adequada. O path `/` chama `renderHome()`, paths que comecam com `/post/` chamam `openArticle(slug)`, e `/legal` chama `showLegal()`. Qualquer outro path chama `renderNotFound()`.

A funcao `currentPath()` extrai o path relativo da URL atual do browser, removendo o prefixo `BASE` com `slice` — mais seguro que `replace`, que poderia cortar partes indevidas do path caso o slug contivesse a string "blog".

A funcao `initRouter()` e chamada uma vez na inicializacao. Ela verifica se existe o parametro `?path=` na URL (vindo do redirect do `404.html`) e, se sim, navega para esse path limpando a query string do historico. Caso contrario, resolve o path atual normalmente. Por fim, registra um listener no evento `popstate` para tratar navegacao com os botoes de voltar e avançar do browser.

---

## Busca

A busca na home funciona em cima do conteudo ja carregado. Ao digitar, o `home.js` filtra os artigos por titulo, descricao, tags e conteudo. O conteudo dos artigos e pre-carregado em background logo apos a home renderizar, usando `preloadArticleContents()`, e armazenado em cache em memoria para que a busca funcione sem novas requisicoes.

---

## Rodape e pagina legal

O rodape e renderizado pelo `footer.js` e e persistente em todas as views. O link de privacidade e termos usa o mesmo sistema de roteamento interno — chama `navigate('/legal')` — em vez de recarregar a pagina.

---

## Desenvolvimento local

Abra o projeto com o Live Server do VS Code clicando com o botao direito em `index.html` e escolhendo "Open with Live Server". Isso garante que o site e servido a partir da raiz, evitando problemas de path relativo.

---

## Deploy

O deploy e feito pelo GitHub Pages apontando para a branch principal. O unico requisito e que o arquivo `404.html` esteja na raiz do repositorio junto com o `index.html`, para que o mecanismo de redirect funcione corretamente.