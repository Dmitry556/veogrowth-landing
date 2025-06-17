# VeoGrowth Landing Page

A high-performance B2B lead generation landing page built with React, TypeScript, and Vite. This project showcases VeoGrowth's cold email outreach services with a focus on conversion optimization and SEO.

## 🚀 Features

### Core Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Web Vitals monitoring, lazy loading, and optimized assets
- **SEO Ready**: Structured data, meta tags, and sitemap
- **Type Safety**: Full TypeScript implementation
- **Modern Stack**: React 18, Vite, and cutting-edge tooling

### Page Structure
- **Homepage**: Hero, features, pricing, testimonials, and CTAs
- **Blog System**: SEO-optimized blog with categories and related posts
- **Case Studies**: Detailed success stories with metrics
- **Free Tools**: 
  - Microsoft Email Filter
  - Email Validator
  - Domain Health Checker
- **Tech Stack Page**: Transparent overview of tools and technologies
- **About Page**: Company story and founder information

### SEO Features
- Organization and Person schema markup
- Open Graph and Twitter Card meta tags
- Canonical URLs and breadcrumbs
- Optimized page titles and descriptions
- XML sitemap

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Routing**: React Router v6
- **SEO**: React Helmet Async
- **Performance**: Web Vitals monitoring
- **Icons**: Lucide React

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Dmitry556/veogrowth-landing.git

# Navigate to the project directory
cd veogrowth-landing

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🔧 Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Navigation
│   ├── sections/        # Homepage sections
│   ├── blog/            # Blog components
│   ├── seo/             # SEO components
│   ├── performance/     # Performance monitoring
│   └── ui/              # Reusable UI components
├── pages/               # Route pages
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── styles/              # Global styles
└── types/               # TypeScript types
```

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push to GitHub
2. Import repository in Vercel
3. Deploy with default settings

Build settings:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## 📊 Performance

- Lighthouse Score: 95+ (Performance)
- Core Web Vitals: All metrics in "Good" range
- Bundle size optimized with code splitting
- Images lazy loaded and optimized

## 🔐 Environment Variables

No environment variables required for basic deployment. For analytics and tracking, you can add:

```env
VITE_GA_ID=your-google-analytics-id
VITE_GTM_ID=your-google-tag-manager-id
```

## 🤝 Contributing

This project was built with Claude (Anthropic's AI assistant) in collaboration with Dmitry Pinchuk.

## 📄 License

Private repository - All rights reserved to VeoGrowth.

## 🌟 Built with Claude

This entire project was developed using Claude Code, demonstrating the capabilities of AI-assisted development for creating production-ready web applications.

---

**Live Site**: [Coming Soon on Vercel]
**Company**: [VeoGrowth](https://veogrowth.com)
**Contact**: hello@veogrowth.com