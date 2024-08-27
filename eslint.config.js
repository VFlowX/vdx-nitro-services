import antfu from "@antfu/eslint-config"
import oxlint from "eslint-plugin-oxlint"

export default antfu(
  {
    stylistic: {
      indent: 2,
      quotes: "double",
    },
    ignores: [
    ],
  },
  oxlint.configs["flat/recommended"],
  {
    rules: {
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": "off",
      "node/prefer-global/process": "off",
      "n/prefer-global/buffer": "off",
    },
  },
)
