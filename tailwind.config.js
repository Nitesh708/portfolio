/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': 'rgb(26, 26, 46)',
        'secondary-bg': 'rgb(22, 33, 62)',
        'accent-1': 'rgb(0, 245, 195)',
        'accent-2': 'rgb(233, 69, 96)',
        'text-primary': 'rgb(224, 224, 224)',
        'text-secondary': 'rgb(160, 160, 160)',
      },
      fontFamily: {
        'mono': ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};
