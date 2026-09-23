# Md. Masud Rana - Portfolio Website

A premium, modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon library

## Features

- Premium dark theme design
- Responsive layout (mobile, tablet, desktop)
- Smooth animations and micro-interactions
- Sticky navigation with active section indicator
- Hero section with professional layout
- About section with animated stats
- Featured projects showcase
- Categorized tech stack
- Professional experience timeline
- Education section
- Contact section with CTA
- SEO optimized with metadata
- Accessible (semantic HTML, keyboard navigation, reduced motion support)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── animations/      # Reusable animation components
│   │   │   ├── FadeIn.tsx
│   │   │   ├── Reveal.tsx
│   │   │   ├── SlideIn.tsx
│   │   │   ├── StaggerContainer.tsx
│   │   │   └── StaggerItem.tsx
│   │   ├── sections/        # Page sections
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/              # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── Card.tsx
│   │       └── SocialIcon.tsx
│   └── data/                # Data files
│       ├── projects.ts
│       ├── skills.ts
│       └── experience.ts
├── public/                  # Static assets
│   └── images/             # Project images and profile
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Customization

### Update Personal Information

Edit the data files in `src/data/`:

- **projects.ts** - Update your project details
- **skills.ts** - Update your tech stack
- **experience.ts** - Update your work experience

### Update Images

Add your images to `public/images/`:

- `profile.jpg` - Your professional portrait
- `zoober.png` - Zoober Pay project preview
- `monifly.png` - Monifly project preview
- `caremate.png` - CareMate project preview

### Update Social Links

Update the social links in:
- `src/components/sections/Hero.tsx`
- `src/components/sections/Contact.tsx`
- `src/components/sections/Footer.tsx`

### Update Colors

Modify the CSS variables in `src/app/globals.css`:

```css
:root {
  --background: 50 50 50;        /* Main background */
  --foreground: 250 250 250;     /* Main text */
  --accent: 217 91 255;          /* Accent color (purple) */
  --muted: 80 80 80;             /* Muted text */
  --border: 70 70 70;            /* Border color */
  --card: 45 45 45;              /* Card background */
}
```

## Performance

- Optimized images with Next.js Image component
- Lazy loading for images
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind CSS
- Server components where possible

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Accessible buttons and links
- Alt text for images
- Keyboard navigation support
- `prefers-reduced-motion` support
- Sufficient color contrast

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

---

Built with ❤️ using Next.js and modern web technologies.
