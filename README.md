# Portfólio — 15/07/2026

Portfólio pessoal desenvolvido com React e identidade visual inspirada em terminais Linux. Como sou fã de Linux, transformei essa afinidade em parte central da experiência visual do projeto. O site apresenta minha trajetória, habilidades e projetos nas áreas de **Software e Dados**.

## Demonstração

🌐 **Portfólio online:** [acessar demonstração](https://rainer-sacks-git-main-safforcks-projects.vercel.app/)

> A versão online é publicada a partir de um repositório privado que contém os recursos visuais necessários para a execução completa do projeto.

## Sobre o projeto

Este portfólio foi criado para reunir minha apresentação profissional, meus conhecimentos técnicos e os projetos que desenvolvi durante minha formação em Engenharia de Software.

A interface reproduz a experiência de um ambiente Linux e utiliza elementos como terminal, informações do sistema, calendário, relógio, arte ASCII e comandos estilizados. A proposta nasceu do meu interesse pelo sistema operacional e busca apresentar o conteúdo de maneira original, sem comprometer a clareza da navegação.

## Páginas

- **Home:** apresentação e visão geral do portfólio;
- **Sobre:** formação, interesses, missão, visão e valores;
- **Projetos:** projetos organizados em um carrossel horizontal;
- **Habilidades:** conhecimentos em Dados e Análise, Desenvolvimento, Ferramentas e Idiomas;
- **Contato:** formulário validado e links profissionais.

## Funcionalidades

- Navegação entre páginas com React Router;
- interface inspirada em terminal e sistema Linux;
- calendário e relógio atualizados dinamicamente;
- arte ASCII animada;
- carrossel horizontal de projetos;
- organização das habilidades por categoria;
- formulário com React Hook Form;
- envio de mensagens pelo Formspree;
- estados de carregamento, erro e confirmação;
- proteção básica contra spam com honeypot;
- utilização da Canvas API em elementos visuais;
- aviso específico para viewports não suportados.

## Tecnologias

- React;
- Vite;
- JavaScript;
- HTML5;
- CSS Modules;
- React Router;
- React Hook Form;
- React Icons;
- Formspree;
- Canvas API.

## Sobre os arquivos visuais

As imagens, animações e GIFs autorais utilizados na versão publicada **não estão incluídos neste repositório público**.

O repositório público tem como objetivo apresentar a organização e a implementação do código. Alguns recursos visuais podem ser substituídos por placeholders, e a aparência da execução local pode ser diferente da demonstração online.

```text
Versão online
└── código completo + recursos visuais autorais

Repositório público
└── código demonstrativo + placeholders
```

## Estrutura do projeto

```text
portfolio/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── sidebar.jsx
│   │   ├── header.jsx
│   │   ├── CanvasImage.jsx  # Renderização de imagens em Canvas
│   │   ├── ProtectedGif.jsx # Renderização de GIFs
│   │   ├── calendario.jsx
│   │   ├── relogio.jsx
│   │   └── asciiArt.jsx
│   ├── pages/               # Páginas da aplicação
│   │   ├── Home.jsx
│   │   ├── Sobre.jsx
│   │   ├── Projetos.jsx
│   │   ├── Habilidades.jsx
│   │   └── Contato.jsx
│   ├── styles/              # CSS Modules
│   ├── data/
│   │   └── projetos.json    # Dados dos projetos
│   ├── assets/              # Imagens, GIFs e vídeos na versão completa
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── video/               # Vídeos públicos na versão completa
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/);
- npm;
- Git.

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Safforcks/portfolio.git
```

2. Entre na pasta:

```bash
cd portfolio
```

3. Instale as dependências:

```bash
npm install
```

4. Para utilizar o formulário, crie `.env.local` na raiz:

```env
VITE_FORMSPREE_ID=seu_id_do_formspree
```

5. Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

O endereço local normalmente será `http://localhost:5173`.

> Para reproduzir a interface visual completa, será necessário adicionar arquivos próprios nos lugares reservados aos recursos que não acompanham o repositório público.

## Build

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

## Compatibilidade

O portfólio foi projetado para telas maiores. Em telas médias ou pequenas, é exibido um aviso de viewport ainda não suportada.

## Contato

- **E-mail:** [safforckssacks@gmail.com](mailto:safforckssacks@gmail.com)
- **LinkedIn:** [linkedin.com/in/rainer-sacks](https://www.linkedin.com/in/rainer-sacks-726825349/)

## Direitos autorais

As imagens, animações, GIFs, composições visuais e demais elementos gráficos autorais utilizados na versão publicada pertencem a **Rainer Sacks** e não podem ser reutilizados sem autorização.

O código-fonte permanece protegido pelas regras de direitos autorais aplicáveis enquanto nenhuma licença específica for adicionada ao repositório.

© 2026 Rainer Sacks. Todos os direitos reservados
