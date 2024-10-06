import React, { useState } from 'react';
import WeatherMap from '../WeatherMap/WeatherMap';
import useWeatherData from '../../hooks/useWeatherData';
import './WeatherApp.css';

const WeatherApp = () => {
    const [cityName, setCityName] = useState('');
    const { weatherData, coordinates, error, fetchData } = useWeatherData();

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetchData(cityName);
    };

    return (
        <div className="weather-app">
            <h1>Mapa do Clima</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    placeholder="Digite o nome da cidade"
                    required
                />
                <button type="submit">Buscar</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {weatherData && coordinates && (
                <WeatherMap
                    cityName={cityName}
                    weatherData={weatherData}
                    latitude={coordinates[0]}
                    longitude={coordinates[1]}
                />
            )}
        </div>
    );
};

export default WeatherApp;