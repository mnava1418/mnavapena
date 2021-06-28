import {combineReducers} from 'redux'

const index = (state = {}, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const reducers = combineReducers({
    index
})

export default reducers
