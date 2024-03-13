import axios from "axios";

export async function methodGet(url){
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${url}`,
        withCredentials: true,
        headers: { },

        
      };
    return await axios.request(config)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw error
      });
}

