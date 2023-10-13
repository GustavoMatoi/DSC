import React, {useState, useEffect, useCallback} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Image} from 'react-native'
import Estilo from '../../../Estilo'

export default ({vendedor, imagem}) => {
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: 50, 
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        },
        imagem: {
            width: 45,
            height: 45,
            borderRadius: 22
        },

    })
    return (
        <View style={[style.container, Estilo.corSecundariaBackground]}>
            
            <Image
            source={{uri: imagem || 'https://64.media.tumblr.com/69cf90148aec2b2c5545118fed5248eb/tumblr_pn6l66iHZb1wwzhvp_640.jpg'}}
            style={[style.imagem]}
            />
            <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria]}>{vendedor}</Text>
        </View>
    )
}


