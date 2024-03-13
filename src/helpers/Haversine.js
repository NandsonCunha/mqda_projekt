const lat1 = -5.334373;
const lon1 = -49.0886399; 
const lat2 = -5.334071; 
const lon2 = -49.088110; 

export function distaceCalculator(lat1,lon1,lat2,lon2){
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180; 
    const dLon = (lon2 - lon1) * Math.PI / 180; 
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    
    console.log('Distância entre o usuário e a localidade:', distance.toFixed(2), 'quilômetros');
    return distance
}

//aa