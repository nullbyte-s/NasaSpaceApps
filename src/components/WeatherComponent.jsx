import { useState } from "react";
import "../assets/Weather.css";

// Função para buscar os dados climáticos da API WeatherAPI
const API_KEY = "1be8d49c3f38466a9b2133927240610"; // Substitua pela sua chave válida da API
const baseUrl = "http://api.weatherapi.com/v1/forecast.json";

async function fetchWeatherData(cityName) {
  const completeUrl = `${baseUrl}?key=${API_KEY}&q=${cityName}&days=5&aqi=no&alerts=no`;

  try {
    const response = await fetch(completeUrl);
    const data = await response.json();

    if (response.status !== 200) {
      throw new Error(data.error.message);
    }

    return {
      currentTemp: data.current.temp_c,
      humidity: data.current.humidity,
      rain: data.current.precip_mm,
      windSpeed: data.current.wind_kph,
      windDirection: data.current.wind_dir,
      forecast: data.forecast.forecastday.map((day) => ({
        date: day.date,
        temp: day.day.avgtemp_c,
        condition: day.day.condition.text,
      })),
    };
  } catch (error) {
    console.error("Erro ao buscar dados:", error.message);
    throw new Error("Erro ao buscar dados do clima");
  }
}

const WeatherComponent = () => {
  const [inputCity, setInputCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleWeatherFetch = async () => {
    try {
      const data = await fetchWeatherData(inputCity);
      setWeatherData(data);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Erro ao buscar dados do clima");
      setWeatherData(null);
    }
  };

  return (
    <div>
      <h2>Dados Climáticos</h2>
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        placeholder="Digite o nome da cidade"
      />
      <button onClick={handleWeatherFetch}>Buscar</button>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {weatherData && (
        <div>
          <h3>Clima Atual em {inputCity}</h3>
          <p>Temperatura: {weatherData.currentTemp}°C</p>
          <p>Umidade: {weatherData.humidity}%</p>
          <p>Precipitação: {weatherData.rain} mm/h</p>
          <p>Velocidade do vento: {weatherData.windSpeed} km/h</p>
          <p>Direção do vento: {weatherData.windDirection}</p>

          <h3>Previsão para os próximos dias</h3>
          <div className="forecast">
            {weatherData.forecast.map((day, index) => (
              <div key={index} className="forecast-day">
                <p>Data: {day.date}</p>
                <p>Temperatura: {day.temp}°C</p>
                <p>Condição: {day.condition}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
