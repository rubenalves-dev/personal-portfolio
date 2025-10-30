# Portfolio

A modern personal portfolio website built with SvelteKit 5, TypeScript, and Vite. This portfolio showcases professional work, projects, and provides a contact interface.

## 🚀 Features

- **Modern Stack**: Built with SvelteKit 5 and TypeScript
- **Responsive Design**: Fully responsive layout that works on all devices
- **Contact API**: Integrated contact form with Resend email service
- **Type-Safe**: Full TypeScript support throughout the project
- **Component Library**: Creation of reusable UI components
- **Code Quality**: ESLint and Prettier configured for consistent code style

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) v2.43.2
- **Language**: [TypeScript](https://www.typescriptlang.org/) v5.9.2
- **Build Tool**: [Vite](https://vitejs.dev/) v7.1.7
- **Testing**: [Vitest](https://vitest.dev/) v3.2.4 + [Playwright](https://playwright.dev/) v1.55.1
- **Linting**: [ESLint](https://eslint.org/) v9.36.0
- **Formatting**: [Prettier](https://prettier.io/) v3.6.2
- **Email**: [Resend](https://resend.com/) v6.3.0
- **Package Manager**: pnpm

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── lib/              # Reusable library components and utilities
│   │   ├── assets/       # Images, icons, and static assets
│   │   ├── ui/           # UI components (Button, ProjectCard, etc.)
│   │   └── utils/        # Utility functions and helpers
│   ├── routes/           # SvelteKit routes
│   │   ├── api/          # API endpoints
│   │   │   └── contact/  # Contact form API
│   │   ├── +layout.svelte
│   │   ├── +page.svelte
│   │   └── Hero.svelte
│   ├── styles/           # Global styles
│   ├── app.html          # HTML template
│   └── app.d.ts          # TypeScript declarations
├── static/               # Static assets (robots.txt, images)
├── tests/                # Test files
└── package.json
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd personal-portfolio
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env
# Add your environment variables (e.g., Resend API key)
```

### Development

Start the development server:

```bash
pnpm dev
```

The site will be available at `http://localhost:5173`

### Building

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## 🧪 Testing

Run unit tests:

```bash
pnpm test:unit
```

Run tests in watch mode:

```bash
pnpm test:unit
```

Run all tests once:

```bash
pnpm test
```

## 🎨 Code Quality

### Linting

Run ESLint and Prettier checks:

```bash
pnpm lint
```

### Format Code

Auto-format code with Prettier:

```bash
pnpm format
```

### Type Checking

Run Svelte type checking:

```bash
pnpm check
```

Watch mode for type checking:

```bash
pnpm check:watch
```

## 📝 Available Scripts

| Script             | Description                    |
| ------------------ | ------------------------------ |
| `pnpm dev`         | Start development server       |
| `pnpm build`       | Build for production           |
| `pnpm preview`     | Preview production build       |
| `pnpm test`        | Run all tests once             |
| `pnpm test:unit`   | Run unit tests in watch mode   |
| `pnpm lint`        | Run ESLint and Prettier checks |
| `pnpm format`      | Format code with Prettier      |
| `pnpm check`       | Run Svelte type checking       |
| `pnpm check:watch` | Type checking in watch mode    |

## 🌐 Deployment

This project uses `@sveltejs/adapter-auto` which automatically detects your deployment environment and configures the build accordingly. It supports:

- Vercel
- Netlify
- Cloudflare Pages
- And many more platforms

Refer to the [SvelteKit adapter documentation](https://svelte.dev/docs/kit/adapters) for platform-specific configuration.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Rúben Alves**

Fullstack Developer from Portugal, passionate about emerging technologies and AI innovations.

---

Built with ❤️ using SvelteKit
