import React, { useEffect } from "react";
import {Text, View, TouchableOpacity, ScrollView, StyleSheet, Image} from 'react-native'
import Estilo from "../../Estilo";
import { recuperarDocumentos } from "../../../api/crud";

export default ({image, destinatario}) => {
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '10%',
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'center'
        },
        imagem: {
            width: 60,
            height: 60,
            borderRadius: 30
        }

    })

    return (
        <View style={[style.container, Estilo.corSecundariaBackground]}> 
            <Text style={[Estilo.tituloMedio, Estilo.textoCorPrimaria]}>{ destinatario || "Destinatário"}</Text>
        </View>
    )
}
