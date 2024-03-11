import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView} from 'react-native';
import Input from '../components/input';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useFonts,Barlow_500Medium,Barlow_600SemiBold,Barlow_700Bold} from '@expo-google-fonts/barlow'


const TelaCadastro = ({navigation}) => {

  const handleSalvar = () => {
  };
  let [fontsLoaded] = useFonts({Barlow_500Medium,Barlow_600SemiBold,Barlow_700Bold})

  if(!fontsLoaded){
    return null
  }

  return (
    <>
     <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>CADASTRO DE SENSOR</Text>
    <ScrollView style={styles.scrolls}>
      <Input><Text style={styles.text}>ID:</Text></Input>
      <Input><Text style={styles.text}>Nome de entidade:</Text></Input>
      <Input><Text style={styles.text}>Tipo:</Text></Input>
      <Input><Text style={styles.text}>Objeto</Text></Input>
      <Input><Text style={styles.text}>Nome atributo:</Text></Input>
      <Input><Text style={styles.text}>Tipo Atributo:</Text></Input>
      <Input><Text style={styles.text}>Latitude:</Text></Input>
      <Input><Text style={styles.text}>Longitude:</Text></Input>
      <Input><Text style={styles.text}>Referencia ID:</Text></Input>
    </ScrollView>
    <Button style={[styles.buttn,styles.textButton]} color={'#0FA958'} title="Criar" onPress={() => navigation.navigate('Home')} />

    </SafeAreaView>
    </>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 61,backgroundColor: '#F0FFF8',
    width:'100%'  
  },
  titulo: {
    fontSize: 25,
    marginBottom: 20,
    fontFamily:"Barlow_700Bold"
  },
  buttn:{
    height: 40,
    marginTop:20
  },
  scrolls:{
    marginBottom:50
  },
  textButton:{
    fontFamily:"Barlow_700Bold",
    fontSize:25
  },
  text:{
    fontSize:18,
    fontFamily:'Barlow_600SemiBold'
  }
});

export default TelaCadastro;
