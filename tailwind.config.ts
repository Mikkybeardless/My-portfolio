import type { Config } from "tailwindcss";
import daisyui from "daisyui";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    
    keyframes: {
      'fade-slide-in-left': {
        '0%': { 
          transform: 'translateX(-100%)', // Start offscreen to the left
          opacity: '0', // Fully transparent
        },
        '100%': {
          transform: 'translateX(0)', // Slide to its original position
          opacity: '1', // Fully visible
        },
      },
      'slide-up': {
        '0%': { transform: 'translateY(100%)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      'fade-slide-in-right': {
        '0%': {
          transform: 'translateX(100%)', // Start offscreen to the right
          opacity: '0', // Fully transparent
        },
        '100%': {
          transform: 'translateX(0)', // Slide to its original position
          opacity: '1', // Fully visible
        },
      },
      'letter-slide-in': {
        '0%': { transform: 'translateX(-100%)', opacity: '0' }, // Start offscreen to the left
        '100%': { transform: 'translateX(0)', opacity: '1' }, 
      }
    },
    animation: {
      'letter-slide-in': 'letter-slide-in 2.5s ease-out forwards',
      'slide-up': 'slide-up 2.5s ease-out forwards',
      'fade-slide-in-left': 'fade-slide-in-left 1.5s ease-out forwards', // Combining fade and slide from the left
      'fade-slide-in-right': 'fade-slide-in-right 1.5s ease-out forwards', // Combining fade and slide from the right
      
    },
  },
  plugins: [
    daisyui,
  ],
};
export default config;
