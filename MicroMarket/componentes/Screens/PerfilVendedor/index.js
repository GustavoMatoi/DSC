import React, {useState, useEffect} from "react";
import {Text, View, Modal, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, Image} from 'react-native'
import Estilo from "../../Estilo";
import { AntDesign } from '@expo/vector-icons'; 

export default props => {
    const produtos = [1,1,1,1,1,1, 1,1,1, 1]
    const style = StyleSheet.create({
        container: {
            backgroundColor: 'red',
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
            flex: 1
        },

        areaModal: {
            width: '100%',
            height: '100%',
        },
        areaVendedor: {
            width: '100%',
            height: '40%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        foto: {
            borderRadius: 125
        },
        areaProdutos: {
            width: '100%',
            height: '58%',
            padding: 20,
            flexDirection: 'row',
            flexWrap:  'wrap',
            justifyContent: 'space-between'
        },
        areaProdutoIndividual: {
            width: 100, 
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
        },
        areaEnviarMensagem : {
            width: '100%',
            height: '10%',
            paddingLeft: 20
        },
        botao: {
            width: 60,
            height: 60,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    return(


            <View
            >
                <View style={[style.areaModal, Estilo.corSecundariaBackground]}>
                    <View style={[style.areaVendedor]} >
                        <Image
                        source={{uri: 'https://64.media.tumblr.com/a56cead8ec757328b698959e92c852f7/tumblr_pn6l66dmFs1wwzhvp_500.jpg'}}
                        width={250}
                        height={250}
                        style={style.foto}
                        />
                        <Text style={[Estilo.textoCorPrimaria, Estilo.tituloPequeno]}>Nome do vendedor</Text>
                    </View>
                    <View>
                        <Text style={[Estilo.textoCorPrimaria, Estilo.tituloPequeno, {paddingLeft: 20}]}>Publicações recentes</Text>
                        <View style={[style.areaProdutos]}>
                        {produtos.slice(0, 9).map((produto, index) => (
                            <View key={index} style={[style.areaProdutoIndividual]}>
                                <Image 
                                    source={{uri: 'https://64.media.tumblr.com/a56cead8ec757328b698959e92c852f7/tumblr_pn6l66dmFs1wwzhvp_500.jpg'}}
                                    width={80}
                                    height={80}
                                />
                                <Text style={[Estilo.texto12px, Estilo.textoCorPrimaria, {fontWeight: 'bold', textAlign: 'center'}]}>Nome do produto</Text>
                            </View>
                        ))}

                        </View>
                        <View style={[style.areaEnviarMensagem]}>
                        <Text style={[Estilo.textoCorPrimaria, Estilo.tituloPequeno]}>Entrar em contato</Text>
                            <TouchableOpacity style={[style.botao, Estilo.corPrimariaBackground]}>
                                <AntDesign name="message1" size={40} color="#B8BFFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

    )
}