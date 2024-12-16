// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'nuxt/prefer-import-meta': 'error',
    'vue/multi-word-component-names': 'off',
    "vue/html-self-closing": 0,
  },
})
// Your custom configs here
