import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './componentes/Logo';
import LoginScreen from './componentes/Screens/LoginScreen';
import Home from './componentes/Screens/Home';
import CadProduto from './componentes/Screens/CadProduto';
import Produtos from './componentes/Screens/Produtos';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EditarProduto from './componentes/Screens/Produtos/EditarProduto';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer
    >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Produtos" component={Produtos} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastrar Produtos" component={CadProduto} options={{ headerShown: false }} />
        <Stack.Screen name="Editar" component={EditarProduto} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>  );
}

