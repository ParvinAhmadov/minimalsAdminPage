/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
     
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        ringing: 'ringing 0.7s ease-in-out infinite',
        spin: 'spin 3s linear infinite',
      },
      transitionProperty: {
        'transform': 'transform',
      },
      transitionDuration: {
        'default': '500ms',
      },
      transitionTimingFunction: {
        'default': 'ease-in-out',
      },
    },
  },
  plugins: [],
}
