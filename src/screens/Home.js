import React, { Component,useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput,Text, View, ScrollView} from 'react-native';
import SpeedDometer from '../components/speedometer';
import HeaderNotification from '../components/HeaderInformation';
import BoxIQAR from '../components/BoxIQAR';
import {useFonts,Barlow_700Bold} from '@expo-google-fonts/barlow'
import * as Location from 'expo-location'
import { distaceCalculator } from '../helpers/Haversine';
import { methodGet } from '../helpers/GetAxios';
import { useIsFocused } from '@react-navigation/native';
import { SpeedometerJustIqar } from '../components/SpeedometerJustIQAR.';
import { SpeedometerJustHeatIndex } from '../components/SpeedometerJustHeatIndex';
export default function Home(){
  const [location,setLocation] = useState()
  const isFocused = useIsFocused()
  const [dataRoom,setDataRoom] = useState(null)
  let ip = '192.168.1.10:4000'
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
     const newRoom = []
      if (currentLocation) {
        const getRooms = await methodGet(`http://${ip}/show-all-rooms`).then((response) => { return response }).catch(error => console.log(Object.values(error)))
        if(getRooms){
          console.log(getRooms.rooms)
          getRooms.rooms.map((room) => {
              if (room.lat && room.long) {
                  let dataDistance = distaceCalculator(currentLocation.coords.latitude, currentLocation.coords.longitude, room.lat, room.long)
                  newRoom.push({ room, dataDistance })
              }  
          })
          console.log('new room ------', newRoom)
          let minDistance = Infinity;
          let closestRoom = null;
  
          newRoom.forEach(item => {
              if (parseFloat(item.dataDistance) < minDistance) {
                  minDistance = parseFloat(item.dataDistance);
                  closestRoom = item.room;
              }
          });
  
          console.log('Sala mais próxima:', closestRoom)
          const getLastRoomById = await methodGet(`http://${ip}/show-all-docs/${closestRoom.id}`)
          if(getLastRoomById){
            console.log('----------------')
            console.log('dado da sala',getLastRoomById)
            setDataRoom(getLastRoomById)
          }
          
        }

    }
    
    }
 getPermissions()
  },[isFocused])
  let [fontsLoaded] = useFonts({Barlow_700Bold})
  if(!fontsLoaded){
    return null
  }

  
    return(
        <SafeAreaView style={styles.container}>
         
          {dataRoom && dataRoom.docs ? (
          <>
           <HeaderNotification block={"Galpão"} campus={"2"} iqarConcept={"Ruim"}/>
           <View style={styles.iqarbox}>
             <BoxIQAR valueIQAR={400}/>
             <BoxIQAR valueIQAR={""} status={dataRoom.docs.QualityAirConcept}/>
           </View>
           <Text style={styles.info}>INFORMAÇÕES GERAIS:</Text>
          <ScrollView>
          <View style={styles.speedoMeter}>
           <SpeedometerJustIqar nameGas={'Monóxido de carbono MQ9'} iqarGas={dataRoom.docs.CO_MQ9_Level_IQAR} key={0}/>
           <SpeedometerJustIqar nameGas={'Monóxido de carbono MQ135'} iqarGas={dataRoom.docs.CO_MQ135_Level_IQAR} key={1}/>
           <SpeedometerJustIqar nameGas={'Ozônio'} iqarGas={dataRoom.docs.O3_MQ131_Level_IQAR} key={2}/>
           <SpeedometerJustHeatIndex heatIndex={dataRoom.docs.CalcHeatIndex} key={4}/>
           <SpeedDometer nameGas={'Gás cozinha'} value={dataRoom.docs.LPG_MQ9_Level} key={5}/>
           <SpeedDometer nameGas={'Metano'} value={dataRoom.docs.CH4_MQ9_Level} key={6}/>
           <SpeedDometer  nameGas={'Alcool'} value={dataRoom.docs.Alcool_MQ135_Level} key={7} />
           <SpeedDometer  nameGas={'Dióxido Carbono'} value={dataRoom.docs.CO2_MQ135_Level} key={8}/>
           <SpeedDometer nameGas={'Toluen'} value={dataRoom.docs.Toluen_MQ135_Level} key={9}/>
           <SpeedDometer nameGas={'Hidróxido de Amônion'} value={dataRoom.docs.MH4_MQ135_Level} key={10}/>
           <SpeedDometer nameGas={'Acetona'} value={dataRoom.docs.Aceton_MQ135_Level} key={11}/>
           <SpeedDometer nameGas={'Temperatura'} value={dataRoom.docs.Temperatura_Level === null ? 0 :dataRoom.docs.Temperatura_Level } key={12}/>
           <SpeedDometer nameGas={'Humidade'} value={dataRoom.docs.Humidade_Level === null ? 0 :dataRoom.docs.Humidade_Level } key={13} />
          </View>
          </ScrollView></>) : (<Text>Carregando...</Text>)}
          
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
  //coment
  //coment 2