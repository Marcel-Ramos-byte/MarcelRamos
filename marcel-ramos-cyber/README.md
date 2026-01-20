# Atualizacoes do Site

## O que foi ajustado
- `indexcybersec.html` reestruturado para usar o mesmo estilo global de `style.css` e a mesma navegacao da pagina principal.
- `index.html` reconstruida com hero, grid de projetos e link direto para o case study.
- `style.css` expandido com estilos para o case study, componentes e utilitarios.
- `app.js` adicionado para menu mobile e bloqueios basicos de copia/impressao.
- `vercel.json` adicionado com headers de seguranca (CSP, XFO, X-Content-Type-Options, etc.).

## Notas de seguranca (importante)
- **SQL Injection**: nao se aplica a paginas estaticas. Esse tipo de ataque depende de backend com banco de dados. Se futuramente houver formulários ou APIs, sera necessario validar input no servidor e usar queries parametrizadas.
- **Web scraping**: nao existe bloqueio perfeito no front-end. O que foi adicionado e apenas dissuasao basica (bloqueio de copy/print/context menu). Bots podem ignorar isso.
- **Print Screen**: nao e possivel bloquear de forma confiavel. O script apenas mostra aviso quando o navegador detecta o evento.
- **CSP**: o `vercel.json` aplica uma politica restritiva. Se voce adicionar fontes externas, analytics ou embeds, sera necessario ajustar o CSP.

## Implantacao na Vercel
1. Garantir que `vercel.json`, `app.js`, `index.html`, `indexcybersec.html` e `style.css` estejam no repo.
2. Fazer deploy normalmente (Vercel detecta site estatico).
3. Se futuramente quiser **renderizacao via backend**, considere migrar para Next.js ou usar Serverless Functions. Isso permite controlar acesso no servidor, mas exige nova estrutura de projeto.

## Arquivos principais
- `index.html`
- `indexcybersec.html`
- `style.css`
- `app.js`
- `vercel.json`
