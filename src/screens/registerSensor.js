import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView,TextInput} from 'react-native';
import Input from '../components/input';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useFonts,Barlow_500Medium,Barlow_600SemiBold,Barlow_700Bold} from '@expo-google-fonts/barlow'


const TelaCadastro = ({navigation}) => {
  const [setIdSensor,idSensor] = useState()
  const [setNameEntity,nameEntity] = useState()
  const [type,setType] = useState()
  const [object,setObject] = useState()
  const [setNameAtribute,nameAtribute] = useState()
  const [referenceTable,setReferenceTable] = useState()

  const handleProximo = () => {
    if (!idSensor || !nameEntity || !type || !object || !nameAtribute || !referenceTable) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.')
  }
  else{
    navigation.navigate('Sensor')
  }
  }
  let [fontsLoaded] = useFonts({Barlow_500Medium,Barlow_600SemiBold,Barlow_700Bold})

  if(!fontsLoaded){
    return null
  }

  return (
    <>
     <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>CADASTRO DE SENSOR</Text>
    <ScrollView style={styles.scrolls}>
    <View>
                    <Text style={styles.text}>ID Sensor:</Text>
                    <TextInput
                        style={styles.inputCont}
                        onChangeText={(text) => setIdSensor(text)}
                        value={idSensor}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Nome entidade:</Text>
                    <TextInput
                        style={styles.inputCont}
                        onChangeText={(text) => setNameEntity(text)}
                        value={nameEntity}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Tipo:</Text>
                    <TextInput
                        style={styles.inputCont}
                        onChangeText={(text) => setType(text)}
                        value={type}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Objeto ID:</Text>
                    <TextInput
                        style={styles.inputCont}
                        onChangeText={(text) => setObject(text)}
                        value={object}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Nome Atributo:</Text>
                    <TextInput
                        style={styles.inputCont}
                        onChangeText={(text) => setNameAtribute(text)}
                        value={nameAtribute}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Referencia Tabela:</Text>
                    <TextInput
                        style={styles.inputCont}
                        onChangeText={(text) => setReferenceTable(text)}
                        value={referenceTable}
                    />
                </View>
                <View>
                </View>
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
    fontFamily:'Barlow_600SemiBold',
    color: '#0FA958',
    marginBottom:8

  },
  inputCont: {
    width: '100%',
    backgroundColor: "#E5E5E5",
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 0,
    padding: 10,
    marginBottom: 10,
    borderRadius:6.25
},
});

export default TelaCadastro;
