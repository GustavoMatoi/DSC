import React from "react";
import {Text, TextInput, StyleSheet} from 'react-native'
import Estilo from "../Estilo";

export default  ({onChangeSelect, placeholder}) => {

    return(
        <TextInput
            onChangeText={onChangeSelect}
            placeholder={placeholder}
            style={style.container}
        />
    )
}

const style = StyleSheet.create({
    container: {
        width: '90%',
        height: 50, 
        padding: 10, 
        fontSize: 15,
        backgroundColor: 'white',
        borderRadius: 10
    }
})