import React from "react";
import {Text, View, TouchableOpacity, ScrollView, StyleSheet, FlatList} from 'react-native'
import Estilo from "../../Estilo";
import Header from "./Header";
import AreaMensagem from "./AreaMensagem";
import MensagemEnviada from "./MensagemEnviada";
import MensagemRecebida from "./MensagemRecebida";
export default ({mensagens, cliente, email, remetente}) => {
    const style = StyleSheet.create({
        container: {
            width: '80%',
            height: '100%',
            backgroundColor: '#D5D6E0',
        },
        chat: {
            width: '100%',
            height: '80%'
        },
    });

    console.log('email cliente remetnete', email, cliente, remetente)
    
    return (
        <View style={style.container}>
            <Header destinatario={'CHAT'} />
            <ScrollView style={style.chat}>
                {mensagens.map((i) => {
                    return(
                        i.remetente === email ? <MensagemEnviada texto={i.texto}></MensagemEnviada> : <MensagemRecebida texto={i.texto}></MensagemRecebida>
                    
                    )
                })}

            </ScrollView>

            <AreaMensagem remetente={remetente} email={email}  />
        </View>
    );
}
