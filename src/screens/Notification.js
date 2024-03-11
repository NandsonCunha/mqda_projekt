import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Switch } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import ConfigNotification from '../components/ConfigNotification';


export default function Notification(){

    return (
        <View style={styles.container}>
              <ConfigNotification nameGas={'CO'}/>
              <ConfigNotification nameGas={'Ozônio'}/>
              <ConfigNotification nameGas={'Temperatura'}/>
        </View>
    );
    };

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
    