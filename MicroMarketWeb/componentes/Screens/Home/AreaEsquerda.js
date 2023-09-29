import React from "react";
import {Text, View, TouchableOpacity, StyleSheet, Platform, Image} from 'react-native'
import Estilo from "../../Estilo";
import { AntDesign } from '@expo/vector-icons'; 


export default props => {
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
    
    return (
        <View style={[style.container, Estilo.corSecundariaBackground]}>
            <Text style={[Estilo.tituloMedio, Estilo.textoCorPrimaria]}>Boas vindas!</Text>
            <View>
            {Platform.OS == 'web' ?             <img
                src="https://pbs.twimg.com/media/F0HXHOTXwAAAxL-.jpg"
                width={200}
                height={200}
                style={{borderRadius: 100}}
            /> : 
            <Image
            source={{uri: 'https://pbs.twimg.com/media/F0HXHOTXwAAAxL-.jpg'}}
            width={200}
            height={200}
            style={{borderRadius: 100}}
            />
            }
            <TouchableOpacity style={[{width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: -30}, Estilo.corPrimariaBackground]}>
                <AntDesign name="message1" size={45} color="#B8BFFF" />
            </TouchableOpacity>
            </View>

            <View style={[style.areaLinks]}>
                <Text style={[Estilo.textoCorPrimaria, Estilo.tituloPequeno]}>PERFIL</Text>
                <Text style={[Estilo.textoCorPrimaria, Estilo.tituloPequeno]}>VENDAS</Text>
                <Text style={[Estilo.textoCorPrimaria, Estilo.tituloPequeno]}>DASHBOARDS</Text>
                <Text style={[Estilo.textoCorPrimaria, Estilo.tituloPequeno]}>SAIR</Text>
            </View>
        </View>
    )
}