/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        surface: '#0c0f16',
        'surface-2': '#10141d',
        primary: '#ffffff',
        secondary: '#9ba9c4',
        muted: '#6b7690',
        border: 'rgba(255,255,255,0.08)',
        'border-strong': 'rgba(255,255,255,0.14)',
        accent: {
          orange: '#ff8a3d',
          gold: '#ffc15e',
          blue: '#3d7cff',
          cyan: '#5ad1ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Inter Placeholder', 'sans-serif'],
      },
      backgroundImage: {
        'aurora-hero':
          'radial-gradient(60% 50% at 18% 100%, rgba(255,140,60,0.35) 0%, rgba(255,140,60,0) 60%), radial-gradient(60% 50% at 82% 100%, rgba(61,124,255,0.4) 0%, rgba(61,124,255,0) 60%), radial-gradient(40% 30% at 50% 100%, rgba(180,90,255,0.25) 0%, rgba(180,90,255,0) 60%)',
        'sphere-gradient':
  'conic-gradient(from 180deg at 50% 50%, #1E3A8A 0deg, #2563EB 70deg, #93C5FD 140deg, #FFFFFF 180deg, #67E8F9 240deg, #06B6D4 300deg, #1E3A8A 360deg)',
        'cta-button':
          'linear-gradient(90deg, #ff8a3d 0%, #ffc15e 35%, #5ad1ff 70%, #3d7cff 100%)',
        'footer-glow':
  'radial-gradient(60% 80% at 20% 50%, rgba(37,99,235,0.25), transparent 60%), radial-gradient(60% 80% at 80% 50%, rgba(6,182,212,0.3), transparent 60%)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
       boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.45)',
        'glow-orange': '0 0 40px rgba(255,140,60,0.35)',
        'glow-blue': '0 0 40px rgba(61,124,255,0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'spin-slow': 'spin 16s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
