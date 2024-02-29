import React, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Input from '../components/input';

const RegisterLocation = () => {
  const handleProximo = () => {

  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro do Localr</Text>
      
      <Input><Text>ID do Sensor:</Text></Input>
      <Input><Text>Nome:</Text></Input>
      <Input><Text>Descrição:</Text></Input>
      <Input><Text>Bloco:</Text></Input>
      <Input><Text>Nível:</Text></Input>
      <Input><Text>Campus:</Text></Input>
      <Button style={styles.buttn} height={40} color={'#0FA958'} title="Próximo" onPress={handleProximo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 61,
    backgroundColor: '#F0FFF8'
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

export default RegisterLocation;
