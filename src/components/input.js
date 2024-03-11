import * as React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'

const Input = ({children}) =>{
    return (
        <View>
            <Text style={styles.text}>{children}</Text>
            <TextInput style={styles.inputCont}/>
        </View>
    )
}

const styles =StyleSheet.create({
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
    }
})
export default Input;