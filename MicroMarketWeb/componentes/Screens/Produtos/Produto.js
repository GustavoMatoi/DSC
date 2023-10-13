import React, {useState, useEffect} from 'react'
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native'
import Estilo from '../../Estilo'
import { recuperarDocumentos } from '../../../api/crud'

export default ({imagem, nome, descricao, estoque, valor, tags=[], onPressExcluir, onPressEditar, user}) => {


    const style = StyleSheet.create({
        caixa: {
            width: 205,
            height: 400,
            borderWidth: 5,
            borderRadius: 5,
            borderColor: '#B8BFFF'
        },
        areaTextos: {
            height: '50%',
            borderTopWidth: 5,
            borderColor: '#B8BFFF',
            justifyContent: 'space-around',
        },
        areaBotoes: {
            flexDirection: 'row',
            justifyContent: "space-evenly"
        },
        botao: {
            width: '45%',
            height: 25,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
    return (
        <View style={[style.caixa]}>
            <View>
                <img width={195} height={195} style={{borderRadius : 10}} src={imagem || 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/800px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg'}/>
            </View>
            <View style={style.areaTextos}>
               <View style={{padding: 10}}>
                <Text style={[Estilo.texto15px, Estilo.textoCorSecundaria, {fontWeight: 'bold'}]}>{nome || "Nome do produto"}</Text>
                    <Text style={[Estilo.texto15px, Estilo.textoCorSecundaria, {fontWeight: 'bold'}]}>Estoque: {estoque}</Text>
                    <Text style={[Estilo.texto15px, Estilo.textoCorSecundaria, {fontWeight: 'bold'}]}>Valor: {valor}</Text>
                    <Text style={[Estilo.texto15px, Estilo.textoCorSecundaria, {fontWeight: 'bold'}]}>Tags: {tags}</Text>
               </View>
                <View style={[style.areaBotoes]}>
                    <TouchableOpacity style={[style.botao, Estilo.corSecundariaBackground]} onPress={onPressEditar}>
                        <Text style={[Estilo.texto15px, {fontWeight: 'bold', color: 'white'}]}>EDITAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.botao, {backgroundColor: '#E70F0F'}]} onPress={onPressExcluir}>
                    <Text style={[Estilo.texto15px, {fontWeight: 'bold', color: 'white'}]}>EXCLUIR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}