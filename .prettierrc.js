export default {
  // Since prettier 3.0, manually specifying plugins is required
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],
  // This plugin's options
  importOrder: [
    "^#server/server-only$",
    "^#./server-only$",
    "^#experiments/(.*)$",
    "<BUILTIN_MODULES>",
    "",
    "^@builder.io/(.*)$",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^#app/(.*)$",
    "",
    "^#component/(.*)$",
    "",
    "^#assets/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
};
