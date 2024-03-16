export default {
  // Since prettier 3.0, manually specifying plugins is required
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],
  // This plugin's options
  importOrder: [
    "^#_server/server-only$",
    "^#./server-only$",
    "^#_experiments/(.*)$",
    "<BUILTIN_MODULES>",
    "",
    "^@builder.io/(.*)$",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^#app/global$",
    "^#app/(.*)$",
    "",
    "^#component/(.*)$",
    "",
    "^#assets/(.*)$",
    "^(?!.*[.]css$)[./].*$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx"],
  importOrderTypeScriptVersion: "5.0.0",
};
