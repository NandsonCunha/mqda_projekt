import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import * as Device from 'expo-device';
import Constants from 'expo-constants';

// Configura o comportamento padrão para notificações, permitindo som, alertas e ícones de badge
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true, // Permite que a notificação reproduza som
    shouldSetBadge: true, // Permite que a notificação defina um ícone de badge no aplicativo
    shouldShowAlert: true // Permite que a notificação mostre um alerta na tela
  })
});

// Função para gerenciar o envio de notificações com base na qualidade do gás
export async function handleNotification(gas, quality) {
  // Obtém o status atual das permissões para notificações
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  // Solicita permissões caso ainda não sejam concedidas
  if (existingStatus !== 'granted') {
    alert('Você não possui permissão para receber notificação');
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  // Obtém o ID do projeto EAS (Expo Application Services)
  const projectId =
    Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
  
  if (!projectId) {
    console.log('projeto id não encontrado');
  }

  try {
    // Obtém o token de push necessário para enviar notificações para dispositivos
    let token = (
      await Notifications.getExpoPushTokenAsync({
        projectId, // Utiliza o ID do projeto EAS, se disponível
      })
    ).data;

    // Agenda uma notificação para ser disparada após 5 segundos
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Aviso', // Título da notificação
        body: `O nível de ${gas} está em ${quality} na área`, // Corpo da mensagem
        data: {}, // Dados adicionais (pode ser personalizado conforme necessário)
      },
      trigger: {
        seconds: 5 // Define o disparo da notificação após 5 segundos
      }
    });

    console.log(token); // Exibe o token de push no console
  } catch (e) {
    console.log(e); // Trata possíveis erros durante o processo
  }
}
