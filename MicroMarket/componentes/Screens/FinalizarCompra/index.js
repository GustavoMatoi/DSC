import React, {useState, useEffect} from "react";
import {Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import Estilo from "../../Estilo";
import ProdutoNoCarrinho from "./ProdutoNoCarrinho";
import RadioBotao from "./RadioBotao";
export default props => {
    const produtos = [1,2,3,4,5,6]
    const style = StyleSheet.create({
        container: {
            width: '100%',
            minHeight: '100%',
        },
        areaProdutos: {
            marginTop: 10,
            width: '100%',
            alignItems: 'center'
        }
    })

    return (
        <ScrollView style={[style.container, Estilo.corSecundariaBackground]}>
            <Text style={[Estilo.tituloMedio, Estilo.textoCorPrimaria, Estilo.centralizado]}>FINALIZAR COMPRA</Text>
            <View style={[style.areaProdutos]}>
                <View style={{alignItems: 'flex-start'}}>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria, {marginLeft: '5%'}]}>ITENS </Text>
                </View>
                {produtos.map((i) => 
                                    <View style={[{marginTop: '5%'}]}>
                                    <ProdutoNoCarrinho/>
                
                                </View>
                )}

            </View>
            <View style={[style.areaProdutos]}>
                <View style={{alignItems: 'flex-start'}}>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria, {marginLeft: '5%'}]}>PAGAMENTO </Text>
                </View>
                <View style={[{marginTop: '5%',  width:'95%'}]}>
                    <RadioBotao options={['Cartão de Crédito', 'Pix', 'Boleto Bancário']} onChangeSelect={(item) => console.log(item)}/>

                </View>
                <View style={[{marginTop: '5%', width:'95%'}]}>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria, Estilo.centralizado]}>ENVIAR PARA</Text>
                    <Text style={[Estilo.texto15px, Estilo.textoCorPrimaria]}>Endereço do usuário</Text>
                </View>
            </View>
            <View style={[{marginVertical: '10%', alignItems: 'center'}]}>
                <TouchableOpacity style={[{width: '80%', height: 50, backgroundColor: '#C0FFBB', justifyContent: 'center', alignItems: 'center', borderRadius: 20}]}>
                    <Text style={[Estilo.tituloPequeno, {color: '#024C00'}]}>Finalizar compra</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}