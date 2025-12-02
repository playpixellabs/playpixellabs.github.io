# 🎮 PlayPixelLabs

**PlayPixelLabs** is a premium, responsive online game portal built with [Astro](https://astro.build). It features a modern glassmorphism design, vibrant neon aesthetics, and a collection of playable browser games.

![PlayPixelLabs Banner](https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop)

## ✨ Features

- **Modern UI/UX**: Glassmorphism effects, smooth transitions, and a "dark mode" inspired aesthetic.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Game Portal**: Browse games by category (Arcade, Puzzle, Strategy, etc.).
- **Playable Games**: Includes a custom-built **Snake Classic** game with mobile touch controls.
- **Fast Performance**: Built with Astro for lightning-fast page loads.

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: Vanilla CSS (Variables, Flexbox/Grid, Glassmorphism)
- **Icons**: [Lucide Astro](https://lucide.dev)
- **Deployment**: GitHub Pages (via GitHub Actions)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/PlayPixelLabs.git
    cd PlayPixelLabs
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:4321`.

## 🕹️ How to Play

1.  **Browse**: Use the home page grid or category filters to find a game.
2.  **Play**: Click "Play" on a game card to enter the game arena.
3.  **Controls**:
    - **Desktop**: Use arrow keys for movement.
    - **Mobile**: Use the on-screen directional buttons.

## 📦 Build & Deployment

To build the project for production:

```bash
npm run build
```

The output will be in the `dist/` directory.

### GitHub Pages Deployment

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.
1.  Push your changes to the `main` or `astro` branch.
2.  The workflow in `.github/workflows/deploy.yml` will trigger.
3.  Your site will be live at `https://your-username.github.io/PlayPixelLabs/`.

## 📂 Project Structure

```text
/
├── public/             # Static assets
├── src/
│   ├── components/     # UI Components (Header, GameCard, etc.)
│   ├── games/          # Game logic components (Snake.astro)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Astro pages and routing
│   └── styles/         # Global CSS
├── astro.config.mjs    # Astro configuration
└── package.json
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
