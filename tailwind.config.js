/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        copper:        '#B06500',
        'copper-dim':  'rgba(176,101,0,0.15)',
        cream:         '#F5F5F0',
        'dark-ground': '#111111',
        'dark-base':   '#1A1A1A',
        'dark-raised': '#242424',
        'dark-high':   '#2E2E2E',
        'wa':          '#B06500',
        'wa-hover':    '#8f4f00',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        '300': '300',
        '600': '600',
        '700': '700',
      },
    },
  },
};
