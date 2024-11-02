import axios from "axios";
import qs from "qs"

export async function CreatePoluentsForSensor(id,url) {
    

// dados de gases dos sensroes que serão criados passando o id
const sensorData = [
  {
    device_id: `CO_MQ7_${id}`,
    entity_name: `CO_MQ7:${id}`,
    entity_type: `Sensor`,
    object_id: `CO_MQ7_Level`,
    nameAtribute: `CO_MQ7_Level`,
    typeAtribute: `Number`,
    foreignkeyNameRef: `refRoom`,
    foreignkeyValueRef: `sensor_${id}-room:${id}`
  },
  {
    device_id: `LPG_MQ9_${id}`,
    entity_name: `LPG_MQ9:${id}`,
    entity_type: `Sensor`,
    object_id: `LPG_MQ9_Level`,
    nameAtribute: `LPG_MQ9_Level`,
    typeAtribute: `Number`,
    foreignkeyNameRef: `refRoom`,
    foreignkeyValueRef: `sensor_${id}-room:${id}`
  },
  {
    device_id: `CH4_MQ9_${id}`,
    entity_name: `CH4_MQ9:${id}`,
    entity_type: `Sensor`,
    object_id: `CH4_MQ9_Level`,
    nameAtribute: `CH4_MQ9_Level`,
    typeAtribute: `Number`,
    foreignkeyNameRef: `refRoom`,
    foreignkeyValueRef: `sensor_${id}-room:${id}`
  },
  {
    device_id: `CO_MQ9_${id}`,
    entity_name: `CO_MQ9:${id}`,
    entity_type: `Sensor`,
    object_id: `CO_MQ9_Level`,
    nameAtribute: `CO_MQ9_Level`,
    typeAtribute: `Number`,
    foreignkeyNameRef: `refRoom`,
    foreignkeyValueRef: `sensor_${id}-room:${id}`
  },
  {
    device_id: `CO_MQ135_${id}`,
    entity_name: `CO_MQ135:${id}`,
    entity_type: `Sensor`,
    object_id: `CO_MQ135_Level`,
    nameAtribute: `CO_MQ135_Level`,
    typeAtribute: `Number`,
    foreignkeyNameRef: `refRoom`,
    foreignkeyValueRef: `sensor_${id}-room:${id}`
  },
  {
    device_id: `Alcool_MQ135_${id}`,
    entity_name: `Alcool_MQ135:${id}`,
    entity_type: `Sensor`,
    object_id: `Alcool_MQ135_Level`,
    nameAtribute: `Alcool_MQ135_Level`,
    typeAtribute: `Number`,
    foreignkeyNameRef: `refRoom`,
    foreignkeyValueRef: `sensor_${id}-room:${id}`
  },
  {
    device_id: `CO2_MQ135_${id}`,
    entity_name: `CO2_MQ135:${id}`,
    entity_type: `Sensor`,
    object_id: `CO2_MQ135_Level`,
    nameAtribute: `CO2_MQ135_Level`,
    typeAtribute: `Number`,
    foreignkeyNameRef: `refRoom`,
    foreignkeyValueRef: `sensor_${id}-room:${id}`
  },
  {
    device_id: `Toluen_MQ135_${id}`,
    entity_name: `Toluen_MQ135:${id}`,
    entity_type: `Sensor`,
    object_id: `Toluen_MQ135_Level`,
    nameAtribute: `Toluen_MQ135_Level`,
    typeAtribute: `Number`,
    foreignkeyNameRef: `refRoom`,
    foreignkeyValueRef: `sensor_${id}-room:${id}`
  },
  {
    device_id: `MH4_MQ135_${id}`,
    entity_name: `MH4_MQ135:${id}`,
    entity_type: `Sensor`,
    object_id: `MH4_MQ135_Level`,
    nameAtribute: `MH4_MQ135_Level`,
    typeAtribute: `Number`,
    foreignkeyNameRef: `refRoom`,
    foreignkeyValueRef: `sensor_${id}-room:${id}`
  },
  {
    device_id: `Aceton_MQ135_${id}`,
    entity_name: `Aceton_MQ135:${id}`,
    entity_type: `Sensor`,
    object_id: `Aceton_MQ135_Level`,
    nameAtribute: `Aceton_MQ135_Level`,
    typeAtribute: `Number`,
    foreignkeyNameRef: `refRoom`,
    foreignkeyValueRef: `sensor_${id}-room:${id}`
  },
  {
    device_id: `Temperatura_${id}`,
    entity_name: `Temperatura:${id}`,
    entity_type: `Sensor`,
    object_id: `Temperatura_Level`,
    nameAtribute: `Temperatura_Level`,
    typeAtribute: `Number`,
    foreignkeyNameRef: `refRoom`,
    foreignkeyValueRef: `sensor_${id}-room:${id}`
  },
  {
    device_id: `Humidade_${id}`,
    entity_name: `Humidade:${id}`,
    entity_type: `Sensor`,
    object_id: `Humidade_Level`,
    nameAtribute: `Humidade_Level`,
    typeAtribute: `Number`,
    foreignkeyNameRef: `refRoom`,
    foreignkeyValueRef: `sensor_${id}-room:${id}`
  },
  {
    device_id: `O3_MQ131_${id}`,
    entity_name: `O3_MQ131:${id}`,
    entity_type: `Sensor`,
    object_id: `O3_MQ131_Level`,
    nameAtribute: `O3_MQ131_Level`,
    typeAtribute: `Number`,
    foreignkeyNameRef: `refRoom`,
    foreignkeyValueRef: `sensor_${id}-room:${id}`
  }
];

const results = await Promise.all(
  sensorData.map(async (sensor) => {
    //transforma os dados em string
    const data = qs.stringify(sensor);

    try {
      // configuração de requisição
      const response = await axios({
        method: "post",
        maxBodyLength: Infinity,
        url: url, // especificando a url para encaminhar a requisição
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      });

      // Verificando resposta de sucesso ou duplicidade
      const responseMessage = response?.data?.ok?.message;
      if (responseMessage.includes("DUPLICATE_DEVICE_ID")) {
        return {
          device_id: sensor.device_id,
          status: "duplicate",
          message: responseMessage,
        };
      } else {
      // se o sensor não exisitr, ele sera criado no banco
        return {
          device_id: sensor.device_id,
          status: "success",
          message: "Device created successfully",
        };
      }
    } catch (error) {
      // Tratando erro de conexão ou outros erros
      return {
        device_id: sensor.device_id,
        status: "error",
        message: error.message,
      };
    }
  })
);

return results;
}