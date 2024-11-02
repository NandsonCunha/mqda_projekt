import axios from "axios"; // Importa a biblioteca axios para realizar requisições HTTP
import qs from "qs"; // Importa a biblioteca qs para manipulação de strings de consulta (query strings)

// Função assíncrona para criar uma sala com os parâmetros fornecidos
export async function CreateRoom(
     id,
     name,
     description,
     block,
     level,
     campus,
     latitude,
     longitude,
     url
) {
    // Prepara os dados a serem enviados na requisição, formatando-os como uma string de consulta
    let data = qs.stringify({
        'id': `sensor_${id}-room:${id}`, // Formata o ID do sensor
        'name': name, // Nome da sala
        'description': description, // Descrição da sala
        'block': block, // Bloco onde a sala está localizada
        'level': level, // Nível do campus onde a sala está
        'campus': campus, // Nome do campus
        'latitude': latitude, // Latitude da sala
        'longitude': longitude // Longitude da sala
    });    

    // Configurações da requisição HTTP
    let config = {
        method: 'post', // Método da requisição
        maxBodyLength: Infinity, // Define um limite máximo para o corpo da requisição
        url: url, // URL para a qual a requisição será enviada
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded' // Define o tipo de conteúdo da requisição
        },
        data: data // Dados a serem enviados na requisição
    };
    
    // Realiza a requisição e retorna a resposta processada
    return await axios.request(config)
        .then((response) => {
            return JSON.stringify(response.data); // Retorna os dados da resposta em formato JSON
        })
        .catch((error) => {
            throw error; // Lança um erro se a requisição falhar
        });
}
