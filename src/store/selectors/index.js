import { get } from 'lodash'
import { createSelector } from 'reselect'

const siteInfo = state => get(state, 'index.siteInfo', {})
export const siteInfoSelector = createSelector(siteInfo, s => s)