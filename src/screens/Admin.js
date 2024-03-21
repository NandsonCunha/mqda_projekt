// Em Admin.js

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, Button, TextInput,View, Alert } from 'react-native';
import Input from '../components/input';
import {useFonts,Barlow_500Medium,Barlow_600SemiBold,Barlow_700Bold} from '@expo-google-fonts/barlow'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';

export function Admin ({navigation}) {
    let [fontsLoaded] = useFonts({Barlow_500Medium,Barlow_600SemiBold,Barlow_700Bold})
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const isFocused = useIsFocused()


    useEffect(()=>{
        setEmail('')
        setPassword('')
    },[isFocused])
    if(!fontsLoaded){
        return null
      }
    console.log(email)
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.info}>ADMINISTRADOR:</Text>   
        <ScrollView>
        <View>
                    <Text style={styles.text}>Email</Text>
                    <TextInput
                        style={styles.inputCont}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Senha</Text>
                    <TextInput
                        style={styles.inputCont}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={true}
                    />
                </View>
        </ScrollView>
        <Button style={styles.buttn} color={'#0FA958'} title="Sou Administrador" onPress={()=>{
            if((email !== 'alife.silva@unifesspa.edu.br' && password !== 'bewasor030')){
                Alert.alert('Atenção','Email/Senha Incorretos')
            }
            else{
                navigation.navigate('Location')

            }
            }} />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 61,
        backgroundColor: '#F0FFF8',
        flexDirection:'column',
        justifyContent:'flex-start',
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 24,
        fontFamily:"Barlow_700Bold"

    },
    buttn:{
        height: 40,
        marginTop:20
    },
    text:{
        fontSize:18,
        fontFamily:'Barlow_600SemiBold'
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
    text:{
        color: '#0FA958',
        marginBottom: 8
    },
    info:{
        marginLeft:'0%',
        marginBottom:'5%',
        fontSize:25,
        fontFamily:'Barlow_700Bold'
      }
});
