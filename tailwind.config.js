module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        light:"#CAF0F8",
        medium:" #0077B6",
        dark:"#023E8A" 

    }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
