import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
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
import { CreatePoluentsForSensor } from "../helpers/PostCreateSensors";

const TelaCadastro = ({ navigation }) => {
  const [idSensor, setIdSensor] = useState("");
  let ip = "192.168.1.6:4000";
  const handleProximo = async () => {
    if (!idSensor) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
    } else {
      try {
        // Chama a função de criação de sensores e recebe o status geral
        const createSensors = await CreatePoluentsForSensor(
          idSensor,
          `http://${ip}/create-sensors`
        );

        // Verifica se todos os sensores foram criados com sucesso
        if (createSensors.every((sensor) => sensor.status === "success")) {
          Alert.alert(
            "Sucesso",
            "Todos os sensores foram criados com sucesso!"
          );
          setIdSensor("");
          navigation.navigate("Home");
        } else if (
          createSensors.some((sensor) => sensor.status === "duplicate")
        ) {
          Alert.alert("Aviso", "Este sensor ja existe");
        } else {
          Alert.alert("Erro", "Houve um erro ao criar alguns sensores.");
        }
      } catch (error) {
        console.error("Erro na criação dos sensores:", error);
        Alert.alert("Erro", "Ocorreu um erro ao criar os sensores.");
      }
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
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>CADASTRO DE SENSOR</Text>
        <ScrollView style={styles.scrolls}>
          <View>
            <Text style={styles.text}>ID Sensor:</Text>
            <TextInput
              style={styles.inputCont}
              onChangeText={(text) => setIdSensor(text)}
              value={idSensor}
            />
          </View>
          <View></View>
        </ScrollView>
        <Button
          style={[styles.buttn, styles.textButton]}
          color={"#0FA958"}
          title="Criar"
          onPress={handleProximo}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 61,
    backgroundColor: "#F0FFF8",
    width: "100%",
  },
  titulo: {
    fontSize: 25,
    marginBottom: 20,
    fontFamily: "Barlow_700Bold",
  },
  buttn: {
    height: 40,
    marginTop: 20,
  },
  scrolls: {
    marginBottom: 50,
  },
  textButton: {
    fontFamily: "Barlow_700Bold",
    fontSize: 25,
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

export default TelaCadastro;
