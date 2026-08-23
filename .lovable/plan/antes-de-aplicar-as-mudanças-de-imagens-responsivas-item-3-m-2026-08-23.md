# Antes de aplicar as mudanças de imagens responsivas (item 3), me confirme uma coisa: as variantes geradas por essa transformação (?w=...&format=webp) resultam em arquivos estáticos reais, gerados durante o build e incluídos no bundle final (como já acontece hoje com hero-casa.jpg), ou dependem de uma URL/proxy que só resolve dentro do domínio do Lovable (como o caminho /__l5e/... que já nos causou imagens quebradas na Vercel antes)?



# Se for a segunda opção, não aplique dessa forma — use um mecanismo que gere arquivos estáticos de verdade no build, do mesmo jeito que a imagem do hero já funciona hoje em qualquer domínio.Melhorias técnicas: SEO, performance e acessibilidade

Nove ajustes pontuais, sem mudar conteúdo nem comportamento do site.

## 1. Sitemap

Adicionar `/privacidade` na rota `src/routes/sitemap[.]xml.ts` e no arquivo estático `public/sitemap.xml`, mantendo a home e os dois arquivos.

## 2. Dados estruturados (ProfessionalService)

No JSON-LD da home, incluir:

- `address` — PostalAddress: Cafelândia, PR, BR
- `telephone` — os dois números (+5545999213004 Tiago, +5545998176765 Angélica)
- `email` — [angelicabloinski@hotmail.com](mailto:angelicabloinski@hotmail.com)
- `areaServed` — "Cafelândia e região, Paraná"
- `sameAs` — links do Instagram e Facebook usados no rodapé

## 3. Imagens

- Hero já tem `width`/`height`; acrescentar `sizes="100vw"`.
- Cards do portfólio e imagem do lightbox: adicionar `width`/`height` explícitos e `sizes` correspondentes ao espaço real (coluna do grid no card, largura do diálogo no lightbox).
- Gerar variantes responsivas via query de importação do Vite (`?w=...&format=webp`) para montar `srcset` nas fotos do portfólio e no hero.

## 4. Mapa sob clique

Substituir o `<iframe>` do Google Maps por um placeholder leve (imagem estática/painel em gradiente com o nome da cidade) e um botão "Carregar mapa". O iframe só é montado após o clique. O texto "Atendemos Cafelândia e região" permanece acima.

## 5. Acessibilidade do lightbox

- Foco inicial no diálogo ao abrir
- Foco preso (Tab/Shift+Tab circulam dentro do diálogo)
- Fechar com `Esc`
- Devolver o foco ao card que abriu o modal
- Bloquear scroll do body enquanto aberto

## 6. Acessibilidade geral

- Link "Pular para o conteúdo" no topo, visível só no foco de teclado, apontando para o `<main>`/`#conteudo`.
- Estado de foco visível padronizado (`focus-visible:outline` dourado) em botões, links e campos.
- Formulário: `aria-invalid` nos campos com erro e `aria-describedby` ligando cada mensagem de erro ao seu campo (ids únicos), com `role="alert"` na mensagem.

## 7. Contraste

Medir o dourado atual (`oklch(0.73 0.115 89)`) sobre o grafite (`oklch(0.18 0.012 258)`). Se algum texto pequeno (kickers com `tracking` largo, legendas de 11–12px) ficar abaixo de 4.5:1, clarear levemente o token usado nesses textos (novo token `--gold-text`) mantendo o dourado atual nos elementos gráficos, para não alterar a identidade visual.

## 8. Telefones clicáveis

Na seção de Contato, exibir `(45) 99921-3004` e `(45) 99817-6765` também como links `tel:` clicáveis, ao lado dos botões de WhatsApp, com evento de analytics próprio (`phone_click`).

## 9. og:image em /privacidade

Adicionar `og:image` (mesma imagem absoluta usada na home), `og:image:width` e `og:image:height` no `head()` de `src/routes/privacidade.tsx`.

## Detalhes técnicos

Arquivos: `src/routes/index.tsx`, `src/routes/privacidade.tsx`, `src/routes/sitemap[.]xml.ts`, `public/sitemap.xml`, `src/styles.css`.

Observação: o mapa sob clique remove um iframe de terceiros do carregamento inicial — ganho direto de LCP/TBT no mobile.