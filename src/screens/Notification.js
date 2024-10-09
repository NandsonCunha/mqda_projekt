import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Switch } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import ConfigNotification from '../components/ConfigNotification';
import { DataContext } from '../Contexts/DataRoomContext';
import { Button } from 'react-native-elements';

import { getQualityLabel } from '../helpers/QualityLabel';



export default function Notification(){
    const {dataRoom} = useContext(DataContext)

    
    useEffect(() => {
        if(dataRoom){
            console.log('------------------------------------------')
            console.log("dataroom:",dataRoom)
        }
    },[dataRoom])
    return (
        <View style={styles.container}>
              <ConfigNotification nameGas={'CO'} qualityAir={getQualityLabel(dataRoom.docs.CO_MQ135_Level_IQAR)}/>
              <ConfigNotification nameGas={'Ozônio'} qualityAir={getQualityLabel(dataRoom.docs.O3_MQ131_Level)}/>
              <ConfigNotification nameGas={'Temperatura'} qualityAir={dataRoom.docs.TargetConcept.split(':')[0]}/>
              
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        rowGap:15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0FFF8',

    },
    });
    