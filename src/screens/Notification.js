import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import ConfigNotification from '../components/ConfigNotification';
import { DataContext } from '../Contexts/DataRoomContext';
import { getQualityLabel } from '../helpers/QualityLabel';

export default function Notification() {
    // Obtém dados do contexto global `DataContext`
    const { dataRoom } = useContext(DataContext);

    // Executa sempre que `dataRoom` for atualizado
    useEffect(() => {
        if (dataRoom) {
            console.log('------------------------------------------');
            console.log("dataroom:", dataRoom);
        }
    }, [dataRoom]);

    return (
        <View style={styles.container}>
            {/* Renderiza o componente de configuração de notificação para diferentes gases e condições */}
            <ConfigNotification nameGas={'CO'} qualityAir={getQualityLabel(dataRoom.docs.CO_MQ135_Level_IQAR)} />
            <ConfigNotification nameGas={'Ozônio'} qualityAir={getQualityLabel(dataRoom.docs.O3_MQ131_Level)} />
            <ConfigNotification nameGas={'Temperatura'} qualityAir={dataRoom.docs.TargetConcept.split(':')[0]} />
        </View>
    );
}

// Define os estilos do componente principal
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        rowGap: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0FFF8',
    },
});
