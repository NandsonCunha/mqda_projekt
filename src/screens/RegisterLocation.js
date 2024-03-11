import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import Input from '../components/input';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useFonts,Barlow_500Medium,Barlow_600SemiBold,Barlow_700Bold} from '@expo-google-fonts/barlow'

export function RegisterLocation  ({navigation})  {
  const handleProximo = () => {

  };
  let [fontsLoaded] = useFonts({Barlow_500Medium,Barlow_600SemiBold,Barlow_700Bold})

  if(!fontsLoaded){
    return null
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>CADASTRO LOCAL</Text>
      <ScrollView>
        <Input><Text style={styles.text}>ID do Sensor:</Text></Input>
        <Input><Text style={styles.text}>Nome:</Text></Input>
        <Input><Text style={styles.text}>Descrição:</Text></Input>
        <Input><Text style={styles.text}>Bloco:</Text></Input>
        <Input><Text style={styles.text}>Nível:</Text></Input>
        <Input><Text style={styles.text}>Campus:</Text></Input>
      </ScrollView>
      <Button style={styles.buttn} height={70} color={'#0FA958'} title="Próximo" onPress={() => navigation.navigate('Sensor')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 61,
    backgroundColor: '#F0FFF8'
  },
  titulo: {
    fontSize: 25,
    marginBottom: 24,
    fontFamily:'Barlow_700Bold'
  },
  buttn:{
    height: 40,
    fontFamily:'Barlow_700Bold'

  },
  text:{
    fontSize:18,
    fontFamily:'Barlow_600SemiBold'
  }
});
