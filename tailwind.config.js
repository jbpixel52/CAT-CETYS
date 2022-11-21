module.exports = {
    //...
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

    // add daisyUI plugin
    plugins: [require('@tailwindcss/typography'), require('daisyui')]
  
    // daisyUI config (optional)
    daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "dark",
    },
  }