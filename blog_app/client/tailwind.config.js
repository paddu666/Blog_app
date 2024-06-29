import flowbitePlugin from 'flowbite/plugin';
import tailwindScrollbar from 'tailwind-scrollbar';

export const content = [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
];
export const theme = {
  extend: {},
};
export const plugins = [
  flowbitePlugin,
  tailwindScrollbar,
];
