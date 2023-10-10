import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Estilo from "../../Estilo";
import AreaEsquerda from "./AreaEsquerda";
import AreaProdutos from "./AreaProdutos";
import AreaDashboards from "./AreaDashboards";
import AreaVendas from "./AreaVendas";

export default ({navigation}) => {
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            flexDirection:'row'
        }
    })
    return (
        <View style={[style.container, Estilo.corPrimariaBackground]}>
            <AreaEsquerda navigation={navigation}></AreaEsquerda>
            <View style={{flexDirection: 'column', width: '80%'}}>
                <AreaProdutos navigation={navigation}/>
            <View style={[{flexDirection: 'row', width: '100%', height: '57%'}]}>
            <AreaDashboards/>
                <AreaVendas/>
            </View>
            </View>
        </View>
    )
}