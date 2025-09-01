# Prasad Bhalerao - Personal Portfolio

A modern, responsive personal portfolio website built with React, Vite, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **Accessibility First**: WCAG AA compliance with keyboard navigation and screen reader support
- **Modern Tech Stack**: React + Vite + TypeScript + Tailwind CSS
- **Smooth Animations**: Subtle animations with respect for `prefers-reduced-motion`
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured data
- **Interactive Contact Form**: Client-side validation with localStorage fallback
- **Performance Optimized**: Lighthouse-friendly with optimized images and code splitting

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (shadcn/ui)
│   ├── Header.tsx       # Navigation header with smooth scrolling
│   ├── Hero.tsx         # Landing section with profile photo
│   ├── About.tsx        # About section with education & skills
│   ├── Projects.tsx     # Projects showcase with modal details
│   ├── Contact.tsx      # Contact form with social links
│   └── Footer.tsx       # Footer with social links
├── pages/
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 error page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── assets/              # Static assets
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prasad-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist/` folder.

## 🔧 Customization Guide

### Replace Placeholder Content

1. **Profile Photo**
   - Replace `/lovable-uploads/adb50b57-99cf-450d-85e3-7cba9f8ed118.png` with your actual photo
   - Update the path in `src/components/Hero.tsx`

2. **Club Logos**
   - Add your club logos to `src/assets/`
   - Update the placeholder divs in `src/components/About.tsx`

3. **Project Links**
   - Update the `githubLink` URLs in `src/components/Projects.tsx`
   - Replace placeholder URLs with your actual repository links

4. **Contact Information**
   - Update email, LinkedIn, and GitHub URLs in:
     - `src/components/Contact.tsx`
     - `src/components/Footer.tsx`

### Environment Variables (for backend integration)

Create a `.env.local` file in the root directory:

```env
# Email service (if using serverless functions)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password

# Supabase (if using for contact form storage)
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Contact Form Backend Options

#### Option 1: Serverless Function (Recommended)
1. Create API endpoint for form submission
2. Add email service integration (Nodemailer, SendGrid, etc.)
3. Update `src/components/Contact.tsx` submission logic

#### Option 2: Database Storage (Supabase/Firebase)
1. Set up Supabase or Firebase project
2. Create contact messages table
3. Configure environment variables
4. Update form submission logic

#### Option 3: Third-party Service
- Use services like Formspree, Netlify Forms, or Getform
- Update form action and method attributes

## 🚀 Deployment

### Deploy to Vercel

1. **Connect GitHub repository to Vercel**
2. **Configure build settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy:**
   ```bash
   vercel --prod
   ```

### Deploy to Netlify

1. **Connect GitHub repository to Netlify**
2. **Configure build settings:**
   - Build Command: `npm run build`
   - Publish Directory: `dist`

3. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Deploy to GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json:**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Build and deploy:**
   ```bash
   npm run build
   npm run deploy
   ```

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Keyboard Navigation**: Full keyboard accessibility with visible focus indicators
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: WCAG AA compliant color ratios
- **Reduced Motion**: Respects `prefers-reduced-motion` preference
- **Alt Text**: Descriptive alt text for all images

## 🎨 Design System

The project uses a custom design system built on Tailwind CSS:

- **Colors**: HSL-based color tokens in `src/index.css`
- **Typography**: Responsive font scales
- **Spacing**: Consistent spacing scale
- **Animations**: Smooth transitions and hover effects
- **Components**: Reusable shadcn/ui components

### Customizing Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary: 216 86% 53%;      /* Main brand color */
  --primary-glow: 216 86% 63%; /* Lighter variant */
  --accent: 270 95% 75%;        /* Accent color */
  /* ... other colors */
}
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] All navigation links scroll smoothly to correct sections
- [ ] Contact form validation works correctly
- [ ] Form submission shows success/error messages
- [ ] All external links open in new tabs
- [ ] Responsive layout works on mobile, tablet, and desktop
- [ ] Keyboard navigation works for all interactive elements
- [ ] Profile photo hover/focus effect works
- [ ] Project cards have proper hover states
- [ ] All animations respect reduced motion preferences

### Automated Testing (Optional)

Add testing frameworks:

```bash
# Jest for unit tests
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

# Playwright for e2e tests
npm install --save-dev @playwright/test
```

## 📈 Performance Optimization

- **Image Optimization**: Lazy loading and responsive images
- **Code Splitting**: Dynamic imports for better loading performance
- **Minimal Dependencies**: Lightweight libraries and tree-shaking
- **CSS Optimization**: Tailwind CSS purging unused styles
- **SEO**: Proper meta tags and structured data

## 🔍 Analytics (Optional)

To add analytics while respecting privacy:

1. **Google Analytics 4**
   ```html
   <!-- Add to index.html head -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   ```

2. **Plausible Analytics** (Privacy-friendly)
   ```html
   <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
   ```

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**
   - Check file paths and extensions
   - Ensure images are in the correct directory

2. **Styling issues**
   - Verify Tailwind CSS classes are correct
   - Check for CSS conflicts

3. **Contact form not working**
   - Verify backend integration
   - Check console for JavaScript errors

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues-url).

## 📞 Support

If you have any questions or need help with customization:

- **Email**: prasadbhalerao279@gmail.com
- **LinkedIn**: [linkedin.com/in/prasadbhalerao](https://www.linkedin.com/in/prasadbhalerao)
- **GitHub**: [github.com/prasadbhalerao1](https://github.com/prasadbhalerao1)

---

**Built with ❤️ by Prasad Bhalerao**