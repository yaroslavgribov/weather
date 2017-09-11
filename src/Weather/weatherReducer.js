import { FETCH_WEATHER, RECEIVE_WEATHER } from './weatherActionCreators'

export default (state = {
  cities: [
    { id: 2643743, name: 'London' }, 
    { id: 1850147, name: 'Tokyo' }, 
    { id: 524901, name: 'Moscow' }, 
    { id: 5128638, name: 'New York' },
    { id: 498817, name: 'Saint Petersburg' }
  ],
  weather: [ ]
}, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
    case RECEIVE_WEATHER:
      return {...state, weather: [ action.weather ]}
    default: 
      return state;
  }
}