import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";
import { View } from "react-native";
import { color } from "react-native-elements/dist/helpers";

// Componente que exibe o valor de IQAR e o status baseado em condições específicas
export default function BoxIQAR({ valueIQAR, status }) {
  return (
    <>
      {valueIQAR !== "" ? ( // Verifica se há um valor de IQAR
        <View style={[styles.containerBox, styles.shadowProp]}>
          <Text>IQar:</Text>
          <Text
            style={[
              // Define a cor do texto com base nos intervalos do valor de IQAR
              valueIQAR >= 0 && valueIQAR <= 40
                ? { color: "#008000" } // Verde para bons níveis de IQAR
                : valueIQAR > 40 && valueIQAR <= 80
                ? { color: "#ECD537" } // Amarelo para níveis moderados
                : valueIQAR > 80 && valueIQAR <= 120
                ? { color: "#FFA500" } // Laranja para níveis ruins
                : valueIQAR > 120 && valueIQAR <= 200
                ? { color: "#FF0000" } // Vermelho para níveis muito ruins
                : valueIQAR > 200 && valueIQAR <= 400
                ? { color: "#993399" } // Roxo para níveis péssimos
                : "0",
              styles.iqarValue,
            ]}
          >
            {valueIQAR}
          </Text>
        </View>
      ) : (
        // Quando não há um valor de IQAR, mostra o status geral
        <View
          style={[
            styles.containerBox,
            // Define as cores de fundo e borda com base no status recebido
            status === "Boa"
              ? { borderColor: "#008000", borderWidth: 2, backgroundColor: "#008000" }
              : status === "Moderada"
              ? { borderColor: "#FFFFFF", borderWidth: 2, backgroundColor: "#ECD537" }
              : status === "Ruim"
              ? { borderColor: "#FFA500", borderWidth: 2, backgroundColor: "#FFA500" }
              : status === "Muito Ruim"
              ? { borderColor: "#FF0000", borderWidth: 2, backgroundColor: "#FF0000" }
              : status === "Péssima"
              ? { borderColor: "#993399", borderWidth: 2, backgroundColor: "#993399" }
              : "0",
          ]}
        >
          <Text
            style={[
              // Define a cor do texto para cada status específico
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
              // Ajusta o estilo do texto com base no status
              valueIQAR === "Boa"
                ? { color: "#FFFFFF", fontSize: 35 }
                : status === "Moderada"
                ? { color: "#FFFFFF", fontSize: 25 }
                : status === "Ruim"
                ? { color: "#FFFFFF", fontSize: 35 }
                : status === "Muito Ruim"
                ? { color: "#FFFFFF", fontSize: 20 }
                : status === "Péssima"
                ? { color: "#FFFFFF", fontSize: 30 }
                : "0", { fontSize: 30, color: 'white' }
            ]}
          >
            {status}
          </Text>
        </View>
      )}
    </>
  );
}

// Estilos utilizados no componente
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
  },
});
