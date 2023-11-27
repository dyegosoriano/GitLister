<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/dyegosoriano/GitLister?style=flat-square">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/dyegosoriano/GitLister?style=flat-square">
  <img alt="GitHub" src="https://img.shields.io/github/license/dyegosoriano/GitLister?style=flat-square">
  <br>
</p>

# Bem-vindo ao GitLister

Este é um projeto web que lista usuários do GitHub. Ele foi projetado para ajudar desenvolvedores e entusiastas do código aberto a descobrir novos colaboradores e explorar a comunidade do GitHub.

O projeto permite que você veja informações detalhadas sobre os usuários do GitHub, incluindo seus repositórios, quantidade de seguidores e muito mais. Com uma interface de usuário intuitiva e fácil de usar, você pode navegar facilmente pela lista de repositórios dos usuários e aprende mais sobre a incrível comunidade de desenvolvedores do GitHub.

Se você estiver interessado em ver o projeto em ação, clique [aqui](https://gitlister.dyegosoriano.com/) para ser redirecionado para o site do projeto.

Obrigado pelo seu interesse no [GitList](https://gitlister.dyegosoriano.com/). Esperamos que você ache este projeto útil e informativo!

# Instalação

Clone o repositório, executando o seguinte comando no terminal: `git clone https://github.com/dyegosoriano/GitLister.git`
Acessar o diretório do projeto e rodar o comando `yarn` para instalação das dependências.
Após a instalação de todas as dependências execute o comando `yarn dev` para executar o projeto no ambiente de desenvolvimento.

## Pré-Requisitos

- Node na versão 18
- Gerenciador de pacotes Yarn

# Ferramentas usadas para desenvolvimento

- react-router-dom = 6.20.0
- React Toastify = 9.1.3
- React Query = 3.39.3
- Tailwindcss = 3.3.5
- Typescript = 5.2.2
- React = 18.2.0

# Estrutura de pastas

```
src - ROOT
├── components
│   ├── Button - Exemplo da estrutura padrão de um componente
│   │   └── index.tsx - Arquivo com a estrutura HTML e CSS do componente Button.
│   └── index.ts - Arquivo central para exportação de todos componentes.
├── context
│   └── *.tsx - Contextos que serão usado.
├── hooks
│   └── *.ts - Hooks que serão usado.
├── pages
│   └── Home - Exemplo da estrutura padrão de uma página.
│       └── index.tsx - Arquivo com a estrutura HTML e CSS da página Home.
├── routes
│   └── index.tsx - Arquivo responsável pelas rotas.
├── services
│   ├── modules - Exemplo da estrutura padrão de uma página.
│   │   └── index.ts - Arquivo central para exportação de todas as rotas de comunicação com API.
│   ├── apiClient.ts - Instância do axios com configurações de conexões do API.
│   └── queryClient.ts - Instância do React Query para cache das requisições.
├── styles
│   └── globals.css - Arquivo de estilização global.
├── types
│   └── index.ts - Arquivo central para exportação de todas as tipagens da pasta types.
├── utils
│   └── index.ts - Arquivo central para exportação de todos scripts da pasta utils.
└── main.tsx
```

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
