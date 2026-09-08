# 🌌 Esmail Ali | Full Stack Developer

Welcome to my personal portfolio! I am a passionate **Full Stack Developer** specializing in building modern web applications, mobile apps, and integrating smart IoT systems. I love solving complex technical challenges, optimization, and creating smooth, premium user interfaces.

---

## 🚀 About Me
- **Core Focus:** Full Stack Web Development, Mobile Applications, and IT Solutions.
- **Philosophy:** Designing experiences that are both visually stunning and highly performant. 
- **Tech Stack:**
  - **Frontend:** React, Next.js, JavaScript, Tailwind CSS, Premium Vanilla CSS.
  - **Backend & Database:** Laravel, PHP, Node.js, MySQL, SQL.
  - **Mobile & IoT:** Flutter, Dart, C++, Arduino.

---

## 🛠️ The Portfolio Project
This is my modern, high-performance portfolio website built with the latest web standards:
- **Framework:** [Next.js](https://nextjs.org/) (bootstrapped with `create-next-app`)
- **Styling:** Premium dark space glassmorphic layout featuring a **shining electric cyan** secondary highlight.
- **Interactions:** Dynamic scroll animations, custom interactive modals, live web previews, and smooth layouts.

---

## 💻 Getting Started

### 1. Installation
Install the project dependencies:
```bash
npm install
```

### 2. Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build & Static Export
To compile the project and generate a static export optimized for **GitHub Pages** or **Cloudflare Pages**:
```bash
npm run build
```
The static HTML export will be generated inside the `out/` directory.

---

## ☁️ Deployment (Cloudflare Workers / Pages / GitHub Pages)
The project is configured for clean static export (`output: 'export'`):
- **Build command:** `npm run build`
- **Output directory:** `out`
- **Cloudflare Workers / Pages:** Uses `wrangler.jsonc` configured with `assets: { directory: "./out" }` so `wrangler deploy` deploys static assets directly without needing OpenNext or server adapters.

