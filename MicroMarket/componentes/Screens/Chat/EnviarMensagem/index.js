import React from "react";
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Estilo from "../../../Estilo";
import { MaterialIcons } from '@expo/vector-icons'; 

export default props => {
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        },
        textInput: {
            width: '85%',
            height: 40
        },
        botao: {
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
    return (
        <View style={[style.container, Estilo.corSecundariaBackground]}>
            <TextInput
            style={[Estilo.corLight, style.textInput]}
            />
            <TouchableOpacity style={[style.botao, Estilo.corPrimariaBackground]}>
            <MaterialIcons name="schedule-send" size={30} color="#DEE1FF" />
            </TouchableOpacity>
        </View>
    )
}