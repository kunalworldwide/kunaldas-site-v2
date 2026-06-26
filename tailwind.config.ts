import type { Config } from "tailwindcss";

/**
 * Tailwind config — provided as a reference / compatibility shim.
 *
 * Note: This project uses Tailwind CSS v4, where theme tokens are
 * declared via the `@theme` directive in `app/globals.css`. The
 * tokens below mirror those declarations for editors and tooling
 * that still read a tailwind.config.ts file.
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FDFCF8',
        surface: '#FFFFFF',
        foreground: '#1A1A1A',
        muted: '#52525B',
        accent: '#2563EB',
        'accent-warm': '#D97706',
        border: '#E7E5E4',
        subtle: '#F5F5F4',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-source-serif)', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      maxWidth: {
        'content': '1100px',
      },
    },
  },
  plugins: [],
};

export default config;
