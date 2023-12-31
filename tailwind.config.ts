/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  "compilerOptions": {
    "types": [
      "react-datepicker"
    ]
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        '2xl': '1400px',
      },
     
    },
    extend: {
      colors: {
        primary: "#396fe0",
        secondary: "#be935f",
        accent: "#25262c",
      },
    },
    plugins: [require("daisyui")],
  },
};
