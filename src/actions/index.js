import axios from 'axios'

const API_KEY = 'dcbda91f1872e9529854854cc8b693f5'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

// action creators myst always return action object
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`
    // request is a promise
    const request = axios.get(url)
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
