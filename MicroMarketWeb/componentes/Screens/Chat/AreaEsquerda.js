import React, { useEffect, useState } from "react";
import {Text, View, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native'
import Estilo from "../../Estilo";
import IconeConversa from "./IconeConversa";
import { recuperarDocumentos } from "../../../api/crud";
import { doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

export default ({navigation, mensagens, recuperarMensagens}) => {
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            alignItems: 'center'
        },
    })
    console.log(mensagens)


    return (
        <View style={[{height: '100%', width: '20%'}, Estilo.corPrimariaBackground]}>

        <ScrollView style={[{width: '100%', minHeight: '100%'},]}>
            <View style={[style.container, Estilo.corPrimariaBackground]}>
            <Text style={[Estilo.tituloMedio, Estilo.textoCorSecundaria, {marginBottom: 10}]}>Mensagens</Text>
                {mensagens.map((item, index) => {
                    console.log(item, index)
                    return (
                        <IconeConversa onPress={()=>recuperarMensagens(item)} destinatario={item}></IconeConversa>
                    )
                })}
            </View>

        </ScrollView>
        </View>

    )

}