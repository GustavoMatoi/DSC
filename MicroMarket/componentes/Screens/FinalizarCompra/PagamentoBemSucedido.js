import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import Estilo from "../../Estilo";
import { MaterialIcons } from '@expo/vector-icons'; 

export default ({navigation}) => {

    return (
        <View style={[style.container, Estilo.corSecundariaBackground]}>
            <View style={[style.bolota]}>
            <MaterialIcons name="payments" size={100} color="white" />
            </View>
            <View style={{marginTop: '10%', width: '100%', alignItems: 'center'}}>
            <Text style={[Estilo.tituloPequeno, {textAlign: 'center', marginBottom: 40}, Estilo.textoCorPrimaria]}>Sua compra foi bem sucedida e já alertamos o vendedor!</Text>
            <TouchableOpacity style={[style.botao]} onPress={() => navigation.navigate('Principal')}>
                <Text style={[Estilo.tituloPequeno, {color: 'white'}]}>FINALIZAR</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center'
    },
    bolota: {
        width: 150,
        height: 150,
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#79F08A',
        marginTop: '30%'
    },
    botao : {
        width: '60%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#79F08A',
    }
})