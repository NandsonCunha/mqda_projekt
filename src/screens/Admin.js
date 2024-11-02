// Em Admin.js

import React, { useEffect, useState } from 'react'; // Importa React e hooks necessários
import { StyleSheet, Text, ScrollView, Button, TextInput, View, Alert } from 'react-native'; // Importa componentes do React Native
import Input from '../components/input'; // Importa um componente Input personalizado (não utilizado no código)
import { useFonts, Barlow_500Medium, Barlow_600SemiBold, Barlow_700Bold } from '@expo-google-fonts/barlow'; // Importa as fontes
import { SafeAreaView } from 'react-native-safe-area-context'; // Importa SafeAreaView para evitar problemas de layout em dispositivos
import { useIsFocused } from '@react-navigation/native'; // Importa hook para verificar se a tela está focada

// Função principal do componente Admin
export function Admin ({navigation}) {
    // Carrega as fontes
    let [fontsLoaded] = useFonts({ Barlow_500Medium, Barlow_600SemiBold, Barlow_700Bold });
    
    // Define os estados para email e senha
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isFocused = useIsFocused(); // Verifica se a tela está focada

    // Reseta os campos de email e senha quando a tela ganha foco
    useEffect(() => {
        setEmail('');
        setPassword('');
    }, [isFocused]);

    // Se as fontes ainda não estiverem carregadas, não renderiza nada
    if (!fontsLoaded) {
        return null;
    }

    console.log(email); // Loga o email (para depuração)

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.info}>ADMINISTRADOR:</Text>   
            <ScrollView>
                <View>
                    <Text style={styles.text}>Email</Text>
                    <TextInput
                        style={styles.inputCont}
                        onChangeText={(text) => setEmail(text)} // Atualiza o estado do email
                        value={email} // Define o valor do campo como o estado
                    />
                </View>
                <View>
                    <Text style={styles.text}>Senha</Text>
                    <TextInput
                        style={styles.inputCont}
                        onChangeText={(text) => setPassword(text)} // Atualiza o estado da senha
                        value={password} // Define o valor do campo como o estado
                        secureTextEntry={true} // Oculta a senha
                    />
                </View>
            </ScrollView>
            <Button 
                style={styles.buttn} 
                color={'#0FA958'} 
                title="Sou Administrador" 
                onPress={() => {
                    // Valida email e senha ao clicar no botão
                    if ((email !== 'alife.silva@unifesspa.edu.br' && password !== 'bewasor030')) {
                        Alert.alert('Atenção', 'Email/Senha Incorretos'); // Exibe um alerta se a validação falhar
                    } else {
                        navigation.navigate('Location'); // Navega para a tela 'Location' se a validação passar
                    }
                }} 
            />
        </SafeAreaView>
    );
};

// Estilos do componente
const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa todo o espaço disponível
        padding: 61, // Adiciona padding
        backgroundColor: '#F0FFF8', // Cor de fundo
        flexDirection: 'column', // Define a direção dos elementos como coluna
        justifyContent: 'flex-start', // Alinha os elementos no início
    },
    titulo: {
        fontSize: 25, // Tamanho da fonte
        fontWeight: 'bold', // Define o peso da fonte
        marginBottom: 24, // Margem inferior
        fontFamily: "Barlow_700Bold" // Família da fonte
    },
    buttn: {
        height: 40, // Altura do botão
        marginTop: 20 // Margem superior
    },
    text: {
        fontSize: 18, // Tamanho da fonte
        fontFamily: 'Barlow_600SemiBold' // Família da fonte
    },
    inputCont: {
        width: '100%', // Largura total
        backgroundColor: "#E5E5E5", // Cor de fundo do campo
        height: 40, // Altura do campo
        borderColor: 'gray', // Cor da borda
        borderWidth: 0.5, // Largura da borda
        borderRadius: 0, // Raio da borda
        padding: 10, // Padding interno
        marginBottom: 10, // Margem inferior
        borderRadius: 6.25 // Raio da borda
    },
    info: {
        marginLeft: '0%', // Margem esquerda
        marginBottom: '5%', // Margem inferior
        fontSize: 25, // Tamanho da fonte
        fontFamily: 'Barlow_700Bold' // Família da fonte
    }
});
