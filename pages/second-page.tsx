import React from 'react'
import { withNamespaces, Link } from '../i18n'

const SecondPage: React.FunctionComponent = ({ t }) => (
  <div>
    <h1>{t('welcome')}</h1>
    <Link href='/'><button type='button'>{t('go-back')}</button></Link>
  </div>
)

export default withNamespaces('common')(SecondPage)
