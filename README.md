# Alzira Ritter — Aluguéis de Verão

Site institucional (front-end, sem servidor) para divulgar os dois apartamentos de
temporada da Alzira Ritter em **Capão da Canoa / RS**:

- **Residencial Florença** — Apto 402 · Rua Guaraci, 1535
- **Edifício Andorinha** — Apto 22 · Rua Sepé, 1542

Feito com **Vite + React**, animações com **Framer Motion**, carrossel com **Embla**.
Paleta azul-petróleo + dourado, inspirada na identidade da marca.

---

## 🚀 Rodar localmente

Pré-requisito: [Node.js](https://nodejs.org) 18+ instalado.

```bash
npm install      # instala as dependências (só na primeira vez)
npm run dev      # abre em http://localhost:5173
```

Para gerar a versão de produção (pasta `dist/`):

```bash
npm run build
npm run preview  # serve a build pronta para conferir
```

---

## 🌐 Publicar na Vercel

### Opção A — pela linha de comando (mais rápido, sem GitHub)

```bash
npm i -g vercel
vercel           # faça login e siga as perguntas (aceite os padrões)
vercel --prod    # publica a versão final
```

A Vercel detecta o Vite automaticamente. Se perguntar:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### Opção B — pelo painel da Vercel (deploy automático a cada alteração)

1. Suba este projeto para um repositório no GitHub.
2. Em [vercel.com](https://vercel.com) → **Add New → Project** → importe o repositório.
3. Confirme `Build: npm run build` e `Output: dist` → **Deploy**.

Pronto: a cada `git push`, a Vercel republica sozinha. Você ganha um link tipo
`alzira-alugueis.vercel.app` e pode plugar um domínio próprio depois (ex.: `alziraritter.com.br`).

---

## ✏️ Como editar o conteúdo

Quase tudo (textos, comodidades, contatos, endereços, lista de fotos) fica em **um único
arquivo**:

```
src/data/apartments.js
```

- **Contato / redes:** objeto `CONTACT` no topo (WhatsApp, Instagram, Facebook).
- **Cada apartamento:** título, endereço, descrição, destaques, comodidades, diferenciais e fotos.
- **Fotos:** ficam em `public/img/florenca/` e `public/img/andorinha/`. Para trocar/adicionar,
  coloque o arquivo na pasta e referencie em `photos: [...]` com `src` e `caption`.

As cores da marca ficam em `src/index.css` (bloco `:root`, variáveis `--navy`, `--gold`, etc.).

---

## 🗺️ Observações

- Os **mapas** usam o Google Maps embutido (sem chave de API). Em alguns ambientes de
  pré-visualização eles podem não carregar, mas funcionam normalmente no site publicado.
  O botão **"Abrir no Google Maps"** sempre funciona como alternativa.
- **Valores** são exibidos como *"sob consulta"* — toda negociação é direcionada ao WhatsApp.
- **Tour 3D:** previsto para uma fase futura (ainda não implementado).

---

## 📁 Estrutura

```
public/            imagens (logos, capas, fotos dos apartamentos)
src/
  data/apartments.js   ← conteúdo editável
  components/          Navbar, Hero, About, ApartmentSection, Gallery, Lightbox, Contact, Footer...
  index.css           sistema de design (paleta, tipografia, animações)
```
