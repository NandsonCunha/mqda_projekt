import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView,TextInput,Alert} from 'react-native';
import Input from '../components/input';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useFonts,Barlow_500Medium,Barlow_600SemiBold,Barlow_700Bold} from '@expo-google-fonts/barlow'

export function RegisterLocation  ({navigation})  {
  const [idLocal,setIdLocal] = useState()
  const [name,setName] = useState()
  const [description,setDescription] = useState()
  const [block,setBlock] = useState()
  const [level,setLevel] = useState()
  const [campus,setCampus] = useState()
  const [lat,setLat] = useState()
  const [long,setLong] = useState()
  const handleProximo = () => {
    if (!idLocal || !name || !description || !block || !level || !campus || !lat || !long) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.')
  }
  else{
    navigation.navigate('Sensor')
  }
  };
  let [fontsLoaded] = useFonts({Barlow_500Medium,Barlow_600SemiBold,Barlow_700Bold})

  if(!fontsLoaded){
    return null
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>CADASTRO LOCAL</Text>
      <ScrollView>
      <View>
                    <Text style={styles.text}>ID Local:</Text>
                    <TextInput
                        style={styles.inputCont}
                        onChangeText={(text) => setIdLocal(text)}
                        value={idLocal}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Nome:</Text>
                    <TextInput
                        style={styles.inputCont}
                        onChangeText={(text) => setName(text)}
                        value={name}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Descrição:</Text>
                    <TextInput
                        style={styles.inputCont}
                        onChangeText={(text) => setDescription(text)}
                        value={description}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Bloco:</Text>
                    <TextInput
                        style={styles.inputCont}
                        onChangeText={(text) => setBlock(text)}
                        value={block}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Nível:</Text>
                    <TextInput
                        style={styles.inputCont}
                        onChangeText={(text) => setLevel(text)}
                        value={level}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Campus:</Text>
                    <TextInput
                        style={styles.inputCont}
                        onChangeText={(text) => setCampus(text)}
                        value={campus}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Latitude</Text>
                    <TextInput
                        style={styles.inputCont}
                        onChangeText={(text) => setLat(text)}
                        value={lat}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Longitude</Text>
                    <TextInput
                        style={styles.inputCont}
                        onChangeText={(text) => setLong(text)}
                        value={long}
                    />
                </View>
      </ScrollView>
      <Button style={styles.buttn} height={70} color={'#0FA958'} title="Próximo" onPress={handleProximo} />
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
