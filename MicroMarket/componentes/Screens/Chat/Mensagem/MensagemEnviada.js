import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, {Polygon} from 'react-native-svg'
import Estilo from "../../../Estilo";

export default ({texto}) => {
    const style = StyleSheet.create( {
        container: {
            width: '100%',
            flexDirection: 'row',    
        },
        balao: {
            width: '90%',
            marginTop: 5,
            borderRadius: 10,
            padding: 5
    
        },
        triangulo: {
            marginLeft: -10
        }
    })
    return (
        <View style={[style.container]}>
        <View style={[style.balao, Estilo.corLight]}>
        <Text style={[Estilo.textoCorPrimaria, Estilo.texto15px]}>{texto || 'aaa'}</Text>

        </View>
        <Svg
    width={20}
    height={20}
    viewBox={`0 0 ${20} ${20}`}
    style={[{ transform: [{ rotate: '-90deg' }], borderWidth: 1, marginTop: 10, marginLeft: -2}]}
  >
    <Polygon points={` 0, 0,${20},0 ${20 / 2},${20}`} fill={'#DEE1FF'} />
  </Svg>     
</View>
    )
}