import { OPENWEATHER_API_KEY } from '../utils/constants';

export async function fetchWeatherData(cityName) {
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
    const completeUrl = `${baseUrl}q=${cityName}&appid=${OPENWEATHER_API_KEY}&units=metric`;

    try {
        const response = await fetch(completeUrl);
        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        return {
            temperature: data.main.temp,
            humidity: data.main.humidity,
            rain: data.rain ? data.rain["1h"] : 0,
            windSpeed: data.wind.speed,
            windDirection: data.wind.deg,
        };
    } catch (error) {
        throw new Error(`Erro ao obter os dados do clima: ${error.message}`);
    }
}