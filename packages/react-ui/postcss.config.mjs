/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-nested": {},
    "@euraxluo/tailwindcss-transformer": {},
  },
};

export default config;
