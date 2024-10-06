import { useState } from 'react';
import { fetchWeatherData } from '../services/weatherService';
import { fetchCityCoordinates } from '../services/geocodingService';

const useWeatherData = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [coordinates, setCoordinates] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async (cityName) => {
        setError(null);

        try {
            const [lat, lon] = await fetchCityCoordinates(cityName);
            setCoordinates([lat, lon]);

            const data = await fetchWeatherData(cityName);
            setWeatherData(data);
        } catch (error) {
            setError(error.message);
        }
    };

    return { weatherData, coordinates, error, fetchData };
};

export default useWeatherData;