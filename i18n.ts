const NextI18Next = require('next-i18next/dist/commonjs').default

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['hi'],
  // localeSubpaths: 'foreign', // locale subpaths for url could be none, foreign or all
});
module.exports =  NextI18NextInstance
module.exports =  {
  appWithTranslation,
  withNamespaces,
} = NextI18NextInstance;