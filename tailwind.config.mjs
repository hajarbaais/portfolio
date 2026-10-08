/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#050b14',
          soft: '#08111f',
          card: '#0b1626',
        },
        accent: {
          DEFAULT: '#00ff9c',
          soft: '#6bffc4',
          dim: '#00a866',
        },
        cyan: {
          DEFAULT: '#22d3ee',
          soft: '#67e8f9',
        },
        line: '#16243a',
        ink: {
          DEFAULT: '#e6edf5',
          muted: '#93a4b8',
          faint: '#5b6b80',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
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
