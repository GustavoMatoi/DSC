import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform} from 'react-native';
import Estilo from './componentes/Estilo';
import Logo from './componentes/Logo';
import InputTexto from './componentes/Inputs/InputTexto';
import BotaoPrimario from './componentes/Inputs/BotaoPrimario';
import Login from './componentes/Screens/Login/Login';
import Cadastro from './componentes/Screens/Cadastro';
import Produtos from './componentes/Screens/Main';
import Chat from './componentes/Screens/Chat';
import PerfilVendedor from './componentes/Screens/PerfilVendedor';
import PerfilCliente from './componentes/Screens/PerfilCliente';
import Carrinho from './componentes/Screens/Carrinho';
import FinalizarCompra from './componentes/Screens/FinalizarCompra';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './componentes/Screens/Main';
import Routes from './componentes/Routes';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Principal" component={Routes} options={{ headerShown: false }} />
        <Stack.Screen name="Carrinho" component={Carrinho} options={{ headerShown: false }} />
        <Stack.Screen name="Finalizar compra" component={FinalizarCompra} />
        <Stack.Screen name="Chat" component={Chat}/>
      </Stack.Navigator>
    </NavigationContainer>

    )
}

