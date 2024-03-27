// here we are defining all the constants of the weather api base urls and related
export const WEATHER_API_BASE_URLS={
    "CURRENT_WEATHER_API_BASE_URL":"https://api.openweathermap.org/data/2.5/weather",
    "DAILY_TRENDS_API_BASE_URL":"http://api.openweathermap.org/data/2.5/forecast",
    "WEATHER_HISTORY_BASE_URL":"http://127.0.0.1:8000/api/1/weather-history"

}

/* this can be put into the environment file or deployment secrets where we will be deploying it
/so that the API keys can be secure */

export const WEATHER_API_KEY = "8696524a86014aefc538bcf238ffe6bb"