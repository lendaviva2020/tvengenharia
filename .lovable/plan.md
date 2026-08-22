# Análise do site TV Engenharia — melhorias propostas

Revisei a landing page, a página de privacidade, as rotas de robots/sitemap, os metadados e os arquivos de estilo. O site está bem estruturado; abaixo estão os pontos que valem correção, agrupados por prioridade.

## 1. Correções técnicas (alta prioridade)

- **Sitemap incompleto**: `/privacidade` existe mas não está listado. Adicionar a segunda URL na rota `/sitemap.xml`.
- **Sitemap duplicado**: existem dois sitemaps (`public/sitemap.xml` estático e a rota dinâmica). O arquivo estático pode ser servido em vez da rota e ficar desatualizado. Remover o estático e manter só a rota; mesma lógica para `public/robots.txt` vs. a rota `/robots.txt`.
- **Domínio inconsistente**: o código usa `https://tvengenharia.vercel.app` em canonical/og:url/JSON-LD, mas o site também está publicado em `tvengenharia.lovable.app`. Definir um domínio canônico único (decisão sua) e usá-lo em todos os lugares.
- **Google Analytics inativo**: `G-PLACEHOLDER` em `src/lib/analytics.ts`. Substituir pelo ID real (você me passa) para começar a medir.
- **Título duplicado**: `__root.tsx` e `index.tsx` definem o mesmo título/descrição. Manter os específicos nas rotas e deixar o root só com fallback.

## 2. SEO local e dados estruturados

- Enriquecer o `ProfessionalService` com `address` (Cafelândia/PR), `telephone`, `email`, `areaServed`, `openingHours` e `sameAs` (Instagram e Facebook) — hoje faltam campos que o Google usa para negócios locais.
- Adicionar `FAQPage` com 5–6 perguntas reais (quanto custa um projeto, prazo de aprovação, como funciona o chave na mão, o que é desmembramento etc.). Gera rich results e responde dúvidas comuns.
- Adicionar `BreadcrumbList` na página de privacidade.
- Incluir `og:image` também no `/privacidade` e garantir `og:image:width/height`.

## 3. Performance

- As fotos do portfólio e do hero são JPGs grandes servidos em tamanho único. Gerar versões responsivas (`srcset`/`sizes`) e usar `width`/`height` explícitos para evitar layout shift (CLS).
- Adicionar `<link rel="preload">` para a imagem do hero.
- O iframe do Google Maps carrega scripts de terceiros no primeiro paint: aplicar `loading="lazy"` (se ainda não tiver) ou carregar sob clique com uma imagem estática de fallback.

## 4. Acessibilidade

- O lightbox do portfólio precisa de foco preso (focus trap), foco inicial no diálogo, fechamento com `Esc` e retorno de foco ao card de origem.
- Adicionar link "pular para o conteúdo" no topo.
- Verificar contraste do dourado sobre grafite em textos pequenos (kickers com `tracking` largo) e garantir estados de foco visíveis em todos os botões/links.
- Associar mensagens de erro do formulário aos campos com `aria-describedby` e `aria-invalid`.

## 5. Conteúdo e conversão

- Seção de depoimentos/prova social (mesmo que 3 curtos) — hoje não existe.
- Bloco de FAQ visível na página (alinhado ao schema acima).
- CTA fixo no rodapé mobile com WhatsApp + telefone.
- Página dedicada por serviço (ex.: `/chave-na-mao`, `/desmembramento`) para capturar buscas específicas — hoje tudo está em uma única página, o que limita o alcance orgânico.
- Exibir número de telefone clicável (`tel:`) além do WhatsApp.

## Detalhes técnicos

Arquivos envolvidos: `src/routes/index.tsx` (metadados, JSON-LD, portfólio, formulário, mapa), `src/routes/privacidade.tsx`, `src/routes/sitemap[.]xml.ts`, `src/routes/robots[.]txt.ts`, `public/sitemap.xml` e `public/robots.txt` (remoção), `src/lib/analytics.ts`, `src/routes/__root.tsx`.

## Sugestão de execução

Posso implementar em ondas: (1) correções técnicas + SEO local, (2) acessibilidade + performance, (3) conteúdo novo (FAQ, depoimentos, páginas por serviço). Me diga por onde começar — e, se possível, o ID real do GA4 e qual domínio é o canônico.
