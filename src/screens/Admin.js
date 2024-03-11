// Em Admin.js

import React from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import Input from '../components/input';
import {useFonts,Barlow_500Medium,Barlow_600SemiBold,Barlow_700Bold} from '@expo-google-fonts/barlow'
import { SafeAreaView } from 'react-native-safe-area-context';

export function Admin ({navigation}) {
    let [fontsLoaded] = useFonts({Barlow_500Medium,Barlow_600SemiBold,Barlow_700Bold})

    if(!fontsLoaded){
      return null
    }
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <Text style={styles.titulo}>ADMINISTRADOR</Text>
            <Input><Text style={styles.text}>Email:</Text></Input>
            <Input><Text style={styles.text}>Senha:</Text></Input>
        </ScrollView>
        <Button style={styles.buttn} color={'#0FA958'} title="Sou Administrador" onPress={()=>{navigation.navigate('Location')}} />

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
      }
});
