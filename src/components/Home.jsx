import React, { useState } from "react";
import "../assets/Home.css";

const API_KEY = "aae1b59c8e17e7a34c57be2a2625638c";

async function fetchWeatherData(cityName) {
  const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
  const completeUrl = `${baseUrl}q=${cityName}&appid=${API_KEY}&units=metric`;

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

function Home({ onLogout }) {
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const [cityName, setCityName] = useState("Rio de Janeiro");
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);

  const handleWeatherFetch = async () => {
    try {
      const data = await fetchWeatherData(cityName);
      setWeatherData(data);
      setErrorMessage(null);

      const alert = checkFireRisk(data.temperature, data.humidity);
      setAlertMessage(alert);
    } catch (error) {
      setErrorMessage(error.message);
      setWeatherData(null);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo">Logo</div>
        <button onClick={onLogout} className="logout-button">
          Sair
        </button>
      </header>

      <div className="dashboard-content">
        <nav className="sidebar">
          <button
            className={`sidebar-button ${selectedTab === "Clima" ? "active" : ""
              }`}
            onClick={() => setSelectedTab("Clima")}
          >
            Clima
          </button>
          <button
            className={`sidebar-button ${selectedTab === "orientacoes" ? "active" : ""
              }`}
            onClick={() => setSelectedTab("orientacoes")}
          >
            Orientações
          </button>
          <button
            className={`sidebar-button ${selectedTab === "alerta" ? "active" : ""
              }`}
            onClick={() => setSelectedTab("alerta")}
          >
            Botão de Alerta
          </button>
          <button
            className={`sidebar-button ${selectedTab === "configuracoes" ? "active" : ""
              }`}
            onClick={() => setSelectedTab("configuracoes")}
          >
            Configurações
          </button>
        </nav>

        <main className="main-content">
          {selectedTab === "Clima" && (
            <div className="dashboard-section">
              <h2>Clima</h2>
              <input
                type="text"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                placeholder="Digite o nome da cidade"
              />
              <button onClick={handleWeatherFetch}>Obter Clima</button>

              {errorMessage && <p>{errorMessage}</p>}
              {weatherData && (
                <div>
                  <p>
                    A temperatura atual em {cityName} é{" "}
                    {weatherData.temperature}°C.
                  </p>
                  <p>A umidade atual é {weatherData.humidity}%.</p>
                  <p>A precipitação é {weatherData.rain} mm/h.</p>
                  <p>A velocidade do vento é {weatherData.windSpeed} m/s.</p>
                  <p>A direção do vento é {weatherData.windDirection}°.</p>
                  {alertMessage && (
                    <p style={{ color: "red" }}>{alertMessage}</p>
                  )}
                </div>
              )}
            </div>
          )}
          {selectedTab === "orientacoes" && (
            <div className="dashboard-section">
              <h2>Orientações</h2>
              <p>Conteúdo de orientações.</p>
            </div>
          )}
          {selectedTab === "alerta" && (
            <div className="dashboard-section">
              <h2>Botão de Alerta</h2>
              <p>Conteúdo de alertas personalizados.</p>
            </div>
          )}
          {selectedTab === "configuracoes" && (
            <div className="dashboard-section">
              <h2>Configurações</h2>
              <p>Configurações.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Home;
