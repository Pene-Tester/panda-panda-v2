# panda-panda-v2

Birthday surprise site for yabbyy — static pages in `docs/` for GitHub Pages.

## Deploy on GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to **Deploy from a branch**
4. Choose branch `main` and folder **`/docs`**
5. Save — your site will be at `https://<username>.github.io/panda-panda-v2/`

## Add your photos

Replace these files in `docs/assets/`:

| File | Used on |
|------|---------|
| `bouquet.png` | Flower reveal — bouquet + note (after she picks the flower) |
| `1.png`, `2.png`, `6.png` | Smile page — 3 photo strips |
| `icon.svg` | Browser tab icon |

## Pages

1. **index.html** — Hand-drawn envelope, "To my yabbyy Happy Birthday" (tap to open)
2. **flower.html** — Note + Instax photo → bouquet reveal
3. **smile.html** — Photo strips with "U look beautiful when you smile"
4. **cake.html** — Birthday cake + wish form (final page)

## Collect her wish (Formspree)

1. Sign up free at [formspree.io](https://formspree.io)
2. Create a new form and copy your form ID (the part after `/f/` in the URL)
3. Open `docs/js/config.js` and replace `YOUR_FORM_ID` with your ID
4. Deploy — when she submits her wish, you'll get an email with what she wrote

Example: if your form URL is `https://formspree.io/f/xyzabcde`, set `formspreeId: 'xyzabcde'`