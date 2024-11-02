import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Switch } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { handleNotification } from '../helpers/HandleNotification';

// Componente para configurar notificações de qualidade do ar ou temperatura
export default function ConfigNotification({ nameGas, qualityAir }) {
    const [isLigado, setIsLigado] = useState(false); // Estado para controlar o switch (ligado/desligado)
    const [gasSelected, setGasSelected] = useState(''); // Estado para armazenar o item selecionado no dropdown

    // Função para alternar o estado do switch
    const handleToggleSwitch = () => {
        if (isLigado === true) {
            console.log("ligado"); // Log para quando o switch estiver ligado
        }
        if (isLigado === false) {
            // Verifica se o item selecionado corresponde à qualidade do ar
            if (gasSelected === qualityAir) {
                handleNotification(nameGas, qualityAir); // Chama a função de notificação se a condição for atendida
            }
        }
        setIsLigado(!isLigado); // Alterna o estado do switch
    };

    // Opções para os dropdowns de acordo com o tipo de gás
    const iqar = ['Boa', 'Moderada', 'Ruim', 'Muito Ruim', 'Péssima'];
    const temp = ["Cuidado", "Cuidado extremo", "Perigo", "Perigo extremo"];

    return (
        <View style={styles.containerMenor}>
            <View style={styles.containerSel}>
                <Text style={styles.text}>Nível de {nameGas}:</Text>
                <SelectDropdown
                    // Define os dados para o dropdown com base no tipo de gás (CO, Ozônio ou outros)
                    data={nameGas === "CO" ? iqar : nameGas === "Ozônio" ? iqar : temp}
                    rowStyle={styles.selectDropdownRow}
                    selectedRowStyle={styles.select}
                    onSelect={(selectedItem, index) => {
                        setGasSelected(''); // Limpa o estado antes de definir um novo
                        console.log(selectedItem + ` ${nameGas}`, index); // Log do item selecionado
                        setGasSelected(selectedItem); // Define o item selecionado
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem; // Texto exibido após a seleção
                    }}
                    rowTextForSelection={(item, index) => {
                        return item; // Texto exibido para cada item no dropdown
                    }}
                />
            </View>

            <Switch
                style={styles.switch}
                value={isLigado}
                onValueChange={handleToggleSwitch}
                trackColor={{ false: "#767577", true: "#767577" }} // Cor do track do switch
                thumbColor={isLigado ? "#25FE02" : "#FB0505"} // Cor do botão do switch
            />
        </View>
    );
}

// Estilos utilizados no componente
const styles = StyleSheet.create({
    containerMenor: {
        flexDirection: "row",
        height: 120,
        width: 280,
        padding: 15,
        borderWidth: 0.1,
        elevation: 1,
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
