import { StyleSheet, Text, View } from "react-native";
import React, { Component } from 'react';
import { SafeAreaView, TextInput} from 'react-native';
import RNSpeedometer from 'react-native-speedometer'


export  function SpeedometerJustHeatIndex({heatIndex}){ 

    return(
          <RNSpeedometer 
          value={heatIndex === '' || heatIndex === undefined ? 0 : heatIndex} 
          size={150}
          minValue={0}
          maxValue={56}
          labels={[
            {
                name: `Calor - Cuidado`,
                labelColor: '#008000',
                activeBarColor: '#008000',
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
          innerCircleStyle={
            {backgroundColor: '#F0FFF8'}
          }
          />
    )
}
