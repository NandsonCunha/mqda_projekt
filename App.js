import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <Routes></Routes>
    </SafeAreaProvider>
  );
}