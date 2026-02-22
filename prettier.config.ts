export default {
  semi: false,
  singleQuote: true,
  printWidth: 100,
  plugins: ['prettier-plugin-embed', 'prettier-plugin-sql'],
  embeddedSqlTags: ['sql'],
  language: 'sqlite',
  keywordCase: 'lower',
}
