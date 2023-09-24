import React, {cloneElement, useEffect, useState} from 'react'
import {Text, View, Image, TouchableOpacity, StyleSheet, BackHandler} from 'react-native'
import Estilo from '../../Estilo'
import { AntDesign } from '@expo/vector-icons'; 

export default ({nomeProduto, nomeVendedor, uriImagem, descricao, tags, preco, onPressCarrinho, onPressMensagens, onPressInformacoes}) => {

    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: 450,
            marginVertical: 5,
        },
        header: {
            width: '100%',
            height: '15%',
            padding: 5
        },
        imagem: {
            justifyContent: 'center',
            width: '100%',
            flexDirection: 'row',
            marginBottom: 10
        },
        descricao: {
            padding: 5,
            width: '90%'
        },
        footer: {
            marginTop: 20,
            flexDirection: 'row',
            height: 80
        },
        preco: {
            width: '55%',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10
        },
        botoes: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '40%',
            justifyContent: 'space-evenly'
        },
        botao: {
            width: 50,
            height: 50,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center'
        }
        
    })
    return (
        <View style={[style.container, Estilo.corLight]}>
            <View style={[style.header]} >
                <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria]}>{nomeProduto}</Text>
                <Text style={[Estilo.texto12px, Estilo.textoCorPrimaria]}>{nomeVendedor}</Text>
                </View>

                <View style={style.imagem}>
                    <Image 
                    width={200}
                    height={200}
                    source={{uri: uriImagem}}></Image>
                </View>
                <View style={[style.descricao]}>
                    <Text style={[Estilo.textoCorPrimaria, Estilo.texto12px]}>{descricao}</Text>
                    {tags.map((i) => <Text style={[Estilo.texto12px, Estilo.textoCorPrimaria, {fontWeight: 'bold'}]}>{i}</Text>)}
                    </View>
                <View style={style.footer}>
                    <View style={[style.preco]}>
                        <Text style={[Estilo.tituloMedio, Estilo.textoCorPrimaria]}>R$ {preco}</Text>
                    </View>
                    <View style={[style.botoes]}>
                        <TouchableOpacity style={[style.botao, Estilo.corPrimariaBackground]} onPress={onPressCarrinho}>
                            <AntDesign name="shoppingcart" size={35} color="#B8BFFF" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.botao, Estilo.corPrimariaBackground]} onPress={onPressMensagens}>
                            <AntDesign name="message1" size={35} color="#B8BFFF" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.botao, Estilo.corPrimariaBackground]} onPress={onPressInformacoes}>
                            <AntDesign name="info" size={35} color="#B8BFFF" />
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}