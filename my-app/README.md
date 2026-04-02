# Zero Dark AI Website

A stunning cyberpunk website for Zero Dark AI featuring Apple-level glassmorphism design, animated WebGL shaders, and Awwwards-quality motion design.

![Zero Dark AI](https://img.shields.io/badge/Zero%20Dark%20AI-Next%20Generation-blueviolet)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC)

## ✨ Features

- **WebGL Shader Background** - Interactive GLSL shader that responds to mouse movement
- **Glassmorphism Design** - Frosted glass effects with backdrop blur and subtle borders
- **3D Parallax Cards** - Interactive cards with 3D tilt effects on hover
- **Animated Typography** - Staggered reveals and text gradients
- **Bento Grid Layout** - Asymmetrical grid for services showcase
- **Smooth Animations** - Powered by Framer Motion with spring physics
- **Responsive Design** - Optimized for all screen sizes
- **Dark Mode Only** - Cinematic editorial dark aesthetic

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D/WebGL**: React Three Fiber (@react-three/fiber)
- **3D Helpers**: React Three Drei (@react-three/drei)
- **Advanced Animations**: GSAP

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/zerodarkai/website.git
cd zerodarkai-website/my-app

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Build for Production

```bash
npm run build
```

The static export will be generated in the `dist` folder.

## 🎨 Design System

### Colors
- **Void Black**: `#030305` - Primary background
- **Neon Blue**: `#3B82F6` - Primary accent
- **Neon Purple**: `#8B5CF6` - Secondary accent
- **Neon Cyan**: `#22D3EE` - Highlight accent

### Typography
- **Headings**: Space Grotesk (Bold, tight tracking)
- **Body**: JetBrains Mono (Technical feel)

### Effects
- **Glassmorphism**: `backdrop-blur(20px)` with subtle white borders
- **Glow Effects**: Multi-layered box shadows with neon colors
- **Gradients**: Mesh gradients with radial positioning

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles with design tokens
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main page composition
├── components/
│   ├── ShaderBackground.tsx  # WebGL animated background
│   ├── Navbar.tsx             # Glassmorphism navigation
│   ├── Hero.tsx               # Full-screen hero section
│   ├── ServicesBento.tsx      # Bento grid services
│   ├── WhyUs.tsx              # Comparison UI section
│   ├── Features.tsx           # 3D parallax cards
│   └── Footer.tsx             # Footer with marquee
```

## 🔧 Customization

### Changing Colors
Edit the Tailwind config in `tailwind.config.ts`:

```typescript
colors: {
  neon: {
    blue: "#3B82F6",
    purple: "#8B5CF6",
    // Add your colors
  }
}
```

### Adding Sections
1. Create a new component in `src/components/`
2. Import it in `src/app/page.tsx`
3. Add it between existing sections

## 📱 Responsive Breakpoints

- Mobile: `default`
- Tablet: `sm:` (640px)
- Desktop: `md:` (768px)
- Large: `lg:` (1024px)
- XL: `xl:` (1280px)

## ⚡ Performance

- GPU-accelerated animations via `transform` and `opacity`
- Optimized WebGL with `dpr={[1, 2]}` for device pixel ratio
- Lazy-loaded components with Framer Motion's `useInView`
- Minimal JavaScript bundle with tree-shaking

## 📝 License

MIT License - Zero Dark AI

---

Built with ❤️ by the Zero Dark AI team
