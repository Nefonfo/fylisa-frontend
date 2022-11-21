/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
      './src/**/*.{js,pug,css}'
  ],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      boxShadow: {
        button: '-0.5rem -0.5rem 0rem 0rem #768FFF, 0px 6.47936px 6.47936px rgba(0, 0, 0, 0.25)',
        buttonHover: '0.5rem 0.5rem 0rem 0rem #768FFF, 0px 10.47936px 10.47936px rgba(0, 0, 0, 0.25)',
        card: '0rem 0.308rem 0.308rem rgba(0, 0, 0, 0.25)',
        navbar: '0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);'
      },
      fontFamily: {
        'sans': ['"Lato"', 'ui-sans-serif']
      }
    }
  },
  daisyui: {
    themes: [
      {
        fylight: {
          "primary": "#0A1840",
          "primary-content": "#BFCDF5",
          "secondary": "#2962FF",
          "accent": "#0041E5",
          "neutral": "#768FFF",
          "base-100": "#FFFFFF",
          "success": "#25D366",
          "info": "#E2E2E2",
          "warning": "#FACC15",
          "error": "#F87171",
          "base-content": "#000000",
          "base-300": "#777777",
        },
        fydark: {
          "primary": "#BFCDF5",
          "primary-content": "#0A1840",
          "secondary": "#4375FF",
          "accent": "#0041E5",
          "neutral": "#768FFF",
          "base-100": "#000000",
          "success": "#36DC73",
          "info": "#2A2A2A",
          "warning": "#EAB308",
          "error": "#F87171",
          "base-content": "#FFFFFF",
          "base-300": "#777777",
        }
      }
    ]

  }
}
