import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Circle, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './WeatherMap.css';

const WeatherMap = ({ cityName, weatherData, latitude, longitude }) => {
  const [color, setColor] = useState('blue');
  const [riskLevel, setRiskLevel] = useState('');
  const [riskType, setRiskType] = useState('');

  useEffect(() => {
    const { temperature, humidity, windSpeed, rain } = weatherData;

    // Converter velocidade do vento de m/s para km/h
    const windSpeedKmh = windSpeed * 3.6;

    // Função para determinar o risco de queimadas
    const getFireRisk = () => {
      if (temperature > 40 && humidity < 15 && windSpeedKmh > 30) {
        return { level: 'Crítico', color: 'rgba(255, 0, 0, 0.8)' };
      } else if (temperature > 35 && humidity < 20 && windSpeedKmh > 20) {
        return { level: 'Alto', color: 'rgba(255, 0, 0, 0.6)' };
      } else if (temperature > 30 && temperature <= 35 && humidity < 20) {
        return { level: 'Médio', color: 'rgba(255, 165, 0, 0.6)' };
      } else if (temperature > 25 && temperature <= 30 && humidity < 30) {
        return { level: 'Baixo', color: 'rgba(255, 255, 0, 0.6)' };
      } else {
        return { level: 'Mínimo', color: 'rgba(0, 255, 0, 0.6)' };
      }
    };

    // Função para determinar o risco de inundações
    const getFloodRisk = () => {
      if (temperature > 35 && humidity < 30 && windSpeedKmh > 60 && rain > 100) {
        return { level: 'Crítico', color: 'rgba(0, 0, 255, 0.8)' };
      } else if (temperature > 30 && temperature <= 35 && humidity >= 30 && humidity < 40 && windSpeedKmh > 40 && windSpeedKmh <= 60 && rain > 50 && rain <= 100) {
        return { level: 'Alto', color: 'rgba(0, 0, 255, 0.6)' };
      } else if (temperature > 25 && temperature <= 30 && humidity >= 40 && humidity < 50 && windSpeedKmh > 20 && windSpeedKmh <= 40 && rain > 20 && rain <= 50) {
        return { level: 'Médio', color: 'rgba(0, 191, 255, 0.6)' };
      } else if (temperature <= 25 && humidity >= 50 && windSpeedKmh <= 20 && rain <= 20) {
        return { level: 'Baixo', color: 'rgba(173, 216, 230, 0.6)' };
      } else {
        return { level: 'Mínimo', color: 'rgba(240, 248, 255, 0.6)' };
      }
    };

    const fireRisk = getFireRisk();
    const floodRisk = getFloodRisk();

    // Determinar qual risco é mais alto
    if (fireRisk.level === 'Crítico' || (fireRisk.level === 'Alto' && floodRisk.level !== 'Crítico')) {
      setColor(fireRisk.color);
      setRiskLevel(fireRisk.level);
      setRiskType('Queimada');
    } else if (floodRisk.level === 'Crítico' || floodRisk.level === 'Alto') {
      setColor(floodRisk.color);
      setRiskLevel(floodRisk.level);
      setRiskType('Inundação');
    } else if (fireRisk.level === 'Médio' && floodRisk.level !== 'Médio') {
      setColor(fireRisk.color);
      setRiskLevel(fireRisk.level);
      setRiskType('Queimada');
    } else if (floodRisk.level === 'Médio') {
      setColor(floodRisk.color);
      setRiskLevel(floodRisk.level);
      setRiskType('Inundação');
    } else {
      setColor(fireRisk.color);
      setRiskLevel(fireRisk.level);
      setRiskType('Queimada');
    }

  }, [weatherData]);

  return (
    <MapContainer center={[latitude, longitude]} zoom={10} className="weather-map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Circle
        center={[latitude, longitude]}
        pathOptions={{ fillColor: color, color: 'black' }}
        radius={20000}
      >
        <Tooltip permanent>
          <div>
            <h3>{cityName}</h3>
            <p>Temperatura: {weatherData.temperature}°C</p>
            <p>Umidade: {weatherData.humidity}%</p>
            <p>Chuva: {weatherData.rain} mm</p>
            <p>Velocidade do vento: {(weatherData.windSpeed * 3.6).toFixed(1)} km/h</p>
            <p>Direção do vento: {weatherData.windDirection}°</p>
            <p>Risco de {riskType}: {riskLevel}</p>
          </div>
        </Tooltip>
      </Circle>
    </MapContainer>
  );
};

export default WeatherMap;