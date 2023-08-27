import React from "react";
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import Estilo from "../Estilo";

export default ({onPress, texto}) => {

    return (
        <TouchableOpacity onPress={onPress} style={[style.container, Estilo.corSecundariaBackground]}>
            <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria]}>{texto}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        height: 50, 
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})