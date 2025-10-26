# 🌟 Prasad Bhalerao - Personal Portfolio

A modern, animated personal portfolio website showcasing projects, achievements, and skills. Built with React, TypeScript, Tailwind CSS, and Framer Motion.


## ✨ Features

- 🎨 **Animated Landing Page** - Typewriter effect, particle background, gradient shine on name
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎯 **Achievements Section** - Dedicated page to showcase certifications
- 🎭 **Smooth Animations** - Framer Motion scroll animations with staggered effects
- 🎨 **Professional Design** - Blue/teal color scheme with optimized card readability
- 📊 **Data-Driven** - All content externalized to TypeScript data files
- ⚡ **Performance Optimized** - 60 FPS animations, lazy loading, optimized particles
- ♿ **Accessible** - WCAG AA compliant with keyboard navigation
- 🔍 **SEO Ready** - Proper meta tags and structured data

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                      # shadcn/ui components (Card, Button, etc.)
│   ├── Header.tsx               # Navigation with scroll-to-section
│   ├── Hero.tsx                 # Landing with typewriter + particles
│   ├── About.tsx                # Education, skills, activities
│   ├── Projects.tsx             # Project cards with particles background
│   ├── Achievements.tsx         # Achievement preview section
│   ├── Contact.tsx              # Contact form with social links
│   ├── Footer.tsx               # Footer with links
│   └── ParticlesBackground.tsx  # Interactive particle system
├── pages/
│   ├── Index.tsx                # Main landing page
│   ├── Achievements.tsx         # Full achievements page
│   └── NotFound.tsx             # 404 error page
├── data/
│   ├── projects.ts              # Project data with images
│   ├── achievements.ts          # Certifications data
│   ├── about.ts                 # Personal, academic, skills data
│   └── contact.ts               # Social links and contact info
├── assets/                      # Images, logos, icons
├── hooks/                       # Custom React hooks
└── lib/                         # Utility functions
```

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Particles**: react-tsparticles
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/prasadbhalerao1/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

## 📝 Adding Content

All content is stored in `src/data/` TypeScript files:

| What to Update | File Location |
|----------------|---------------|
| Projects | `src/data/projects.ts` |
| Achievements/Certificates | `src/data/achievements.ts` |
| Personal Info & Skills | `src/data/about.ts` |
| Social Links | `src/data/contact.ts` |

**Steps to add new items:**
1. Add images to `src/assets/` (projects) or `public/certificates/` (achievements)
2. Import the image at the top of the data file
3. Add a new object to the array with an incremented `id`
4. Save - the UI updates automatically!

## 🎨 Key Features Breakdown

### 🎭 Animations
- **Typewriter Effect**: Name types out character by character with gradient shine
- **Particle Background**: Interactive particles on landing and projects sections
- **Scroll Animations**: Staggered card entrance with Framer Motion
- **Hover Effects**: Smooth card lifts and button bounces

### 📱 Responsive Design
- **Mobile-First**: Optimized for all screen sizes (320px - 1920px+)
- **Responsive Grids**: Auto-adjusting columns (1→2→3 on larger screens)
- **Equal Height Cards**: Maintains alignment regardless of content
- **Text Truncation**: Prevents overflow with `line-clamp`

### ⚡ Performance
- **60 FPS Animations**: Optimized particle count and frame rate
- **Lazy Loading**: Images load on demand
- **Code Splitting**: Dynamic imports for better load times
- **Image Fallbacks**: Graceful error handling for missing images

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📞 Connect

[![Email](https://img.shields.io/badge/Email-prasadbhalerao279%40gmail.com-red?style=flat-square&logo=gmail)](mailto:prasadbhalerao279@gmail.com)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-prasadbhalerao-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/prasadbhalerao)

[![GitHub](https://img.shields.io/badge/GitHub-prasadbhalerao1-black?style=flat-square&logo=github)](https://github.com/prasadbhalerao1)

---

<p align="center">Built with ❤️ by Prasad Bhalerao</p>