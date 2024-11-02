// Coordenadas de latitude e longitude de dois pontos geográficos
const lat1 = -5.334373; // Latitude do primeiro ponto
const lon1 = -49.0886399; // Longitude do primeiro ponto
const lat2 = -5.334071; // Latitude do segundo ponto
const lon2 = -49.088110; // Longitude do segundo ponto

// Função para calcular a distância entre dois pontos geográficos usando a fórmula Haversine
export function distaceCalculator(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio médio da Terra em quilômetros
    const dLat = (lat2 - lat1) * Math.PI / 180; // Diferença de latitude convertida para radianos
    const dLon = (lon2 - lon1) * Math.PI / 180; // Diferença de longitude convertida para radianos

    // Fórmula Haversine para calcular a distância entre dois pontos na superfície de uma esfera
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = (R * c) * 1000; // Calcula a distância em metros

    // Retorna a distância calculada em metros, com duas casas decimais
    return distance.toFixed(2);
}
