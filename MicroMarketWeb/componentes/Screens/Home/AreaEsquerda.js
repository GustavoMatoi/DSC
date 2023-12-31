import React from "react";
import {Text, View, TouchableOpacity, StyleSheet, Platform, Image} from 'react-native'
import Estilo from "../../Estilo";
import { AntDesign } from '@expo/vector-icons'; 
import { getAuth, signOut } from "firebase/auth";


export default ({navigation, imagem, user}) => {
    const style = StyleSheet.create({
        container: {
            width: '20%',
            height: '100%',
            alignItems: 'center'
        },
        areaLinks: {
            height: '25%',
            justifyContent: 'space-around'
        }
    })

    const logout = () => {
        const auth = getAuth()
        signOut(auth).then(() => {alert("Usuário deslogado com sucesso")
        navigation.navigate('Login')}
        ).catch((error)=> {console.log(error.message)})
    }
    
    return (
        <View style={[style.container, Estilo.corSecundariaBackground]}>
            <Text style={[Estilo.tituloMedio, Estilo.textoCorPrimaria]}>Boas vindas!</Text>
            <View>
            {Platform.OS == 'web' ?             <img
                src={imagem}
                width={200}
                height={200}
                style={{borderRadius: 100}}
            /> : 
            <Image
            source={{uri: imagem}}
            width={200}
            height={200}
            style={{borderRadius: 100}}
            />
            }
            <TouchableOpacity style={[{width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: -30}, Estilo.corPrimariaBackground]} onPress={()=>navigation.navigate('Chat', {user: user})}>
                <AntDesign name="message1" size={45} color="#B8BFFF" />
            </TouchableOpacity>
            </View>

            <View style={[style.areaLinks]}>
            <Text style={[Estilo.textoCorPrimaria, Estilo.tituloPequeno, {borderBottomColor: '#B8BFFF', borderBottomWidth: 2}]}>HOME</Text>
                <Text onPress={() => logout()} style={[Estilo.textoCorPrimaria, Estilo.tituloPequeno]}>SAIR</Text>
            </View>
        </View>
    )
}