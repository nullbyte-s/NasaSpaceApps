import { OPENCAGE_API_KEY } from '../utils/constants';

export async function fetchCityCoordinates(cityName) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(cityName)}&key=${OPENCAGE_API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry;
            return [lat, lng];
        } else {
            throw new Error('Cidade não encontrada');
        }
    } catch (error) {
        throw new Error(`Erro ao obter as coordenadas da cidade: ${error.message}`);
    }
}