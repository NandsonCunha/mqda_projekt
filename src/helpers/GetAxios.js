import axios from "axios";

// Função assíncrona para realizar uma requisição GET usando axios
export async function methodGet(url) {
    // Configuração para a requisição GET
    let config = {
        method: 'get', // Define o método HTTP como GET
        maxBodyLength: Infinity, // Permite que o corpo da resposta tenha qualquer tamanho
        url: `${url}`, // URL para a requisição, passada como parâmetro
        withCredentials: true, // Inclui cookies e credenciais na requisição
        headers: {} // Objeto de cabeçalhos, pode ser personalizado conforme necessário
    };

    // Executa a requisição com axios e trata a resposta ou possíveis erros
    return await axios.request(config)
        .then((response) => {
            return response.data; // Retorna os dados da resposta se a requisição for bem-sucedida
        })
        .catch((error) => {
            throw error; // Lança um erro se a requisição falhar
        });
}
