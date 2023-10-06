import React from "react";
import {Text, TextInput, StyleSheet} from 'react-native'
import Estilo from "../Estilo";

export default  ({onChangeText, placeholder}) => {

    return(
        <TextInput
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={style.containerInput}
        />
    )
}

const style = StyleSheet.create({
    containerInput: {
        width: '90%',
        height: 50, 
        padding: 10, 
        fontSize: 15,
        backgroundColor: 'white',
        borderRadius: 10
    }
})