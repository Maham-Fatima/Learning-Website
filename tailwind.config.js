/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      borderRadius: {
        'rounded-edge': '6px', 
      },
      colors: {
        'greyblue': '#6d86a3', 
        'navy' : '#040712',
        'hover-shade' : '#323f54', 
      },
      height: {
        'navbar-height': '7vh', 
        'logo': '5vh',
        'footer':'40px',
      
        
      },
      fontFamily: {
        'lucida-console': ['Lucida Console', 'Courier New', 'monospace'],
      },
      listStyleType: {
        'roman': 'lower-roman', 
      },
      width: {
        'image-sm': '10vw',
       
      },
   
    },
  },
  plugins: [],
}


