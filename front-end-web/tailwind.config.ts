import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
        raleway: ['var(--font-raleway)'],
      },
      colors: {
        white: {
          100: '#fff',
        },
        pink: {
          100: '#D8315B',
        },
        blue: {
          200: '#CFEBED',
          250: '#C2FAFE',
          300: '#3E92CC',
          400: '#4DAAEC',
        },
      },
    },
  },
  plugins: [],
}
export default config
