import {compose, createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'

import reducers from './reducers'

const logger = createLogger()
const middleware = []

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = (preloadedState) => {
    return createStore(
        reducers,
        preloadedState,
        composeEnhancers(applyMiddleware(...middleware, logger))
    )
}

export default configureStore