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
import Input from "../components/input";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Barlow_500Medium,
  Barlow_600SemiBold,
  Barlow_700Bold,
} from "@expo-google-fonts/barlow";
import { CreateRoom } from "../helpers/PostCreateRoomAxios";

export function RegisterLocation({ navigation }) {
  const [idLocal, setIdLocal] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [block, setBlock] = useState("");
  const [level, setLevel] = useState("");
  const [campus, setCampus] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  let ip = "192.168.1.6:4000";

  const handleProximo = async () => {
    if (
      !idLocal ||
      !name ||
      !description ||
      !block ||
      !level ||
      !campus ||
      !lat ||
      !long
    ) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
    } else {
      const createRoom = await CreateRoom(
        idLocal,
        name,
        description,
        block,
        level,
        campus,
        lat,
        long,
        `http://${ip}/create-room`
      )
        .then((response) => {
          if (JSON.parse(response).ibm !== "Documento já existe") {
            Alert.alert("Aviso", JSON.parse(response).ibm);
            setIdLocal("");
            setName("");
            setDescription("");
            setBlock("");
            setLevel("");
            setCampus("");
            setLat("");
            setLong("");
            navigation.navigate("Sensor");
          }
          if (JSON.parse(response).ibm === "Documento já existe") {
            Alert.alert("Aviso", JSON.parse(response).ibm);
          }
          return response;
        })
        .catch((error) => console.log(Object.values(error)));
    }
  };
  let [fontsLoaded] = useFonts({
    Barlow_500Medium,
    Barlow_600SemiBold,
    Barlow_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>CADASTRO LOCAL</Text>
      <ScrollView>
        <View>
          <Text style={styles.text}>ID Local:</Text>
          <TextInput
            style={styles.inputCont}
            onChangeText={(text) => setIdLocal(text)}
            value={idLocal}
            placeholder="Ex:001"
          />
        </View>
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
            placeholder="Ex:Laboratorio destinado de execução em  pratica para disciplinas de engenharia"
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
    borderRadius: 0,
    padding: 10,
    marginBottom: 10,
    borderRadius: 6.25,
  },
});
