import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";
import { View } from "react-native";
import { color } from "react-native-elements/dist/helpers";

export default function BoxIQAR({ valueIQAR, status }) {
  return (
    <>
      {valueIQAR !== "" ? (
        <View style={[styles.containerBox, styles.shadowProp]}>
          <Text>IQar:</Text>
          <Text style={styles.iqarValue}>{valueIQAR}</Text>
        </View>
      ) : (
        <View
          style={[
            styles.containerBox,
            status === "Boa"
              ? { borderColor: "#008000", borderWidth: 2, backgroundColor:'#008000' }
              : status === "Moderada"
              ? { borderColor: "#FFFFFF", borderWidth: 2,backgroundColor:'#ECD537' }
              : status === "Ruim"
              ? { borderColor: "#FFA500", borderWidth: 2 ,backgroundColor:'#FFA500'}
              : status === "Muito Ruim"
              ? { borderColor: "#FF0000", borderWidth: 2 , backgroundColor:'#FF0000' }
              : status === "Péssima"
              ? { borderColor: "#993399", borderWidth: 2, backgroundColor:'#993399' }
              : "0",
          ]}
        >
          <Text
            style={[
              status === "Boa"
                ? { color: "#FFFFFF" }
                : status === "Moderada"
                ? { color: "#FFFFFF" }
                : status === "Ruim"
                ? { color: "#FFFFFF" }
                : status === "Muito Ruim"
                ? { color: "#FFFFFF" }
                : status === "Péssima"
                ? { color: "#FFFFFF" }
                : "0",
            ]}
          >
            Status:
          </Text>
          <Text
            style={[
              status === "Boa"
                ? { color: "#FFFFFF", fontSize: 35 }
                : status === "Moderada"
                ? { color: "#FFFFFF", fontSize: 25 }
                : status === "Ruim"
                ? { color: "#FFFFFF", fontSize: 35 }
                : status === "Muito Ruim"
                ? { color: "#FFFFFF", fontSize: 20 }
                : status === "Péssima"
                ? { color: "#FFFFFF", fontSize: 30 }
                : "0",
            ]}
          >
            {status}
          </Text>
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  containerBox: {
    width: "35%",
    height: "55%",
    textAlign: "center",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderRadius: 6.25,
  },
  shadowProp: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  iqarValue: {
    fontSize: 44,
    color: "#5CA784",
  },
});
