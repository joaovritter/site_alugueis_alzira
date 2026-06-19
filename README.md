# Alzira Ritter — Aluguéis de Verão

> Site institucional de temporada para divulgar dois apartamentos em **Capão da Canoa / RS**

![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel&logoColor=white)

---

Front-end estático (sem servidor ou banco de dados) com carrossel de fotos, lightbox, mapa embarcado e animações de scroll. Paleta azul-petróleo + dourado, inspirada na identidade da marca.

**Apartamentos divulgados:**

| Imóvel | Unidade | Endereço |
|---|---|---|
| Residencial Florença | Apto 402 | Rua Guaraci, 1535 — Capão da Canoa/RS |
| Edifício Andorinha | Apto 22 | Rua Sepé, 1542 — Capão da Canoa/RS |

---

## Rodar localmente

Pré-requisito: [Node.js](https://nodejs.org) 18+.

```bash
npm install      # instala as dependências (só na primeira vez)
npm run dev      # abre em http://localhost:5173
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview  # serve a build localmente para conferir
```

---

## Publicar na Vercel

### Via CLI (sem GitHub)

```bash
npm i -g vercel
vercel           # faça login e confirme as perguntas
vercel --prod    # publica a versão final
```

A Vercel detecta o Vite automaticamente. Se solicitar:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### Via painel (deploy automático a cada push)

1. Suba o projeto em um repositório no GitHub.
2. No [painel da Vercel](https://vercel.com) → **Add New → Project** → importe o repositório.
3. Confirme `Build: npm run build` e `Output: dist` → **Deploy**.

A cada `git push`, a Vercel republica automaticamente. Você ganha um link público e pode conectar um domínio próprio depois.

---

## Editar o conteúdo

Todo o conteúdo editável (textos, comodidades, contatos, lista de fotos) fica em **um único arquivo**:

```
src/data/apartments.js
```

| O que editar | Onde |
|---|---|
| WhatsApp, Instagram, Facebook | objeto `CONTACT` no topo do arquivo |
| Título, endereço, descrição, comodidades | objeto de cada apartamento em `APARTMENTS` |
| Fotos | array `photos` de cada apartamento |
| Cores da marca | variáveis CSS em `src/index.css` (bloco `:root`) |

**Para trocar ou adicionar fotos:** coloque o arquivo em `public/img/florenca/` ou `public/img/andorinha/` e referencie em `photos: [{ src, caption }]`.

---

## Observações

- **Mapas** usam o Google Maps embutido sem chave de API. Em alguns ambientes de pré-visualização podem não carregar, mas funcionam normalmente no site publicado. O botão "Abrir no Google Maps" sempre funciona como alternativa.
- **Valores** são exibidos como *"sob consulta"* — toda negociação é direcionada ao WhatsApp.

---

## Estrutura do projeto

```
public/
  brand/               # logo (light e dark)
  cover/               # imagens de capa (hero, cards)
  img/
    florenca/          # fotos do Residencial Florença
    andorinha/         # fotos do Edifício Andorinha

src/
  data/
    apartments.js      # ← conteúdo editável (textos, fotos, contatos)
  components/
    Navbar.jsx         # barra de navegação responsiva com menu mobile
    Hero.jsx           # seção principal com chamada à ação
    About.jsx          # seção "sobre" com estatísticas
    ApartmentSection.jsx   # seção de cada apartamento (galeria + info + mapa)
    Gallery.jsx        # carrossel (Embla) com miniaturas e contador
    Lightbox.jsx       # galeria fullscreen ao clicar na foto
    Contact.jsx        # seção de contato com cards de redes sociais
    Footer.jsx         # rodapé
    Reveal.jsx         # wrapper de animação de entrada (Framer Motion)
    WhatsAppFloat.jsx  # botão flutuante fixo do WhatsApp
    icons.jsx          # ícone SVG do WhatsApp
  index.css            # design system (paleta, tipografia, layout, animações)
  main.jsx             # ponto de entrada
  App.jsx              # composição da página
```