import SITE_EN from '../../config/en'
import SITE_ES from '../../config/es'

import {setSiteInfoAction} from '../actions'

export const setSiteInteraction = (locale, dispatch) => {
    let siteInfo = SITE_EN

    if(locale === 'es') {
        siteInfo = SITE_ES
    }

    dispatch(setSiteInfoAction(siteInfo))
}
