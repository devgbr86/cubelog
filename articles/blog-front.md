# Criando um Blog Totalmente Front-end com JavaScript, Marked.js e GitHub Pages

Este artigo detalha a construção de um blog estático, leve e funcional, utilizando exclusivamente tecnologias front-end. A lógica de navegação é implementada com JavaScript puro, enquanto o Marked.js se encarrega da renderização de conteúdo Markdown diretamente no navegador. A hospedagem é feita de forma gratuita através do GitHub Pages.

A proposta central é intencional: criar um blog sem a necessidade de geradores de site estático, etapas de build complexas ou dependências de servidor. O conteúdo é armazenado em arquivos `.md` simples, e todo o processamento é realizado pelo navegador do usuário.

## Estrutura Essencial do Projeto

O projeto é organizado de maneira direta para facilitar a manutenção e a adição de novos conteúdos. A estrutura de diretórios é clara e funcional.

- O arquivo `index.html` serve como o único ponto de entrada da aplicação. Ele é responsável por carregar os estilos visuais, o Marked.js (via CDN) e o script principal `app.js`.
- O diretório `articles/` é dedicado ao armazenamento dos posts do blog. Cada post é um arquivo Markdown individual, o que torna a adição de um novo conteúdo tão simples quanto criar um novo arquivo `.md`.
- O arquivo `js/app.js` constitui o coração da aplicação. Ele gerencia a busca dos arquivos de conteúdo, a renderização dinâmica e o controle da navegação entre os posts.
- Na pasta `css/`, `styles.css` define o layout geral do blog, enquanto `markdown.css` é responsável pela tipografia e pela aparência do conteúdo renderizado a partir do Markdown.

## O Coração do Blog: `index.html`

O `index.html` é a base estrutural do blog. Ele inclui os metadados essenciais, os links para as folhas de estilo e a área principal onde o conteúdo será exibido. O Marked.js é carregado de um CDN, garantindo que a biblioteca esteja disponível para a conversão de Markdown para HTML. O elemento `<main id="content">` é o contêiner dinâmico onde todos os posts serão injetados.

## A Lógica de Navegação em `app.js`

O arquivo `app.js` é o motor que impulsiona a interatividade do blog. A navegação é controlada pela hash da URL (`window.location.hash`), permitindo que diferentes posts sejam carregados sem a necessidade de recarregar a página inteira. A função `loadMarkdown` utiliza `fetch` para buscar assincronamente o arquivo `.md` correspondente. Em seguida, `marked.parse()` converte o conteúdo Markdown em HTML, que é então inserido dinamicamente no DOM.

Para criar um link para um post específico, basta usar a estrutura de âncora com a hash apropriada, como por exemplo, `Ler segundo post`.

## Criando Novos Posts

Cada novo post é um arquivo `.md` que deve ser colocado dentro do diretório `articles/`. A simplicidade é a chave: basta criar o arquivo com o conteúdo em Markdown e, em seguida, criar um link para ele usando a navegação baseada em hash. O Marked.js cuidará da renderização de todos os elementos Markdown, incluindo títulos, parágrafos, listas e até mesmo blocos de código, que serão formatados conforme o `markdown.css`.

## Publicando com GitHub Pages

O deploy do blog é um processo simplificado, aproveitando a funcionalidade gratuita do GitHub Pages. Primeiro, cria-se um repositório público no GitHub. Em seguida, inicializa-se o repositório localmente, adiciona-se os arquivos do projeto e realiza-se o primeiro commit. Após configurar o repositório remoto, o código é enviado para o GitHub.

Nas configurações do repositório no GitHub, na seção **Settings > Pages**, seleciona-se o branch `main` como a fonte para a publicação. Em poucos minutos, o blog estará acessível através de uma URL fornecida pelo GitHub Pages, como `https://SEU_USUARIO.github.io/meu-blog/`. Qualquer push subsequente para o branch configurado resultará em uma atualização automática do site.

## Considerações Finais

Esta abordagem é particularmente eficaz para blogs pessoais, portfólios e documentações que não exigem funcionalidades complexas. As limitações incluem a ausência de busca server-side e a não geração automática de feeds RSS. Além disso, o navegador precisa de acesso à rede para buscar cada arquivo `.md` via `fetch`.

Para projetos que demandam maior escalabilidade ou funcionalidades avançadas, ferramentas como Eleventy ou Astro, que realizam a pré-renderização do HTML em tempo de build, podem ser mais adequadas. No entanto, para o propósito de um blog simples e direto, a solução apresentada é eficiente e sem overhead desnecessário.
