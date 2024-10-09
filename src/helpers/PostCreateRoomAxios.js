import axios from "axios";
import qs from "qs"

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
    let data = qs.stringify({
        'id': `sensor_${id}-room:${id}`,
        'name': name,
        'description': description,
        'block': block,
        'level': level,
        'campus': campus,
        'latitude': latitude,
        'longitude': longitude
      });    

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: url,
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };
      
  return  await  axios.request(config)
      .then((response) => {
        return JSON.stringify(response.data)
      })
      .catch((error) => {
        throw error
      });
}





