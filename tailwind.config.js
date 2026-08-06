/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#132238',
        surface: '#1A2F47',
        card: 'rgba(255,255,255,0.03)',
        accent: {
          DEFAULT: '#29D8FF',
          light: '#7EEBFF',
          dark: '#0CB7EA',
        },
        muted: '#A9BED0',
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        card: '0 24px 80px rgba(0, 0, 0, 0.22)',
        glow: '0 0 60px rgba(41, 216, 255, 0.18)',
        accent: '0 24px 80px rgba(41, 216, 255, 0.12)',
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


