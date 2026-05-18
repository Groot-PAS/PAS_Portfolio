# PAS Portfolio

Personal portfolio website for **Prakhar Anand Singh** — B.Tech CSE (AIML) student at VIT Bhopal University. A dark, cyan-accented single-page site showcasing education, certifications, skills, projects, and contact information.

Inspired by modern developer portfolios with a code-editor hero panel and smooth scroll animations.

## Live site

**[https://pas-portfolio-seven.vercel.app/](https://pas-portfolio-seven.vercel.app/)**

For local development, open `index.html` in your browser or use a simple static server (see [Getting started](#getting-started)).

## Features

- **Responsive layout** — mobile-friendly navigation with hamburger menu
- **Hero section** — headline, intro, resume link, and animated `Portfolio.ts` code block
- **About** — bio, stats, and profile photo
- **Education** — academic timeline (VIT Bhopal, Holy Cross School)
- **Certifications** — credential cards with LinkedIn links
- **Tech stack** — animated skill tags with staggered reveal
- **Projects** — featured work with tech tags and GitHub links
- **Contact** — form (opens email client) plus direct contact and social links
- **Visual polish** — cursor glow, scroll reveals, and cyan theme

## Tech stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, flexbox, grid) |
| Scripting | Vanilla JavaScript |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |

No build step, framework, or package manager required.

## Project structure

```
PAS_Portfolio/
├── index.html      # Main page (all sections)
├── styles.css      # Global styles and animations
├── script.js       # Nav, scroll reveal, contact form, interactions
├── profile.png     # Profile photo (About section)
└── README.md
```

## Getting started

### Local development

1. Clone or download this folder.
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).

Optional — run a local server for cleaner routing:

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

Then visit `http://localhost:8080`.

### Profile photo

Place your image as `profile.png` in the project root (same folder as `index.html`). Supported formats: PNG, JPG. Recommended: square or portrait, at least 400×400 px.

## Customization

| What to change | Where |
|----------------|--------|
| Name, bio, hero text | `index.html` — Hero & About sections |
| Education entries | `index.html` — `#education` |
| Certificates & links | `index.html` — `#certificates` |
| Skills list | `index.html` — `.skills-cloud` |
| Projects | `index.html` — `#projects` |
| Email, phone, social URLs | `index.html` — `#contact` & footer |
| Accent color (cyan) | `styles.css` — `:root` variables (`--cyan`, etc.) |
| Resume link | Hero “Get Resume” button `href` |

### Theme variables (`styles.css`)

```css
:root {
  --cyan: #22d3ee;
  --bg: #050508;
  /* ... */
}
```

## Deployment

**Production:** [https://pas-portfolio-seven.vercel.app/](https://pas-portfolio-seven.vercel.app/)

Pushes to the connected `main` branch on GitHub redeploy automatically on Vercel.

### Vercel

1. Push the project to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Set the root directory to this folder and deploy (no build command needed).
4. Production URL example: `https://pas-portfolio-seven.vercel.app/`

> **Profile photo on live site:** Commit `profile.png` to the repo (`git add profile.png`) and push. If it is missing from GitHub, the About section shows a placeholder on Vercel.

### GitHub Pages

1. Push to GitHub.
2. Go to **Settings → Pages**.
3. Source: **Deploy from branch** → `main` → `/ (root)`.
4. Save; your site will be at `https://<username>.github.io/<repo-name>/`.

### Netlify

Drag and drop the folder at [app.netlify.com/drop](https://app.netlify.com/drop), or connect your Git repo with no build settings.

## Contact

- **Website:** [pas-portfolio-seven.vercel.app](https://pas-portfolio-seven.vercel.app/)
- **Email:** prakharanand0967@gmail.com
- **GitHub:** [Groot-PAS](https://github.com/Groot-PAS)
- **LinkedIn:** [prakharanand-singh](https://www.linkedin.com/in/prakharanand-singh)
- **Resume:** [Google Drive](https://drive.google.com/file/d/1Lgkr3L5Kdv6aDAc9rND-N0S8yk6UX5ha/view?usp=sharing)

## License

Personal portfolio — feel free to use this structure as inspiration for your own site. Please replace personal content, images, and links if you fork it.

---

Made with ❤️ in India
