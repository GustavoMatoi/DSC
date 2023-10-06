import React, {useState, useEffect} from "react";
import {Text, View, StyleSheet, Image} from 'react-native'
import Estilo from "../../Estilo";

export default ({imagem, nome, preco}) => {
    const style = StyleSheet.create({
        container: {
            width: '95%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderRadius: 30

        },
        imagem: {
            width: 100,
            height: 100
        },
        areaTextos: {
            width: '70%',
            margin: '5%',
            padding: 10
        }

    })

    return (
        <View style={[style.container, Estilo.corLight]}>
            <Image
            source={{uri: imagem}}
            style={[style.imagem]}
            />
            <View style={[style.areaTextos]}>
                <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria]}>
                    {nome}
                </Text>
                <Text style={[Estilo.texto20px, Estilo.textoCorPrimaria]}>
                    {preco}
                </Text>
            </View>
        </View>
    )
}