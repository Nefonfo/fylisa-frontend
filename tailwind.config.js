/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
      './src/**/*.{js,pug,css,jsx}'
  ],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
       dark: '#000000'
      },
      boxShadow: {
        button: '-0.5rem -0.5rem 0rem 0rem #768FFF, 0px 6.47936px 6.47936px rgba(0, 0, 0, 0.25)',
        buttonHover: '0.5rem 0.5rem 0rem 0rem #768FFF, 0px 10.47936px 10.47936px rgba(0, 0, 0, 0.25)',
        card: '0rem 0.308rem 0.308rem rgba(0, 0, 0, 0.25)',
        navbar: '0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);'
      },
      fontSize: {
        "6.5xl": "4rem",
        "7.5xl": "5.25rem",
        "8.5xl": "7rem",
        "10xl": "9rem"
      },
      fontFamily: {
        'sans': ['"Lato"', 'ui-sans-serif']
      }
    }
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#0A1840",
          "primary-content": "#FFFFFF",
          "secondary": "#2962FF",
          "secondary-content": "#FFFFFF",
          "accent": "#BFCDF5",
          "accent-content": "#0A1840",
          "neutral": "#768FFF",
          "neutral-content": "#0A1840",
          "info": "#E2E2E2",
          "info-content": "#0A1840",
          "base-100": "#FFFFFF",
          "base-200": "#A59D9D",
          "base-content": "#000000",
          "success": "#25D366",
          "success-content": "#FFFFFF"
        },
        dark: {
          "primary": "#BFCDF5",
          "primary-content": "#000000",
          "secondary": "#4375FF",
          "secondary-content": "#000000",
          "accent": "#0A1840",
          "accent-content": "#BFCDF5",
          "neutral": "#768FFF",
          "neutral-content": "#0D0D0D",
          "info": "#2A2A2A",
          "info-content": "#BFCDF5",
          "base-100": "#000000",
          "base-200": "#AEAEAE",
          "base-content": "#FFFFFF",
          "success": "#36DC73",
          "success-content": "#0F5428"
        }
      }
    ]

  }
}
