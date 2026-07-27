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
        ├── FAQ.jsx
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

Dados de contato fictícios (WhatsApp, e-mail) estão em `src/components/CTA.jsx` e `src/components/Footer.jsx` — substitua pelos reais antes de publicar. **Atenção:** hoje o telefone do rodapé (DDD 11) e o número do WhatsApp do botão de orçamento (DDD 31) são inconsistentes — corrija os dois para o mesmo número real.

## FAQ

A seção `#faq` (`src/components/FAQ.jsx`) é uma grid estática minimalista (3 colunas no desktop, 2 no tablet, 1 no mobile) — cada card mostra pergunta e resposta direto, sem accordion. Isso é proposital: como nenhum card muda de altura, a seção nunca pode "empurrar"/desalinhar o que vem depois dela (a `CTA` de contato). As perguntas ficam em `faqs` dentro de `src/data.js`.

## Área do Cliente (Portal do Cliente)

O botão "Área do Cliente" no header (`Header.jsx`) aponta para `clientPortalUrl`, exportado em `src/data.js`. O Portal do Cliente é um projeto separado (`../client-portal`, backend Node/Express + PostgreSQL — não roda em hospedagem estática) e por enquanto só existe local, exposto via túnel manual quando necessário:

```bash
cd client-portal
docker compose up -d postgres
node --watch server/src/server.js &
cd client && npm run dev &
~/.local/bin/cloudflared tunnel --url http://localhost:5174
```

O `cloudflared` imprime uma URL pública nova a cada execução (ex: `https://algo-aleatorio.trycloudflare.com`) — **atualize manualmente `clientPortalUrl` em `data.js`** com essa URL sempre que abrir um novo túnel para o cliente testar. Fechar o túnel derruba o acesso externo na hora.

Quando o Portal tiver hospedagem definitiva (Railway ou Hostinger VPS — ver roadmap do próprio projeto), `clientPortalUrl` passa a ser um endereço fixo e esse processo manual deixa de ser necessário.

## SEO

- `index.html` tem `<title>`, `<meta description>`, Open Graph, Twitter Card, `canonical`, `robots` e JSON-LD (`ProfessionalService`) configurados.
- `public/robots.txt` e `public/sitemap.xml` apontam para `https://studiocastro.github.io/StudioCastro/`.
- `public/og-image.png` é uma cópia do logo (1254×1254, ~1.3MB) usada no compartilhamento em redes sociais — vale trocar por uma imagem 1200×630 mais leve (comprimida) quando houver uma arte definitiva.

## Segurança — auditoria realizada (2026-07-24)

Este projeto é uma **SPA estática sem backend, sem autenticação, sem banco de dados e sem upload de arquivos**, publicada como site puramente estático no GitHub Pages. Por isso, a maior parte de uma checklist de segurança "enterprise" (JWT, Argon2id, Docker, rate limiting de API, proteção contra SQL/NoSQL Injection, CORS de API, etc.) **não se aplica** — não existe superfície de ataque correspondente. Abaixo, o que foi auditado e corrigido nesta sessão:

**Corrigido:**
- ✅ Adicionado `.gitignore` — `node_modules/` (266 pacotes) e `dist/` (build gerado) estavam versionados no git sem necessidade; foram removidos do rastreamento (`git rm --cached`, arquivos continuam no disco). Isso também evita que um futuro `.env` seja commitado por engano.
- ✅ Adicionado `Content-Security-Policy` e `Referrer-Policy` via `<meta>` em `index.html` (`default-src 'self'`, sem `unsafe-inline` em scripts, `frame-ancestors 'none'`, `object-src 'none'`). Build testado após a mudança, sem quebras.
- ✅ Confirmado: nenhum uso de `dangerouslySetInnerHTML`, `eval`, `innerHTML` ou `document.write` no código-fonte — sem vetores de XSS via DOM.
- ✅ Confirmado: todos os links `target="_blank"` (`Projects.jsx`) já usam `rel="noopener noreferrer"` — protegido contra reverse tabnabbing.
- ✅ Confirmado: o dropdown de tipo de projeto (`ProjectTypeSelect`) usa uma lista fixa de opções (não é input livre de usuário) e o texto é passado por `encodeURIComponent` antes de virar URL do WhatsApp — sem risco de injeção.

**Identificado, não corrigido automaticamente (decisão do usuário):**
- ⚠️ `npm audit`: 1 vulnerabilidade moderada + 1 alta, ambas em `esbuild` (via `vite`) — **GHSA-67mh-4wv8-2f99**, afeta apenas o dev server (`npm run dev`) quando exposto em rede (`--host`), não afeta o build de produção. Corrigir exige `vite@6+` (breaking change) — atualizar quando houver tempo para testar o dev workflow.
- ⚠️ **Limitação de hospedagem:** GitHub Pages não permite configurar headers HTTP customizados. Isso significa que `X-Frame-Options`, `Strict-Transport-Security`, `Permissions-Policy`, `X-Content-Type-Options` e `Cross-Origin-Opener/Embedder/Resource-Policy` **não podem ser aplicados** enquanto o site estiver nesse host (não existem equivalentes via `<meta>` para esses headers). `frame-ancestors` no CSP também é ignorado quando entregue via `<meta>` — só funciona como header HTTP real.
  - Mitigação compensatória: migrar para Netlify, Vercel ou Cloudflare Pages (todos com plano gratuito e suporte a arquivo de headers customizados) se a proteção completa contra clickjacking/MIME-sniffing for necessária no futuro.

## Próximos passos (para continuar em sessões futuras)

1. Substituir dados de contato fictícios (telefone, WhatsApp, e-mail) por dados reais e consistentes.
2. Avaliar migração de hospedagem (Netlify/Vercel/Cloudflare Pages) se precisar dos headers de segurança completos.
3. Atualizar `vite` para a v6+ quando houver tempo para testar (resolve o advisory do esbuild).
4. Comprimir/otimizar `public/og-image.png` (ou substituir por uma arte 1200×630 dedicada).
5. Revisar se os links de redes sociais no rodapé (`href="#"`) devem apontar para perfis reais.
6. Migrar o Portal do Cliente (`../client-portal`) para uma hospedagem fixa (Railway ou Hostinger VPS) e trocar `clientPortalUrl` em `data.js` por esse endereço definitivo, eliminando a necessidade do túnel manual.
