import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mypink:"#F98585",
        myblack:"#21243D",
        recentbg:"#F4E2E2",
         ellipsbg:"#dfd8d8",
        footerbg:"#FAF5F5",
        background: "#CFA6A61C", 
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
