import { StyleSheet, Text, View } from "react-native";
import React, { Component } from 'react';
import { SafeAreaView, TextInput} from 'react-native';
import RNSpeedometer from 'react-native-speedometer'


export  function SpeedometerJustIqar({nameGas,iqarGas}){ 

    return(
          <RNSpeedometer 
          value={iqarGas === '' || iqarGas === undefined ? 0 : iqarGas} 
          size={150}
          minValue={0}
          maxValue={400}
          labels={[
            {
                name: `Boa - ${nameGas}`,
                labelColor: '#008000',
                activeBarColor: '#008000',
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
          innerCircleStyle={
            {backgroundColor: '#F0FFF8'}
          }
          />
    )
}
