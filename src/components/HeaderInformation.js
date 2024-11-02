import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native';
import Input from "./input";
import { useFonts, Inter_500Medium, Inter_600SemiBold, Inter_400Regular } from "@expo-google-fonts/inter";
import { Barlow_500Medium, Barlow_600SemiBold, Barlow_700Bold } from '@expo-google-fonts/barlow';

// Componente para exibir o cabeçalho de notificação de qualidade do ar
export default function HeaderNotification({ block, campus, iqarConcept }) {

  // Carregamento de fontes personalizadas com Expo
  let [fontsLoaded] = useFonts({
    Barlow_500Medium, Barlow_600SemiBold, Barlow_700Bold,
    Inter_500Medium, Inter_600SemiBold, Inter_400Regular
  });

  // Retorna nulo se as fontes ainda não foram carregadas
  if (!fontsLoaded) {
    return null;
  }

  // Estrutura de retorno com o título e a mensagem de alerta
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <View>
        <Text style={styles.heading}>
          ATENÇÃO
        </Text>
      </View>
      <Text style={styles.section}>
        O AR ATMOSFÉRICO NO BLOCO {block.toUpperCase()} DO CAMPUS {campus.toUpperCase()}, ESTÁ {iqarConcept.toUpperCase()}!
      </Text>
    </View>
  );
}

// Estilos utilizados no componente
const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    fontFamily: 'Barlow_700Bold' // Usa a fonte Barlow com peso Bold
  },
  section: {
    textAlign: 'center',
    fontFamily: 'Barlow_600SemiBold', // Usa a fonte Barlow com peso SemiBold
    fontSize: 16
  },
  card: {
    backgroundColor: '#ECD537', // Cor de fundo amarelo
    borderBottomEndRadius: 8,
    borderBottomLeftRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    width: '100%',
    textAlign: "center"
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 }, // Configurações de sombra para dar efeito de profundidade
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
