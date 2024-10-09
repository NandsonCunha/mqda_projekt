
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Switch } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { handleNotification } from '../helpers/HandleNotification';


export default function ConfigNotification({nameGas,qualityAir}) {
    const [isLigado, setIsLigado] = useState(false);
    const [gasSelected,setGasSelected] = useState('')

    const handleToggleSwitch = () => {
        if(isLigado === true) {
           console.log("ligado")
        } 
        if(isLigado === false) {
          if(gasSelected === qualityAir){
            handleNotification(nameGas,qualityAir)
          }
        }
        setIsLigado(!isLigado);
    };

    const iqar = ['Boa', 'Moderada', 'Ruim', 'Muito Ruim', 'Péssima']
    const temp = ["Cuidado","Cuidado extremo","Perigo","Perigo extremo"]

  return(
  <View style={styles.containerMenor}>
    <View style={styles.containerSel}>
      <Text style={styles.text}>Nível de {nameGas}:</Text>
      <SelectDropdown
        data={nameGas === "CO" ? iqar : nameGas === "Ozônio" ? iqar : temp}
        rowStyle={styles.selectDropdownRow}
        selectedRowStyle={styles.select}
        onSelect={(selectedItem, index) => {
          setGasSelected('')
          console.log(selectedItem + ` ${nameGas}`, index);
          setGasSelected(selectedItem)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
    </View>

    <Switch
      style={styles.switch}
      value={isLigado}
      onValueChange={handleToggleSwitch}
      trackColor={{ false: "#767577", true: "#767577" }}
      thumbColor={isLigado ? "#25FE02" : "#FB0505"}
    />
  </View>);
}

const styles = StyleSheet.create({
    containerMenor:{
        flexDirection: "row",
        height: 120,
        width: 280,
        padding: 15,
        borderWidth: 0.1,
        elevation:1,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    selectDropdownRow: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
        borderRadius: 5,
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