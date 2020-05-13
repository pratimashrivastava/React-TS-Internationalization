import React from 'react'
import { i18n, Link, withNamespaces } from '../i18n' // We replace next/link with the one provide by next-i18next, this helps with locale subpaths

const HomePage: React.FunctionComponent = ({ t }) => (
  <div>
    <h1>{t('hello-world')}</h1>
    <button type='button' onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en')}>{t('change-language')}</button>
    <Link href='/second-page'><button type='button'>{t('goto-second-page')}</button></Link>
    </div>
      )

HomePage.getInitialProps = () => ({
        namespacesRequired: ['common'],
})

export default withNamespaces('common')(HomePage)
