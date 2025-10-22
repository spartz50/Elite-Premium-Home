# Elite Premium Home LLC Website

Professional construction company website showcasing custom spec homes and residential construction projects in Southwest Florida.

## 🏗️ About

Elite Premium Home LLC specializes in residential construction and custom spec homes, delivering exceptional quality at a great value across Port Charlotte and LaBelle, Florida.

**Contact Information:**
- **President:** Shane Birch
- **Phone:** 239-291-5567
- **Email:** sbirch@elitepremium.homes
- **Address:** 5781 Lee Blvd Suite 208571, Lehigh Acres, FL 33971

## 🚀 Features

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Project Gallery** - Showcase of 4 completed properties with 26 high-quality photos
- **Interactive Elements** - Hover effects, smooth scrolling, lightbox image viewing
- **Modern UI** - Built with React 19, Tailwind CSS 4, and shadcn/ui components
- **Fast Performance** - Optimized images and efficient code
- **Professional Branding** - Blue and white color scheme matching company logo

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Routing:** Wouter
- **Build Tool:** Vite
- **Language:** TypeScript

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd elite-premium-homes
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```
   
   *Note: This project uses pnpm. If you don't have it installed:*
   ```bash
   npm install -g pnpm
   ```

3. **Start development server:**
   ```bash
   pnpm dev
   ```
   
   The site will be available at `http://localhost:3000`

## 🏗️ Build for Production

Create an optimized production build:

```bash
pnpm build
```

The built files will be in the `dist` directory, ready for deployment.

## 📤 Deployment Options

### Option 1: Netlify
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Build command: `pnpm build`
4. Publish directory: `dist`

### Option 2: Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Framework preset: Vite
4. Build command: `pnpm build`
5. Output directory: `dist`

### Option 3: GitHub Pages
1. Install gh-pages: `pnpm add -D gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "pnpm build && gh-pages -d dist"
   ```
3. Run: `pnpm deploy`

### Option 4: Traditional Hosting (GoDaddy, etc.)
1. Run `pnpm build`
2. Upload contents of `dist` folder to your web hosting via FTP or File Manager
3. Point your domain to the uploaded files

## 📁 Project Structure

```
elite-premium-homes/
├── client/
│   ├── public/           # Static assets (logo, images)
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── lib/          # Utility functions
│   │   ├── App.tsx       # Main app component with routing
│   │   ├── main.tsx      # Application entry point
│   │   └── index.css     # Global styles and theme
│   └── index.html        # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Customization

### Update Company Information
Edit `/client/src/pages/Home.tsx` to update:
- Contact information
- Company description
- Project details

### Change Colors
Edit `/client/src/index.css` to modify the color scheme:
```css
:root {
  --primary: /* Your primary color */
  --background: /* Background color */
  /* etc. */
}
```

### Add/Remove Projects
Edit the `projects` array in `/client/src/pages/Home.tsx`

### Replace Images
Add new images to `/client/public/` and update references in the code

## 📝 License

Copyright © 2025 Elite Premium Home LLC. All rights reserved.

## 🤝 Support

For questions or support, contact Shane Birch at sbirch@elitepremium.homes

---

Built with ❤️ for Elite Premium Home LLC

