import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Estilo from "../../Estilo";
export default ({navigation, user, vendas}) => {
    const style = StyleSheet.create({
        container: {
            width: '50%',
            height: '100%',
            borderEndColor: '#B8BFFF',
            borderEndWidth: 5,
            justifyContent: 'space-around',
            alignItems: 'center'
        }
    })


    return (
        <View style={style.container}>
            <View style={{width: '90%'}}>
            <Text style={[Estilo.tituloMedio, Estilo.textoCorSecundaria]}>Dashboards</Text>
            </View>
            <img src="https://www.zohowebstatic.com/sites/default/files/column-chart.jpg" width={250} height={250}></img>
            <TouchableOpacity style={[Estilo.corSecundariaBackground, {width: 255, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }]} onPress={()=>navigation.navigate('Dashboards', {user, vendas})}>
                <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria]}>VISUALIZAR DADOS</Text>
            </TouchableOpacity>
        </View>
    )
}