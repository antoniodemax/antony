/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050807',
        surface: '#0B100E',
        card: '#0B100E',
        accent: {
          DEFAULT: '#8FCB9B',
          light: '#A7DDB2',
          dark: '#3F8F63',
        },
        muted: '#6FAF88',
        border: 'rgba(255,255,255,0.07)',
        accentBorder: 'rgba(143,203,155,0.20)',
        accentBorderHover: 'rgba(143,203,155,0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        card: '0 24px 80px rgba(0, 0, 0, 0.22)',
        glow: '0 0 60px rgba(143,203,155,0.18)',
        accent: '0 24px 80px rgba(143,203,155,0.12)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}


