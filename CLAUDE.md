# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Next.js App Router documentation website for OpenClaw, an open-source AI assistant framework. The site is designed to be statically exported and deployed to GitHub Pages.

## Development Commands

### Installation and Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Access at http://localhost:3000
```

### Build and Deploy

```bash
# Build static site for production (outputs to ./out)
npm run build

# Preview production build locally
npm start

# Lint code
npm run lint

# Deploy to GitHub Pages (triggers GitHub Actions)
git push origin main
```

## Project Architecture

### Next.js App Router Structure

The project uses Next.js 16 with the App Router architecture:

- **Root Layout** (`src/app/layout.tsx`): Defines metadata and provides the main container.
- **Main Layout** (`src/app/MainLayout.tsx`): Wrapper component that renders the sidebar and main content.
- **Sidebar** (`src/components/Sidebar.tsx`): Renders the navigation menu with sections and items.
- **Page Components**: Each `src/app/<route>/page.tsx` file represents a route/page.
- **Generic Pages** (`src/components/GenericPage.tsx`): Reusable component for documentation pages with consistent structure.

### Routing

This is a static site with predefined routes. The navigation structure is defined in `src/components/Sidebar.tsx`:

- **入门指南** (Getting Started): Home, Quick Start, Installation
- **核心命令** (Core Commands): gateway, config, setup, message, channels
- **高级功能** (Advanced Features): agents, cron, browser, skills, models
- **系统管理** (System Management): status, health, logs, security, update

### Styling

The project uses Tailwind CSS v4 with custom CSS in `src/app/globals.css`:

- Theme variables defined in CSS custom properties (CSS vars)
- Dark mode support via `@media (prefers-color-scheme: dark)`
- Modern minimal design with gradients and shadows
- Responsive layout with fixed sidebar on desktop

### Static Export Configuration

Configured in `next.config.ts`:
- `output: 'export'` - Enables static export
- `basePath` - Configured for GitHub Pages subdirectory deployment
- Output directory: `./out`
- GitHub Actions workflow at `.github/workflows/deploy.yml` handles deployment

## Working with Pages

### Creating New Documentation Pages

1. Create a new directory in `src/app/` with the route name
2. Add a `page.tsx` file using either:
   - Direct JSX content (like `src/app/page.tsx`)
   - `GenericPage` component (like `src/app/installation/page.tsx`)

Example using GenericPage:
```tsx
import GenericPage from '@/components/GenericPage';

export default function NewPage() {
  const contentSections = [
    {
      title: "Section Title",
      content: (
        <div>
          <p>Your content here</p>
        </div>
      )
    }
  ];

  return (
    <GenericPage
      title="Page Title"
      subtitle="Optional subtitle"
      contentSections={contentSections}
    />
  );
}
```

### Navigation

To add a new page to navigation:
1. Update the `navigation` array in `src/components/Sidebar.tsx`
2. Add it to the appropriate section

Example:
```typescript
{
  title: '核心命令',
  items: [
    { name: 'new-page', href: '/new-page', activePaths: ['/new-page'] },
    // ... existing items
  ]
}
```

## Code Style

- TypeScript strict mode enabled
- ESLint configured with `eslint-config-next`
- Tailwind CSS for utility classes
- CSS variables for theme colors and typography
- Import alias `@/*` maps to `src/*`

## Deployment

The site is configured for GitHub Pages deployment via GitHub Actions:

1. Push to `main` branch
2. Workflow `.github/workflows/deploy.yml` runs:
   - Installs dependencies with `npm ci`
   - Builds with `npm run deploy` (runs `next build`)
   - Uploads `./out` directory as artifact
   - Deploys to GitHub Pages

CNAME is configured in `public/CNAME` for custom domains.
