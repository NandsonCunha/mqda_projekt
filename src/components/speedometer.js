import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, TextInput} from 'react-native';
import RNSpeedometer from 'react-native-speedometer'

export default function SpeedDometer ({nameGas,value}) {
   return <RNSpeedometer 
    value={value} 
    size={150}
    minValue={0}
    maxValue={200}
    
    labels={[
        {
          name: `${nameGas}`,
          labelColor: '#FFA500',
          activeBarColor: '#D9D9D9',
        },
        
    ]}
    innerCircleStyle={
      {backgroundColor: '#F0FFF8'}
    }
    />
}
