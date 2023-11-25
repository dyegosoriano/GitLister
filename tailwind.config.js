/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8257E5',
        secondary: '#04D361',
        warning: '#E33D3D',
        text: '#32264D',
        background: '#DCDCE5',
        disabled: '#9C98A6',
        white: '#FFFFFF'
      }
    }
  },
  plugins: []
}
