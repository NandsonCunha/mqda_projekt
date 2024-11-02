import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import RNSpeedometer from 'react-native-speedometer';

// Componente para exibir um medidor de velocidade visual para o valor de um gás
export default function SpeedDometer({ nameGas, value }) {
  return (
    <RNSpeedometer
      value={value} // Define o valor atual a ser mostrado no medidor
      size={150} // Define o tamanho do medidor
      minValue={0} // Valor mínimo no medidor
      maxValue={200} // Valor máximo no medidor
      
      labels={[
        {
          name: `${nameGas}`, // Nome do gás exibido no medidor
          labelColor: '#FFA500', // Cor do rótulo do medidor
          activeBarColor: '#D9D9D9', // Cor da barra ativa no medidor
        },
      ]}
      
      innerCircleStyle={{
        backgroundColor: '#F0FFF8', // Cor de fundo do círculo interno do medidor
      }}
    />
  );
}
