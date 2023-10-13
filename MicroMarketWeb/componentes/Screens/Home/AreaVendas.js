import React from "react";
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import Estilo from "../../Estilo";

export default ({navigation, user, vendas}) =>{

    const style = StyleSheet.create({ 
        container: {
            width: '50%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        areaVendas: { 
            width: '100%',
            height: '50%',
            justifyContent: 'space-around',
            alignItems: 'center'

        }
    })
    return (
        <View style={[style.container]}>
            <View style={{width: '90%'}}>
                <Text style={[Estilo.tituloMedio, Estilo.textoCorSecundaria]}>Vendas recentes:</Text>
            </View>
            <View style={[style.areaVendas]}>
            {vendas.slice(0,4).map((i, index) => <TouchableOpacity style={[ Estilo.corSecundariaBackground, {width: 400, height: 45, justifyContent: 'center', alignItems: 'center', marginTop: 10, borderRadius: 20}]}>
                <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria]}>Cliente {index} valor {index}</Text>
            </TouchableOpacity>)}
            </View>
            <TouchableOpacity style={[Estilo.corSecundariaBackground, {width: 255, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }]} onPress={()=>navigation.navigate('Vendas', {user: user, vendas: vendas})}>
                <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria]}>VISUALIZAR TODAS</Text>
            </TouchableOpacity>
        </View>
    )
}