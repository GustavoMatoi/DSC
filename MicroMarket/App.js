import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform} from 'react-native';
import Estilo from './componentes/Estilo';
import Logo from './componentes/Logo';
export default function App() {
  return (
    <View style={[Estilo.corPrimariaBackground, styles.container]}>
      <Logo></Logo>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textoVermelho: {
    color: 'red'
  }
});
