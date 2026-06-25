/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#38bdf8',
        tertiary: '#0f172a',
        'black-100': '#090325',
        'black-200': '#050816',
        'white-100': '#f8fbff',
        flashWhite: '#eef2ff',
        platinum: '#dbeafe',
        platinumLight: '#eef4ff',
        timberWolf: '#e2e8f0',
        taupe: '#7c92f1',
        silver: '#cbd5e1',
        dim: '#64748b',
        battleGray: '#3b82f6',
        french: '#60a5fa',
        night: '#111827',
        jet: '#111827',
        jetLight: '#1f2937',
        jetGray: '#6b7280',
        richBlack: '#0f172a',
        eerieBlack: '#0d101f',
        onyx: '#475569',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #1f1f1f',
        cardLight: '0px 19px 38px #eaeaec, 0px 15px 12px #eaeaec',
      },
      screens: {
        xs: '450px',
        sm: '640px',
        md: '768px',
        xmd: '900px',
        lg: '1025px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
      backgroundImage: {
        about:
          'linear-gradient(165deg, rgba(244,244,246,1) 100%, rgba(122,122,122,1) 100%)',
        experience:
          "linear-gradient(135deg, rgba(238,242,255,0.45) 55%, rgba(15,23,42,0.25) 100%),url('/src/assets/backgrounds/white-abstract.png')",
        experienceLight:
          'linear-gradient(137deg, rgba(238,242,255,0.6) 60%, rgba(15,23,42,0.9) 60%)',
        hero: 'linear-gradient(135deg, rgba(238,242,255,0.9) 55%, rgba(15,23,42,0.95) 55%)',
        'hero-mobile':
          'linear-gradient(137deg, rgba(238,242,255,0.9) 55%, rgba(15,23,42,1) 55%)',
        tech: "linear-gradient(165deg, rgba(15,23,42,0.9) 100%, rgba(56,189,248,0.28) 100%), url('/src/assets/backgrounds/nairobi.png')",
      },
      fontFamily: {
        arenq: ['Arenq'],
        beckman: ['Beckman'],
        mova: ['Mova'],
        overcameBold: ['Overcame Bold'],
        overcameOutline: ['Overcame Outline'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
