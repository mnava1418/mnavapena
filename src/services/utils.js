export const getLocale = () => {
    let locale = localStorage.getItem('locale')

    if(locale === null || locale === undefined) {
        locale = navigator.language || navigator.userLanguage
        locale = locale.split('-')[0]
    }

    return locale
}

export const setLocale = (locale='es') => {
    localStorage.setItem('locale', locale)
}
