import React, {useState, useEffect} from "react";
import {View, StyleSheet, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import Estilo from "../../Estilo";
import ProdutoNoCarrinho from "./ProdutoNoCarrinho";

export default props => {
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
        },
        titulo: {
            width: '100%',
            padding: 15
        },
        footer: {
            width: '100%',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        botao: {
            height: 40,
            borderRadius: 20,
            width: 180,
            justifyContent: 'center',
            alignItems: 'center',
        }
    })

    const produtos = [1,1,1,2,3,1,2,3,1,2]
    return (
        <View  style={[style.container, Estilo.corPrimariaBackground]}>
            <View style={[style.titulo]}>
                <Text style={[Estilo.tituloMedio, Estilo.textoCorSecundaria]}>CARRINHO</Text>
            </View>
            <FlatList
            data={produtos}
            renderItem={(item) =>  {return (
                <View style={[{marginVertical: 20}]}>
                    <ProdutoNoCarrinho/>
                </View>
            ) }}
            />
            <View style={[style.footer, Estilo.corSecundariaBackground]}>
                <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria]}>
                    R$ Total
                </Text>
                <TouchableOpacity style={[style.botao, {backgroundColor:'#6DFB72' }]}>
                    <Text style={[Estilo.texto15px, {color: 'green', fontWeight: 'bold'}]}>FINALIZAR COMPRA</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}