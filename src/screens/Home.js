import React, { Component,useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput,Text, View, ScrollView} from 'react-native';
import SpeedDometer from '../components/speedometer';
import HeaderNotification from '../components/HeaderInformation';
import BoxIQAR from '../components/BoxIQAR';
import {useFonts,Barlow_700Bold} from '@expo-google-fonts/barlow'
import * as Location from 'expo-location'
import { distaceCalculator } from '../helpers/Haversine';
import { methodGet } from '../helpers/GetAxios';
export default function Home(){
  const [location,setLocation] = useState()
  useEffect(()=>{
     const getPermissions = async () => {
      let {status} = await Location.requestForegroundPermissionsAsync()
      if(status !== 'granted'){
        console.log("Please grant location Permissions")
        return
      }
      let currentLocation = await Location.getCurrentPositionAsync({})
      setLocation(currentLocation)

      console.log("Location:")
      console.log(currentLocation)
     // distaceCalculator(currentLocation.coords.latitude,currentLocation.coords.longitude,-5.334071,-49.088110)
    }

      
     const interval = setInterval(async() => {
        getPermissions()
        const getRooms =  await methodGet('http://10.204.20.139:4000/show-all-rooms').then((response)=> {return response}).catch(error => console.log(Object.values(error)))
        getRooms.rooms.map((room)=>{
           distaceCalculator(location.coords.latitude,location.coords.longitude,room.lat,room.long)
           console.log('------------',room,'-----------')
        })
      },5000)
      return () => clearInterval(interval)

  },[])
  let [fontsLoaded] = useFonts({Barlow_700Bold})
  if(!fontsLoaded){
    return null
  }

  
    return(
        <SafeAreaView style={styles.container}>
          <HeaderNotification block={"Galpão"} campus={"2"} iqarConcept={"Ruim"}/>
          <View style={styles.iqarbox}>
            <BoxIQAR valueIQAR={'50'}/>
            <BoxIQAR valueIQAR={""} status={'Boa'}/>
          </View>
          <Text style={styles.info}>INFORMAÇÕES GERAIS:</Text>
          <ScrollView>
          <View style={styles.speedoMeter}>
           <SpeedDometer nameGas={'Gás cozinha'} value={10} key={1}/>
           <SpeedDometer nameGas={'Metano'} value={10} key={2}/>
           <SpeedDometer nameGas={'Monóxido de carbono MQ9'} value={10} key={3} />
           <SpeedDometer  nameGas={'Monóxido de carbono MQ135'} value={10} key={4}/>
           <SpeedDometer  nameGas={'Alcool'} value={10} key={5} />
           <SpeedDometer  nameGas={'Dióxido Carbono'} value={10} key={6}/>
           <SpeedDometer nameGas={'Toluen'} value={10} key={7}/>
           <SpeedDometer nameGas={'Hidróxido de Amônion'} value={10} key={8}/>
           <SpeedDometer nameGas={'Acetona'} value={10} key={9}/>
           <SpeedDometer nameGas={'Ozônio'} value={10} key={10}/>
           <SpeedDometer nameGas={'Temperatura'} value={10} key={11}/>
           <SpeedDometer nameGas={'Humidade'} value={10} key={12} />
          </View>
          </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#F0FFF8',
      alignItems:'flex-start',
      flexDirection:'column',
    },
    speedoMeter:{
       display:'flex',
       width:'100%',
       alignItems:'center',
       justifyContent:'center',
       flexDirection:'row',
       flexWrap:'wrap',
       rowGap:75,
       columnGap:40,
       marginLeft:'2%',
       marginBottom:'20%'
    },
    iqarbox:{
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      columnGap:45
    },
    info:{
      marginLeft:'10%',
      marginBottom:'5%',
      fontSize:17,
      fontFamily:'Barlow_700Bold'
    }
  });