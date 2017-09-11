export const FETCH_WEATHER = 'FETCH_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'

export function fetchWeather() {
  return {
    type: FETCH_WEATHER,
    loading: true
  }
}

export function receiveWeather( weather ) {
  return {
    type: RECEIVE_WEATHER,
    loading: false,
    weather
  }
}