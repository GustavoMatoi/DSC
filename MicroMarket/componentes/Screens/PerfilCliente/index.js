import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Estilo from "../../Estilo";

export default props => {
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%'
        },
        header: {
            width: '100%',
            height: '20%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        body: {
            width: '100%',
            height: '85%',
            borderTopEndRadius: 50,
            borderTopStartRadius: 50,
            borderWidth: 1
        },
        imagem: {
            width: 200,
            height: 200, 
            borderRadius: 100,
            marginVertical: 'auto',
            marginTop: -60
        },
        areaImagem: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20
        },
        areaInformacoes : {
            width: '100%',
            padding: 15, 
            height: '30%',
            justifyContent: 'space-around'
        },
        areaBotoes: {
            width: '100%',
            height: '30%',
            flexDirection: 'row',
            justifyContent:'space-evenly',
            alignItems: 'flex-end'
        },
        botao: {
            width: '45%',
            height: 50,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
    return (
        <View style={[style.container, Estilo.corPrimariaBackground]}>
            <View style={[style.header]}>
                <Text style={[Estilo.tituloMedio, Estilo.textoCorSecundaria]}>PERFIL</Text>
            </View>
            <View style={[Estilo.corSecundariaBackground, style.body]}>
                <View style={[style.areaImagem]}>
                    <Image
                        source={{uri:'https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2021/06/01235029/5-1024x576.png' }}
                        style={[style.imagem]}
                    />
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria]}>Nome sobrenome sobrenome</Text>
                </View>

                <View style={[style.areaInformacoes]}>
                    <Text style={[Estilo.texto15px, Estilo.textoCorPrimaria]}>Emdereço</Text>
                    <Text style={[Estilo.texto15px, Estilo.textoCorPrimaria]}>Email</Text>
                    <Text style={[Estilo.texto15px, Estilo.textoCorPrimaria]}>Telefone</Text>
                    <Text style={[Estilo.texto15px, Estilo.textoCorPrimaria]}>Profissao</Text>
                </View>
                <View style={[style.areaBotoes]}>
                    <TouchableOpacity style={[style.botao, Estilo.corPrimariaBackground]}>
                        <Text style={[Estilo.texto15px, Estilo.textoCorSecundaria]}>MENSAGENS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.botao, Estilo.corPrimariaBackground]}>
                        <Text style={[Estilo.texto15px, Estilo.textoCorSecundaria]}>CARRINHO</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}