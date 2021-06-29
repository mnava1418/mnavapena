import {combineReducers} from 'redux'

const index = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SITE_INFO':
            return {...state, siteInfo: action.siteInfo}
        default:
            return state
    }
}

const reducers = combineReducers({
    index
})

export default reducers
