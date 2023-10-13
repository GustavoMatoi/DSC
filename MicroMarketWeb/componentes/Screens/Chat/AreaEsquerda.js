import React from "react";
import {Text, View, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native'
import Estilo from "../../Estilo";
import IconeConversa from "./IconeConversa";

export default ({navigation, mensagens}) => {
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            alignItems: 'center'
        },
    })

    console.log('area esquerda')
    console.log(mensagens)
    
    const remetentes = mensagens.map((i) => i.remetente);

    const remetentesTratados = new Set([...remetentes])
    const remetentesArray = [...remetentesTratados];

    return (
        <View style={[{height: '100%', width: '20%'}, Estilo.corPrimariaBackground]}>

        <ScrollView style={[{width: '100%', minHeight: '100%'},]}>
            <View style={[style.container, Estilo.corPrimariaBackground]}>
            <Text style={[Estilo.tituloMedio, Estilo.textoCorSecundaria, {marginBottom: 10}]}>Mensagens</Text>
                {remetentesArray.map((item) => {
                    return (
                        <IconeConversa destinatario={item}></IconeConversa>
                    )
                })}
            </View>

        </ScrollView>
        </View>

    )

}