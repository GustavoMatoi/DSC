import React, {useState, useEffect, useCallback} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Dimensions} from 'react-native'
import Estilo from '../../Estilo'
import Header from './Header'
import MensagemEnviada from './Mensagem/MensagemEnviada'
import MensagemRecebida from './Mensagem/MensagemRecebida'
import EnviarMensagem from './EnviarMensagem'

export default props => {

    const height = Dimensions.get("screen").height
    const style = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'space-between'
        }
    })
    return (
        <View style={[style.container, Estilo.corPrimariaBackground]}>
            <Header/>
            <View>
                <MensagemEnviada/>
                <MensagemRecebida/>
            </View>

            <EnviarMensagem/>
        </View>
    )
}
