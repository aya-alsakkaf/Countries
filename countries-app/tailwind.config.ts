import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'customeBG':'#141E46',
        'customeCard':'#FFF3DA',
        'focusedText':'#F6635C',
        'countryText': '#F7E987'
      }
    },
  },
  plugins: [],
}
export default config
