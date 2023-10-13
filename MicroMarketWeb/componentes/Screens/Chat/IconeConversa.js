import React, {useState, useEffect, useCallback} from 'react'
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native'
import Estilo from '../../Estilo'

export default ({navigation, onPress, image, destinatario}) => {

    const style = StyleSheet.create({
        container: {
            width: '99%',
            minHeight: 80,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2, 
            borderColor: '#B8BFFF'
        },
        imagem: {
            width: 60,
            height: 60,
            borderRadius: 30
        }
    })

    return (
        <TouchableOpacity style={[style.container, Estilo.corPrimariaBackground]} onPress={onPress} >
            <Image style={[style.imagem]} source={{uri: image || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}}/>
            <Text style={[Estilo.texto15px, Estilo.textoCorSecundaria, {fontWeight: 'bold'}]}>{destinatario || 'Nome do destinatario'}</Text>
        </TouchableOpacity>
    )
}