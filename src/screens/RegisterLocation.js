import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Barlow_500Medium, Barlow_600SemiBold, Barlow_700Bold } from "@expo-google-fonts/barlow";
import { CreateRoom } from "../helpers/PostCreateRoomAxios";

export function RegisterLocation({ navigation }) {
  // Estados para capturar os dados do formulário
  const [idLocal, setIdLocal] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [block, setBlock] = useState("");
  const [level, setLevel] = useState("");
  const [campus, setCampus] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  
  // IP do servidor para criação da sala
  let ip = "10.204.21.135:4000";

  // Função que envia os dados do formulário e lida com a resposta
  const handleProximo = async () => {
    if (!idLocal || !name || !description || !block || !level || !campus || !lat || !long) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
    } else {
      const createRoom = await CreateRoom(
        idLocal, name, description, block, level, campus, lat, long,
        `http://${ip}/create-room`
      )
      .then((response) => {
        const parsedResponse = JSON.parse(response);
        
        // Checa se o documento já existe
        if (parsedResponse.ibm !== "Documento já existe") {
          Alert.alert("Aviso", parsedResponse.ibm);
          
          // Limpa o formulário e navega para a tela do sensor
          setIdLocal(""); setName(""); setDescription(""); setBlock("");
          setLevel(""); setCampus(""); setLat(""); setLong("");
          navigation.navigate("Sensor");
        } else {
          Alert.alert("Aviso", parsedResponse.ibm);
        }
        return response;
      })
      .catch((error) => console.log(Object.values(error)));
    }
  };

  // Carrega fontes personalizadas
  let [fontsLoaded] = useFonts({
    Barlow_500Medium, Barlow_600SemiBold, Barlow_700Bold,
  });

  // Retorna nulo enquanto as fontes estão sendo carregadas
  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.titulo}>CADASTRO LOCAL</Text>
      
      {/* Formulário para capturar dados de cadastro */}
      <ScrollView>
        {/* Input para ID do local */}
        <View>
          <Text style={styles.text}>ID Local:</Text>
          <TextInput
            style={styles.inputCont}
            onChangeText={(text) => setIdLocal(text)}
            value={idLocal}
            placeholder="Ex:001"
          />
        </View>
        
        {/* Repetição de blocos de inputs para outros dados */}
        <View>
          <Text style={styles.text}>Nome:</Text>
          <TextInput
            style={styles.inputCont}
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder="Ex:Lab transporte"
          />
        </View>
        
        <View>
          <Text style={styles.text}>Descrição:</Text>
          <TextInput
            style={styles.inputCont}
            onChangeText={(text) => setDescription(text)}
            value={description}
            placeholder="Ex:Laboratório para prática de disciplinas de engenharia"
          />
        </View>
        
        <View>
          <Text style={styles.text}>Bloco:</Text>
          <TextInput
            style={styles.inputCont}
            onChangeText={(text) => setBlock(text)}
            value={block}
            placeholder="Ex:4"
          />
        </View>
        
        <View>
          <Text style={styles.text}>Nível:</Text>
          <TextInput
            style={styles.inputCont}
            onChangeText={(text) => setLevel(text)}
            value={level}
            placeholder="Ex:1"
          />
        </View>
        
        <View>
          <Text style={styles.text}>Campus:</Text>
          <TextInput
            style={styles.inputCont}
            onChangeText={(text) => setCampus(text)}
            value={campus}
            placeholder="Ex:2"
          />
        </View>
        
        <View>
          <Text style={styles.text}>Latitude</Text>
          <TextInput
            style={styles.inputCont}
            onChangeText={(text) => setLat(text)}
            value={lat}
            placeholder="Ex:-5.334071"
          />
        </View>
        
        <View>
          <Text style={styles.text}>Longitude</Text>
          <TextInput
            style={styles.inputCont}
            onChangeText={(text) => setLong(text)}
            value={long}
            placeholder="Ex:-49.088110"
          />
        </View>
      </ScrollView>
      
      {/* Botão para submeter o formulário */}
      <Button
        style={styles.buttn}
        height={70}
        color={"#0FA958"}
        title="Próximo"
        onPress={handleProximo}
      />
    </SafeAreaView>
  );
}

// Estilos para a tela e seus elementos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 61,
    backgroundColor: "#F0FFF8",
  },
  titulo: {
    fontSize: 25,
    marginBottom: 24,
    fontFamily: "Barlow_700Bold",
  },
  buttn: {
    height: 40,
    fontFamily: "Barlow_700Bold",
  },
  text: {
    fontSize: 18,
    fontFamily: "Barlow_600SemiBold",
    color: "#0FA958",
    marginBottom: 8,
  },
  inputCont: {
    width: "100%",
    backgroundColor: "#E5E5E5",
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    padding: 10,
    marginBottom: 10,
    borderRadius: 6.25,
  },
});
