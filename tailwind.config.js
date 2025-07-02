/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#d4a004',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        bronze: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
          950: '#362318',
        },
        dark: {
          50: '#f6f6f7',
          100: '#e1e3e6',
          200: '#c2c5cb',
          300: '#9da2ac',
          400: '#757b8c',
          500: '#5c6275',
          600: '#484c5d',
          700: '#363947',
          800: '#1f212b',
          900: '#14151b',
          950: '#0a0a0c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'casino-float': 'casino-float 6s ease-in-out infinite',
        'card-flip': 'card-flip 4s ease-in-out infinite',
        'chip-spin': 'chip-spin 8s linear infinite',
        'dice-roll': 'dice-roll 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(234, 179, 8, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(234, 179, 8, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'casino-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-15px) rotate(90deg)' },
          '50%': { transform: 'translateY(-10px) rotate(180deg)' },
          '75%': { transform: 'translateY(-5px) rotate(270deg)' },
        },
        'card-flip': {
          '0%, 100%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg)' },
        },
        'chip-spin': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        'dice-roll': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(90deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '75%': { transform: 'rotate(270deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'casino-pattern': `
          radial-gradient(circle at 25% 25%, rgba(234, 179, 8, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(217, 119, 6, 0.1) 0%, transparent 50%),
          linear-gradient(45deg, transparent 25%, rgba(234, 179, 8, 0.05) 25%, rgba(234, 179, 8, 0.05) 50%, transparent 50%, transparent 75%, rgba(234, 179, 8, 0.05) 75%)
        `,
        'casino-texture': `
          repeating-linear-gradient(
            45deg,
            rgba(234, 179, 8, 0.03) 0px,
            rgba(234, 179, 8, 0.03) 1px,
            transparent 1px,
            transparent 20px
          ),
          repeating-linear-gradient(
            -45deg,
            rgba(217, 119, 6, 0.03) 0px,
            rgba(217, 119, 6, 0.03) 1px,
            transparent 1px,
            transparent 20px
          )
        `,
      },
    },
  },
  plugins: [],
};