import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
```

4. **Commit**

---

## 📂 **Step 2: Move images to the PUBLIC folder (THE RIGHT WAY)**

The images MUST be in a `public/` folder for Vite to include them.

### **Here's what to do:**

1. **Go to your repo root:** `https://github.com/spartz50/Elite-Premium-Home`

2. **Create a `public` folder:**
   - Click "Add file" → "Create new file"
   - Type: `public/images/projects/.gitkeep`
   - Click "Commit new file"

3. **Upload your images to the public folder:**
   - Go into the `public/images/projects/` folder you just created
   - Click "Add file" → "Upload files"
   - **Drag and drop ALL your .webp images**
   - Commit

4. **Your structure should look like:**
```
public/
  images/
    projects/
      logo.webp
      jolly_bathroom_2.webp
      justice_kitchen_main.webp
      (all other images)
