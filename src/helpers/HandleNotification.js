
import * as Notifications from 'expo-notifications'
import { Platform } from 'react-native';
import * as Device from 'expo-device'
import Constants from 'expo-constants';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
     shouldPlaySound:true,
     shoudSetBadge:true,
     shouldShowAlert:true
  })
})


export async function handleNotification(gas,quality) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if(existingStatus !== 'granted') {
        alert('Você não possui permissão para receber notificação')
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status
    }
      
    
    const projectId =
    Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
    if(!projectId){
        console.log('projeto id não encontrado')
    }
    try{
        let token =(
            await Notifications.getExpoPushTokenAsync({
              projectId,
            })
          ).data;
        await Notifications.scheduleNotificationAsync({
            content: {
                title:'Aviso',
                body:`O nível de ${gas} esta em ${quality} na área`,
                data:{},
            },
            trigger:{
                seconds: 5
            }
        })
        console.log(token)
    }catch(e){
        console.log(e)
    }
   
}