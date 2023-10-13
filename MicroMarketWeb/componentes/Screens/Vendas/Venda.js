import React, {useEffect, useState} from 'react'
import { printToFileAsync } from 'expo-print'
import { shareAsync } from 'expo-sharing'
import {Text, View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'
import Estilo from '../../Estilo'

export default ({venda, cliente, produtos, total, onPress}) => {
    const style = StyleSheet.create({
        container: {
            width: 400,
            height: 300,
            borderWidth: 1,
            borderRadius: 5,
            borderWidth: 5,
            borderColor: '#B8BFFF'
        },
        titulo: {
            width: '100%',
            height: '25%',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 5,
            borderColor: '#B8BFFF'
        },
        areaTextos: {
            width: '100%',
            height: '40%',
            padding: 20,
            justifyContent: 'space-around'
        },
        areaBotao: {
            width: '100%',
            height: '35%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        botao : {
            width: '90%',
            borderRadius: 20,
            height: '60%',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    return (
        <View style={[style.container, Estilo.corPrimariaBackground]}>
            <View style={style.titulo}>
                <Text style={[Estilo.tituloPequeno, {color: 'white'}]}>{venda || "VENDA XXXXX"}</Text>
            </View>
            <View style={[style.areaTextos]}>
                <Text style={[Estilo.texto15px, {color: 'white', fontWeight: 'bold'}]}>CLIENTE: {cliente || 'cliente'}</Text>
                <Text style={[Estilo.texto15px, {color: 'white', fontWeight: 'bold'}]}>PRODUTOS: {produtos}</Text>
                <Text style={[Estilo.texto15px, {color: 'white', fontWeight: 'bold'}]}>TOTAL: {total || 'total' }</Text>
            </View>
            <View style={[style.areaBotao]}>
                <TouchableOpacity style={[style.botao, Estilo.corSecundariaBackground]} onPress={onPress}>
                    <Text style={[Estilo.tituloPequeno,Estilo.textoCorPrimaria]}>EXPORTAR DADOS</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}