import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform} from 'react-native';
import Estilo from './componentes/Estilo';
import Logo from './componentes/Logo';
import InputTexto from './componentes/Inputs/InputTexto';
import BotaoPrimario from './componentes/Inputs/BotaoPrimario';
import Login from './componentes/Screens/Login/Login';
import Cadastro from './componentes/Screens/Cadastro';
export default function App() {
  return (
      //<Login></Login>
      <Cadastro></Cadastro>
  )
}

