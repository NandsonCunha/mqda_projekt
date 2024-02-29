import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Input from '../components/input';

const TelaCadastro = () => {
  const handleSalvar = () => {
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Sensor</Text>
      
      <Input><Text>Nome de entidade:</Text></Input>
      <Input><Text>Tipo:</Text></Input>
      <Input><Text>Objeto</Text></Input>
      <Input><Text>Nome atributo:</Text></Input>
      <Input><Text>Latitude:</Text></Input>
      <Input><Text>Longitude:</Text></Input>
      <Button style={styles.buttn} color={'#0FA958'} title="Próximo" onPress={handleSalvar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 61,backgroundColor: '#F0FFF8'
    
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24
  },
  buttn:{
    height: 40,
  }
});

export default TelaCadastro;
