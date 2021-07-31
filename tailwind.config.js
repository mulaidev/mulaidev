module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'body': '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
