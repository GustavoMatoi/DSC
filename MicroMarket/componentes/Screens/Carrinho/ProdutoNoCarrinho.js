import React, {useState, useEffect} from 'react'
import {View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native'
import Estilo from '../../Estilo'
import { Entypo } from '@expo/vector-icons'; 

export default props => {
    const style = StyleSheet.create({
        container: {
            width: '95%',
            minHeight: 120,
            borderRadius: 20,
        },
        areaInfos: {
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row'
        },
        areaTexto: {
            width: '60%',
        },
        botao: {
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            marginTop: -20,
        }
    })
    return (
        <View style={[style.container, Estilo.corSecundariaBackground]}>
            <View style={[{width: '100%', alignItems: 'flex-end'}]}>
                <TouchableOpacity style={[style.botao]}>
                    <Entypo name="trash" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={[Estilo.corSecundariaBackground, style.areaInfos]}>
                <View style={[style.areaImagem]}>
                    <Image 
                    width={80}
                    height={80}
                    source={{uri: 'https://acdn.mitiendanube.com/stores/002/037/298/products/conjunto_feminino_cropped_short_estampado_roupa_feminina_2313_1_a4a6cacb9f9363239bc0e1fa78ccdc2a-239bc0e1fa78ccdc2a16492675488736-640-0.jpg'}}/>
                    
                </View>
    
                <View style={[style.areaTexto]}>
                    <View>
                        <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria]}>Nome do produto</Text>
                    </View>
                    <View>
                        <Text style={[Estilo.texto12px, Estilo.textoCorPrimaria]}>Descrição Descrição Descrição Descrição</Text>
                    </View>
                    <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
                        <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria]}>R$ Preço</Text>
                    </View>
                </View>
            </View>
        </View>

    )
}