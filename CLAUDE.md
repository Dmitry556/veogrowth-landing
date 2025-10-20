# Claude Development Context

This document provides context for Claude (or any AI assistant) when working on the VeoGrowth landing page project.

## Project Overview

VeoGrowth is a B2B lead generation company specializing in cold email outreach. The landing page is designed to convert visitors into qualified meetings through a performance-based model.

## Key Business Context

- **Target Audience**: B2B SaaS companies doing $100K+ monthly revenue with TAM >50,000 prospects
- **Value Proposition**: Pay-per-qualified-meeting model with 2 free meetings to start
- **Main CTA**: Book a strategy call via Calendly
- **Differentiators**: AI-powered personalization, performance-based pricing, proven case studies

## Technical Architecture

### Frontend Stack
- React 18 with TypeScript for type safety
- Vite for fast development and optimized builds
- Tailwind CSS for utility-first styling
- Radix UI for accessible component primitives
- React Router for client-side routing

### SEO Implementation
- Structured data with Organization and Person schemas
- Meta tags optimization for social sharing
- XML sitemap with all pages
- Canonical URLs and breadcrumbs
- Performance monitoring with Web Vitals

### Key Features Implemented
1. **Homepage Sections**:
   - Hero with video placeholder
   - Social proof bar
   - Features grid
   - Case studies preview
   - Pricing table
   - FAQ accordion
   - Multiple CTAs

2. **Blog System**:
   - Category filtering
   - Featured article highlight
   - Related posts
   - SEO optimization per article
   - Newsletter signup

3. **Case Studies**:
   - Detailed success metrics
   - Industry categorization
   - Visual data presentation

4. **Free Tools**:
   - Microsoft email filter
   - Email validator
   - Domain health checker

## Design Principles

- **Dark Theme**: Purple/blue gradients on dark background
- **Conversion Focus**: Multiple CTAs, clear value props
- **Trust Building**: Case studies, testimonials, transparent pricing
- **Performance**: Sub-3s load times, optimized images
- **Mobile First**: Fully responsive design

## Content Guidelines

### Tone of Voice
- Professional but approachable
- Data-driven claims
- Specific metrics over vague promises
- Technical accuracy for B2B audience

### Key Messaging
1. "30+ Qualified Meetings Per Month on Autopilot"
2. "Pay only for qualified meetings that show up"
3. "No retainers. No contracts."
4. "$8M+ in verified pipeline generated"

## Development Workflow

### Commands
```bash
npm run dev      # Start dev server on port 8080
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### File Structure
```
src/
├── components/     # Reusable components
├── pages/         # Route pages
├── utils/         # Helper functions
├── hooks/         # Custom React hooks
├── types/         # TypeScript definitions
└── styles/        # Global styles
```

## Important URLs

- **Production**: https://veogrowth.com (current site)
- **GitHub**: https://github.com/Dmitry556/veogrowth-landing
- **Calendly**: https://calendly.com/veogrowth/discovery
- **LinkedIn**: https://linkedin.com/company/veogrowth

## Future Enhancements

Potential areas for improvement:
1. Add blog content management system
2. Implement A/B testing framework
3. Add analytics dashboard
4. Create admin panel for case studies
5. Integrate with CRM/email tools

## Common Tasks

### Adding a New Page
1. Create component in `src/pages/`
2. Add route in `App.tsx`
3. Update sitemap.xml
4. Add to navigation if needed

### Updating SEO
1. Modify schemas in `src/utils/schema.ts`
2. Update meta tags in page components
3. Ensure canonical URLs are set

### Performance Optimization
1. Check Web Vitals dashboard
2. Lazy load images and components
3. Monitor bundle size
4. Use performance budget

## Notes for AI Assistants

- Always maintain TypeScript strict mode
- Follow existing code patterns and conventions
- Ensure all changes are mobile-responsive
- Test SEO implications of changes
- Keep performance metrics in mind
- Document significant changes

This project demonstrates how AI-assisted development can create production-ready applications with modern best practices.

---

Last Updated: December 2024
Built with: Claude (Anthropic)