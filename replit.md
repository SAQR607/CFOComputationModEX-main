# CFO Computation - Arabic Competition Platform

## Overview

CFO Computation is a professional Arabic-language (RTL) web application designed for a financial modeling competition organized by ModEX (Financial Modeling Experts). The platform serves as a client review demo showcasing the competition structure, stages, judging criteria, certificates, and sponsorship opportunities. It targets financial analysts, FP&A specialists, MBA students, and aspiring CFOs in the Arabic-speaking market.

The application is a modern, responsive website with a corporate executive design tone, featuring:
- Multi-stage competition overview (4 stages from basic assessment to board challenge)
- Comprehensive participant journey mapping
- Transparent scoring and judging system
- Certificate and sponsorship information
- Contact and support systems
- Social media integration
- Chatbot widget for user assistance

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (no React Router dependency)
- **TanStack Query v5** for server state management and API data fetching

**UI Component System**
- **shadcn/ui** component library with Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **New York style** variant from shadcn with RTL (Right-to-Left) support
- **Custom color system** featuring Navy (#0B2A4A) and Teal (#00A99D) brand colors
- **Arabic typography** using Tajawal (headings) and Noto Sans Arabic (body text) from Google Fonts

**Design Patterns**
- Component composition with reusable section components (HeroSection, StagesSection, etc.)
- Theme provider pattern with light/dark mode support
- Centralized data management in `lib/data.ts` for CMS-style content editing
- Custom hooks for mobile detection and toast notifications

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for API endpoints
- **HTTP server** setup supporting both development (Vite middleware) and production (static serving)
- Modular route registration pattern

**API Design**
- RESTful endpoints for content delivery (`/api/stages`, `/api/scoring`, `/api/faqs`, etc.)
- Single POST endpoint for contact form submissions (`/api/contact`)
- Content served from in-memory data structures (server/content.ts)

**Data Storage**
- **In-memory storage** implementation (`MemStorage` class) for demo purposes
- Interface-based storage abstraction (`IStorage`) allowing future database integration
- User and contact submission models defined in shared schema

**Development vs Production**
- Development: Vite middleware integration with HMR support
- Production: Compiled static assets served from `dist/public`
- Build process uses esbuild for server bundling and Vite for client bundling

### Data Layer

**Schema Definition**
- **Drizzle ORM** configured for PostgreSQL (though currently using in-memory storage)
- **Zod** for runtime validation and type inference
- Shared TypeScript types between client and server
- Schema includes: Users, Contact submissions, Competition stages, Scoring criteria, FAQs, Judges, Sponsorship packages, Certificates

**Content Management**
- Static content defined in TypeScript objects (`competitionStages`, `scoringCriteria`, etc.)
- Content exposed through API endpoints for client consumption
- Type-safe data structures using shared schema interfaces

### Routing Architecture

**Client-Side Routing**
- Page-based routing with dedicated route components (Home, About, Stages, Journey, etc.)
- 404 handling with custom NotFound page
- Navigation state management with active link highlighting

**Pages Structure**
- `/` - Home (aggregates all sections)
- `/about` - About the competition
- `/stages` - Competition stages detail
- `/journey` - Participant journey
- `/scoring` - Judging criteria
- `/certificates` - Certificate information
- `/sponsorship` - Sponsorship packages
- `/support` - Support and FAQ
- `/media` - Social media integration
- `/contact` - Contact form

### Styling System

**RTL Support**
- HTML lang="ar" and dir="rtl" attributes
- Tailwind configured for RTL layout patterns
- Text alignment and flex/grid direction adjustments for Arabic reading flow

**Design Tokens**
- CSS custom properties for theme colors
- Dark mode support with class-based theme switching
- Consistent spacing system (4, 6, 8, 12, 16, 20, 24px)
- Custom border radius values (3px, 6px, 9px)

**Responsive Design**
- Mobile-first approach with breakpoints
- Grid layouts adapting from 1-column (mobile) to 2-4 columns (desktop)
- Flexible component sizing with min-height patterns

## External Dependencies

### Third-Party UI Libraries
- **Radix UI** - Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **Lucide React** - Icon library for consistent iconography
- **React Icons** - Additional icons (social media icons via `react-icons/si`)
- **embla-carousel-react** - Carousel/slider functionality
- **cmdk** - Command menu component

### Styling & Utilities
- **Tailwind CSS** with PostCSS and Autoprefixer
- **class-variance-authority** - Type-safe variant styling
- **clsx** and **tailwind-merge** - Conditional class name utilities
- **date-fns** - Date manipulation and formatting

### Form Management
- **React Hook Form** via `@hookform/resolvers`
- **Zod** integration for form validation

### Backend Dependencies
- **Express** - Web framework
- **cors** - CORS middleware
- **Drizzle ORM** - Database toolkit
- **drizzle-zod** - Zod schema generation from Drizzle
- **pg** - PostgreSQL client (configured but not actively used)
- **connect-pg-simple** - PostgreSQL session store
- **express-session** - Session middleware
- **nanoid** - Unique ID generation

### Development Tools
- **tsx** - TypeScript execution for Node.js
- **esbuild** - Fast JavaScript bundler for server code
- **Vite** - Frontend build tool and dev server
- **@replit/vite-plugin-runtime-error-modal** - Error overlay for Replit
- **@replit/vite-plugin-cartographer** - Development tooling
- **@replit/vite-plugin-dev-banner** - Development banner

### Database
- **PostgreSQL** configured via Drizzle but not actively connected (using in-memory storage for demo)
- Migration files expected in `/migrations` directory
- Connection string via `DATABASE_URL` environment variable

### Fonts & Assets
- **Google Fonts** - Tajawal and Noto Sans Arabic
- Logo image stored in `attached_assets/` directory
- Favicon support configured

### Build & Deployment
- Custom build script combining Vite (client) and esbuild (server)
- Dependency bundling for improved cold start performance
- Static asset serving in production mode