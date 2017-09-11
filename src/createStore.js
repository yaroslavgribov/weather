import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'

import weather from './Weather/weatherReducer'

const rootReducer = combineReducers({
  weather
})

export default createStore(
  rootReducer,
  {},
  applyMiddleware(logger)
)