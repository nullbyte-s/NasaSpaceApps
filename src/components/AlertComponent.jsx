import React from "react";

const AlertComponent = ({ weatherData }) => {
  const getFireRisk = () => {
    const { temperature, humidity, windSpeed } = weatherData;

    if (temperature > 40 && humidity < 15 && windSpeed > 30) {
      return "Risco Crítico de Queimada";
    } else if (temperature > 35 && humidity < 20 && windSpeed > 20) {
      return "Alto Risco de Queimada";
    } else if (temperature > 30 && humidity < 30) {
      return "Risco Médio de Queimada";
    } else if (temperature > 25 && humidity < 40) {
      return "Risco Baixo de Queimada";
    } else {
      return "Risco Mínimo de Queimada";
    }
  };

  const getFloodRisk = () => {
    const { temperature, humidity, rain } = weatherData;

    if (temperature > 35 && humidity < 30 && rain > 100) {
      return "Risco Crítico de Inundação";
    } else if (temperature > 30 && humidity < 40 && rain > 50) {
      return "Alto Risco de Inundação";
    } else if (temperature > 25 && humidity < 50 && rain > 20) {
      return "Risco Médio de Inundação";
    } else if (temperature < 25 && humidity > 50 && rain < 20) {
      return "Risco Baixo de Inundação";
    } else {
      return "Sem Risco de Inundação";
    }
  };

  return (
    <div>
      <h2>Orientações</h2>
      <div>
        <h3>Queimadas</h3>
        <p>{getFireRisk()}</p>
      </div>
      <div>
        <h3>Inundações</h3>
        <p>{getFloodRisk()}</p>
      </div>
      {/* Aqui você pode incluir mais detalhes sobre as medidas a serem tomadas */}
      <p>
        <strong>Orientações:</strong> Dependendo do risco, é importante tomar
        medidas de prevenção, como afastar animais de áreas de risco e se
        preparar para possíveis evacuações ou proteção de cultivos.
      </p>
    </div>
  );
};

export default AlertComponent;
