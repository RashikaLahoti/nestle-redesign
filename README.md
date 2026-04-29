# 🍫 Nestlé Redesign

A modern, responsive redesign of the Nestlé website built with **React 19**, **Vite**, and **Tailwind CSS v4**. This project reimagines the Nestlé brand experience with a clean UI, smooth interactions, and a component-driven architecture.

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | ^19.2.0 | UI Framework |
| Vite | ^7.2.2 | Build Tool & Dev Server |
| Tailwind CSS | ^4.1.17 | Utility-First Styling |
| React Router | ^7.9.5 | Client-Side Routing |
| React Hook Form | ^7.66.0 | Form Management |
| Lucide React | ^0.553.0 | Icon Library |

---

## 📁 Project Structure

```
nestle-redesign/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images, fonts, and other assets
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── HighlightsBar.jsx
│   │   ├── Section2.jsx
│   │   ├── BingeBestsellers.jsx
│   │   ├── ScrollProducts.jsx
│   │   ├── DistributorSection.jsx
│   │   ├── Quote.jsx
│   │   ├── FeaturedStories.jsx
│   │   ├── ContactUs.jsx
│   │   ├── BottomSlidebar.jsx
│   │   └── Footer.jsx
│   ├── layouts/             # Page layout wrappers
│   │   ├── HomeLayout.jsx
│   │   └── AuthLayout.jsx
│   ├── pages/               # Route-level page components
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── router/              # React Router configuration
│   │   └── AppRouter.jsx
│   ├── App.jsx              # Root application component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd nestle-redesign
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| Dev Server | `npm run dev` | Start Vite development server with HMR |
| Build | `npm run build` | Build production bundle |
| Preview | `npm run preview` | Preview the production build locally |
| Lint | `npm run lint` | Run ESLint checks |

---

## 🎨 Features

- ✅ **Responsive Design** — Works seamlessly across all screen sizes
- ✅ **Component Architecture** — Modular, reusable React components
- ✅ **Client-Side Routing** — Smooth navigation with React Router v7
- ✅ **Authentication Pages** — Login & Register forms with validation via React Hook Form
- ✅ **Modern Styling** — Tailwind CSS v4 utility classes throughout
- ✅ **Interactive UI** — Scrolling product carousels, highlights bar, featured stories
- ✅ **Fast Dev Experience** — Powered by Vite with Hot Module Replacement

---

## 📄 License

This project is for educational/portfolio purposes and is not affiliated with or endorsed by Nestlé S.A.
