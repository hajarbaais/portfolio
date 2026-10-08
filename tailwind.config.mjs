/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#08090d',
          soft: '#0d0f15',
          card: '#11131a',
        },
        accent: {
          DEFAULT: '#c6ff3d',
          soft: '#dcff8a',
          dim: '#6f8f1f',
        },
        violet: {
          DEFAULT: '#9d8cff',
          soft: '#c4b9ff',
        },
        line: '#23262f',
        ink: {
          DEFAULT: '#ededf0',
          muted: '#a3a6b0',
          faint: '#6c6f7b',
        },
      },
      fontFamily: {
        display: ['Syne', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 40s linear infinite',
        'spin-slow': 'spin 24s linear infinite',
        'scroll-hint': 'scrollHint 2.2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollHint: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '45%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '55%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
    },
  },
  plugins: [],
};
