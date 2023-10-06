import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import Main from '../Screens/Main';
import PerfilCliente from '../Screens/PerfilCliente';
const Tab = createBottomTabNavigator()

export default function Routes(){
    return (
        <Tab.Navigator   screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#0F0765',
                borderTopColor: '#0F0765'
                
            },
            tabBarActiveTintColor: '#0066FF',
            tabBarInactiveTintColor: '#FFFF',            
          }}>
            <Tab.Screen 
            name="Produtos" 
            component={Main}
            options={{
                tabBarIcon: ({size, color}) => (<Foundation name="shopping-cart" size={size} color={color} />)
            }}/>
            <Tab.Screen 
            name="Perfil" 
            component={PerfilCliente}
            options={{
                tabBarIcon: ({size, color}) => (<Ionicons name="people" size={size} color={color} />)
            }}/>


        </Tab.Navigator>
    )
}