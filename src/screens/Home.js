import { StyleSheet, Text, View } from "react-native";

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0FFF8'
    },
    text: {
        fontSize: 22,
        fontWeight: "bold"
    }
})