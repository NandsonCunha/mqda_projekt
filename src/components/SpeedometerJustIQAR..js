import { StyleSheet, Text, View } from "react-native";
import React, { Component } from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import RNSpeedometer from 'react-native-speedometer';

// Componente para exibir um medidor de qualidade do ar (IQAR) baseado no valor do gás
export function SpeedometerJustIqar({ nameGas, iqarGas }) {

  return (
    <RNSpeedometer
      // Define o valor a ser mostrado no medidor; usa 0 se o valor do IQAR não for válido
      value={iqarGas === '' || iqarGas === undefined ? 0 : iqarGas}
      size={150} // Define o tamanho do medidor
      minValue={0} // Valor mínimo no medidor
      maxValue={400} // Valor máximo no medidor

      // Configurações de rótulos para diferentes níveis de qualidade do ar
      labels={[
        {
          name: `Boa - ${nameGas}`, // Nível "Boa" para o gás específico
          labelColor: '#008000', // Cor do texto do rótulo
          activeBarColor: '#008000', // Cor da barra ativa para este nível
        },
        {
          name: `Moderada - ${nameGas}`,
          labelColor: '#ffdd59',
          activeBarColor: '#FFFF00',
        },
        {
          name: `Ruim - ${nameGas}`,
          labelColor: '#FFA500',
          activeBarColor: '#FFA500',
        },
        {
          name: `Muito Ruim - ${nameGas}`,
          labelColor: '#FF0000',
          activeBarColor: '#FF0000',
        },
        {
          name: `Péssima - ${nameGas}`,
          labelColor: '#993399',
          activeBarColor: '#993399',
        },
      ]}

      // Estilo do círculo interno do medidor
      innerCircleStyle={{
        backgroundColor: '#F0FFF8' // Define a cor de fundo do círculo interno
      }}
    />
  );
}
