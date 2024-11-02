import { StyleSheet, Text, View } from "react-native";
import React, { Component } from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import RNSpeedometer from 'react-native-speedometer';

// Componente para exibir um medidor de calor baseado no índice de calor
export function SpeedometerJustHeatIndex({ heatIndex }) {

  return (
    <RNSpeedometer
      // Define o valor a ser mostrado no medidor; usa 0 se não houver um índice de calor válido
      value={heatIndex === '' || heatIndex === undefined ? 0 : heatIndex}
      size={150} // Define o tamanho do medidor
      minValue={0} // Valor mínimo no medidor
      maxValue={56} // Valor máximo no medidor

      // Configurações de rótulos com diferentes níveis de alerta de calor
      labels={[
        {
          name: `Calor - Cuidado`, // Nome do nível de calor
          labelColor: '#008000', // Cor do texto do rótulo
          activeBarColor: '#008000', // Cor da barra ativa para este nível
        },
        {
          name: `Calor - Cuidado extremo`,
          labelColor: '#ffdd59',
          activeBarColor: '#FFFF00',
        },
        {
          name: `Calor - Perigo`,
          labelColor: '#FFA500',
          activeBarColor: '#FFA500',
        },
        {
          name: `Calor - Perigo extremo`,
          labelColor: '#FF0000',
          activeBarColor: '#FF0000',
        },
      ]}

      // Estilo do círculo interno do medidor
      innerCircleStyle={{
        backgroundColor: '#F0FFF8' // Define a cor de fundo do círculo interno
      }}
    />
  );
}
