# CastroStudio

Site institucional construído em React + Vite + Tailwind CSS, com cada seção separada em seu próprio componente.

## Estrutura de pastas

```
studioCastro/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx          # ponto de entrada do React
    ├── App.jsx           # componente principal, monta todas as seções
    ├── index.css         # diretivas do Tailwind
    ├── data.js           # conteúdo do site (serviços, projetos, depoimentos, etc.)
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── Services.jsx
        ├── Projects.jsx
        ├── Process.jsx
        ├── About.jsx
        ├── Technologies.jsx
        ├── Testimonials.jsx
        ├── CTA.jsx
        └── Footer.jsx
```

## Como rodar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Acesse `http://localhost:5173` no navegador.

## Build de produção

```bash
npm run build
npm run preview
```

## Editar conteúdo

Todo o texto dinâmico (serviços, projetos, tecnologias, depoimentos, links de navegação) fica centralizado em `src/data.js` — edite ali para trocar textos sem precisar mexer nos componentes.

Dados de contato fictícios (WhatsApp, e-mail) estão em `src/components/CTA.jsx` e `src/components/Footer.jsx` — substitua pelos reais antes de publicar.
