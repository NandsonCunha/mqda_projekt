import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, TextInput} from 'react-native';
import RNSpeedometer from 'react-native-speedometer'


export default function Home(){

    return(
        <SafeAreaView style={styles.container}>
          <RNSpeedometer 
          value={10} 
          size={200}
          minValue={0}
          maxValue={200}
          labels={[
            {
                name: 'Boa',
                labelColor: '#008000',
                activeBarColor: '#008000',
              },
              {
                name: 'Moderada',
                labelColor: '#FFFF00',
                activeBarColor: '#FFFF00',
              },
              {
                name: 'Ruim',
                labelColor: '#FFA500',
                activeBarColor: '#FFA500',
              },
              {
                name: 'Muito Ruim',
                labelColor: '#FF0000',
                activeBarColor: '#FF0000',
              },
              {
                name: 'Pessima',
                labelColor: '#993399',
                activeBarColor: '#993399',
              },
          ]}
          innerCircleStyle={
            {backgroundColor: '#F0FFF8'}
          }
          />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0FFF8'
    },
  });