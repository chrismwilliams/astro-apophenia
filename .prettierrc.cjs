module.exports = {
  printWidth: 100,
  useTabs: true,
  trailingComma: "all",
  semi: true,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
