/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        // padding: "1rem",
      },
      backgroundColor: {
        alt: "#5a43cb",
        backdrop: "rgba(223, 223, 223, 0.418)",
      },
    },
  },
  plugins: [],
};
