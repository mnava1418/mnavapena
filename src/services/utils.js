import SITE_EN from '../config/en'
import SITE_ES from '../config/es'

export const getLocale = () => {
    let locale = localStorage.getItem('locale')

    if(locale === null || locale === undefined) {
        locale = navigator.language || navigator.userLanguage
        locale = locale.split('-')[0]
    }

    return locale
}

export const getSiteInfo = (locale) => {
    let siteInfo = SITE_EN

    if(locale === 'es') {
        siteInfo = SITE_ES
    }

    return siteInfo
}