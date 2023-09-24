import React, {useState, useEffect} from 'react'
import { TextInput, StyleSheet, TouchableOpacity, View } from 'react-native'
import Estilo from '../../Estilo'
import { FontAwesome } from '@expo/vector-icons'; 

export default ({onPress}) => {
    const [pesquisa,setPesquisa] = useState('')
    const style = StyleSheet.create({
        container : {
            width: '95%',
            height: 50,
            borderRadius: 25,
            padding: 5,
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        textInput: {
            width: '80%',
            height: 40,
            borderRadius: 10,
            padding: 5
        },
        botaoPesquisa: {
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0F0765'
        }
    })
    return (
        <View style={[style.container, Estilo.corSecundariaBackground]}>
            <TextInput style={[style.textInput, Estilo.corLight]}
                        placeholder='Pesquisar...'
                        value={pesquisa}
                        onChangeText={(text)=> setPesquisa(text)}/>
            <TouchableOpacity style={[style.botaoPesquisa]} onPress={onPress}>
                <FontAwesome name="search" size={24} color="#B8BFFF" />
            </TouchableOpacity>
        </View>
    )
}