import React, { useState } from "react";
import WeatherComponent from "./WeatherComponent";
import FormComponent from "./FormComponent";
import "../assets/Home.css";
import OrientationComponent from "./OrientationComponent";

function Home({ onLogout }) {
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const [cityName] = useState("João Pessoa");
  const [weatherData, setWeatherData] = useState({
    temperature: 38,
    humidity: 25,
    windSpeed: 30,
    rain: 10, // Incluindo a precipitação para o cálculo do risco de inundação
  });
  const [alertMessage, setAlertMessage] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false); // Estado para controlar o modal
  const [showAlertComponent, setShowAlertComponent] = useState(false); // Controla quando exibir o componente de orientação

  // Função para fechar o modal e redirecionar para a aba de orientações
  const handleCloseModal = () => {
    setShowModal(false); // Fecha o modal
    setSelectedTab("orientacoes"); // Leva o usuário para a aba "Orientações"
    setShowAlertComponent(true); // Exibe as orientações após fechar o modal
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo">Logo</div>
      </header>

      <div className="dashboard-content">
        <nav className="sidebar">
          <button
            className={`sidebar-button ${
              selectedTab === "Clima" ? "active" : ""
            }`}
            onClick={() => setSelectedTab("Clima")}
          >
            Clima
          </button>
          <button
            className={`sidebar-button ${showNotification ? "alert" : ""} ${
              selectedTab === "orientacoes" ? "active" : ""
            }`}
            onClick={() => setSelectedTab("orientacoes")}
          >
            Orientações
          </button>
          <button
            className={`sidebar-button ${
              selectedTab === "alerta" ? "active" : ""
            }`}
            onClick={() => setSelectedTab("alerta")}
          >
            Botão de Alerta
          </button>
          <button
            className={`sidebar-button ${
              selectedTab === "configuracoes" ? "active" : ""
            }`}
            onClick={() => setSelectedTab("configuracoes")}
          >
            Configurações
          </button>
        </nav>

        <main className="main-content">
          {/* Renderiza a seção de Clima */}
          {selectedTab === "Clima" && (
            <WeatherComponent
              cityName={cityName}
              setWeatherData={setWeatherData}
              setErrorMessage={setErrorMessage}
            />
          )}

          {/* Renderiza a seção de Orientações */}
          {selectedTab === "orientacoes" && <OrientationComponent />}

          {/* Renderiza a seção de Alerta com o formulário */}
          {selectedTab === "alerta" && (
            <div>
              <h2>Botão de Alerta</h2>
              <FormComponent />
            </div>
          )}

          {selectedTab === "configuracoes" && (
            <div>
              <h2>Configurações</h2>
              <button onClick={onLogout} className="logout-button">
                Sair
              </button>
            </div>
          )}

          {/* Exibe o Modal diretamente aqui no Home */}
          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>Alerta Urgente</h2>
                <p>{alertMessage}</p>
                <button onClick={handleCloseModal} className="close-button">
                  Fechar
                </button>
              </div>
            </div>
          )}

          {/* Exibe a mensagem de erro, se houver */}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </main>
      </div>
    </div>
  );
}

export default Home;
