import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Switch } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';



export default function Notification(){
    const [isLigado, setIsLigado] = useState(false);


    const handleToggleSwitch = () => {
        setIsLigado(!isLigado);
    };

    const iqar = ["Boa", "Moderada", "Ruim", "Muito Ruim", "Péssimo"]

    return (
        <View style={styles.container}>
        <Text style={styles.text}>Nível de Fumaça:</Text>
        
        <SelectDropdown
            data={iqar}
            rowStyle={{
                borderColor: '#000'
            }}
            selectedRowStyle={{
                borderColor:'#000'
            }}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
	        }}
            rowTextForSelection={(item, index) => {
                return item
	        }}
        />

        <Switch
            style={styles.switch}
            value={isLigado}
            onValueChange={handleToggleSwitch}
        />
        

        
        <Text style={styles.text}>Nível de Fumaça:</Text>

        <SelectDropdown
            data={iqar}
            rowStyle={{
                borderColor: '#000'
            }}
            selectedRowStyle={{
                borderColor:'#000'
            }}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                return item
            }}
        />

        <Switch
            style={styles.switch}
            value={isLigado}
            onValueChange={handleToggleSwitch}
        />
        </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        backgroundColor: '#F0FFF8',
        shadowColor: 'black'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    select: {
        width: 200,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
    },
    switch: {
        marginLeft: 10,
    },
    });
    