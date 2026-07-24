import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// O CSP bloqueia o script/estilo inline que o Vite injeta em modo dev para
// hot-reload, então esses headers só são adicionados no HTML de produção
// (ctx.bundle só existe durante `vite build`, não durante `vite dev`).
function injectSecurityMetaTags() {
  const tags = `
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests"
    />
`;

  return {
    name: "inject-security-meta-tags",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        if (!ctx.bundle) return html;
        return html.replace("</head>", `${tags}  </head>`);
      },
    },
  };
}

export default defineConfig({
  base: "/StudioCastro/",
  plugins: [react(), injectSecurityMetaTags()],
});
