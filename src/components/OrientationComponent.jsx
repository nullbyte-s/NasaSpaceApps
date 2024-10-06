import React, { useState } from "react";

const OrientationComponent = () => {
  // Definindo os estados de visibilidade para cada seção
  const [showFirePrevention, setShowFirePrevention] = useState(false);
  const [showFloodPrevention, setShowFloodPrevention] = useState(false);

  // Funções para alternar a visibilidade das seções
  const toggleFirePrevention = () => {
    setShowFirePrevention(!showFirePrevention);
  };

  const toggleFloodPrevention = () => {
    setShowFloodPrevention(!showFloodPrevention);
  };

  return (
    <div>
      {/* Toggler para Prevenção de Queimadas */}
      <div>
        <h2 onClick={toggleFirePrevention} style={{ cursor: "pointer" }}>
          1. Guia Rápido: Prevenção de Queimadas e Irrigação
        </h2>
        {showFirePrevention && (
          <div>
            <h3>1. Riscos das Queimadas</h3>
            <p>
              Durante períodos de seca e altas temperaturas, o risco de
              queimadas aumenta. Fatores como baixa umidade, ventos fortes e
              vegetação seca podem acelerar a propagação do fogo.
            </p>
            <h3>2. Prevenção de Queimadas</h3>
            <ul>
              <li>Monitore o clima: Fique atento a previsões de seca.</li>
              <li>
                Evite o uso de fogo: Não queime resíduos vegetais em períodos de
                risco.
              </li>
              <li>
                Mantenha aceiros: Crie faixas de terra sem vegetação para evitar
                a propagação do fogo.
              </li>
              <li>
                Limpeza: Remova folhas e materiais inflamáveis das áreas
                próximas.
              </li>
              <li>
                Treinamento: Instrua sua equipe sobre os riscos e como agir em
                caso de incêndio.
              </li>
            </ul>
            <h3>3. Reforço da Irrigação</h3>
            <ul>
              <li>
                Irrigue nos horários adequados: Priorize a manhã e o final da
                tarde.
              </li>
              <li>
                Monitore a umidade: Use sensores para verificar se o solo está
                recebendo água suficiente.
              </li>
              <li>
                Use sistemas eficientes: Prefira irrigação por gotejamento para
                evitar desperdício.
              </li>
            </ul>
            <h3>4. Ação Rápida em Caso de Queimadas</h3>
            <ul>
              <li>Chame os bombeiros: Ligue imediatamente para o 193.</li>
              <li>
                Evacue se necessário: A segurança das pessoas vem em primeiro
                lugar.
              </li>
              <li>
                Não enfrente incêndios grandes sozinho: Espere ajuda
                especializada.
              </li>
              <strong>Contato Emergencial:</strong>{" "}
              <ul>
                <li>Bombeiros: 193,</li>
                <li>Defesa Civil: 199.</li>
              </ul>
              <p>
                Proteja sua plantação, reforce a irrigação e evite queimadas!
              </p>
            </ul>
          </div>
        )}
      </div>

      {/* Toggler para Prevenção de Danos por Chuvas Intensas e Tempestades */}
      <div>
        <h2 onClick={toggleFloodPrevention} style={{ cursor: "pointer" }}>
          2. Guia Rápido: Prevenção de Danos por Chuvas Intensas e Tempestades
        </h2>
        {showFloodPrevention && (
          <div>
            <h3>1. Riscos de Grandes Volumes de Chuva</h3>
            <p>
              Chuvas intensas podem causar alagamentos, erosão do solo, perda de
              plantio e outros prejuízos. É importante estar preparado para
              minimizar os impactos.
            </p>
            <h3>2. Prevenção de Danos</h3>
            <ul>
              <li>
                Monitore o clima: Fique atento a alertas de chuvas fortes.
              </li>
              <li>
                Verifique a drenagem e sistemas hídricos: Garanta que canais e
                bueiros estejam desobstruídos.
              </li>
              <li>Proteja o solo: Use cobertura vegetal para evitar erosão.</li>
              <li>
                Reforce as barreiras: Mantenha barreiras naturais ou artificiais
                para controlar o escoamento da água.
              </li>
            </ul>
            <h3>3. Ação Rápida em Caso de Chuvas Fortes</h3>
            <ul>
              <li>
                Proteja áreas vulneráveis: Cubra equipamentos e insumos para
                evitar danos.
              </li>
              <li>
                Afaste animais: Movimente o gado e outros animais para áreas
                mais altas e seguras.
              </li>
              <li>Evite trabalho no campo: Proteja-se durante tempestades.</li>
            </ul>
            <h3>4. Ação Rápida em Caso de Chuvas Fortes</h3>
            <ul>
              <li>
                Proteja áreas vulneráveis: Cubra equipamentos e insumos para
                evitar danos pela água.
              </li>
              <li>
                Afaste animais: Movimente o gado e outros animais para áreas
                mais altas e seguras.
              </li>
              <li>
                Evite trabalho no campo: Durante tempestades, proteja-se e
                aguarde condições seguras.
              </li>
            </ul>
            <h3>5. Ação Rápida em Caso de Tempestades de Raios</h3>
            <ul>
              <li>
                Afastar os animais: Movimente os animais para áreas cobertas e
                seguras para evitar perdas devido a raios.
              </li>
              <li>
                Desligue equipamentos elétricos: Evite o uso de máquinas e
                aparelhos elétricos durante tempestades.
              </li>
              <li>
                Abrigue-se em locais seguros: Não permaneça em campo aberto ou
                sob árvores, procure abrigo em construções seguras.
              </li>
              <li>
                Evite cercas e arames: Fique longe de cercas de arame, que podem
                conduzir eletricidade durante uma tempestade.
              </li>
              <li>
                Desconecte máquinas de irrigação: Desligue qualquer equipamento
                externo que possa ser afetado por raios.
              </li>
              <strong>Contato Emergencial:</strong>
              <ul>
                <li>Bombeiros: 193,</li>
                <li>Defesa Civil: 199.</li>
              </ul>
              <p>
                Esteja preparado para as chuvas e tempestades, proteja sua
                fazenda e evite prejuízos!
              </p>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrientationComponent;
