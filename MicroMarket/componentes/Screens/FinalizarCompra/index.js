import React, {useState, useEffect} from "react";
import {Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import Estilo from "../../Estilo";
import ProdutoNoCarrinho from "./ProdutoNoCarrinho";
import RadioBotao from "./RadioBotao";
export default ({navigation, route}) => {
    const [selecionado, setSelecionado] = useState(0)
    const {produtos, total} = route.params
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
    console.log('produtos', total)
    return (
        <ScrollView style={[style.container, Estilo.corSecundariaBackground]}>
            <Text style={[Estilo.tituloMedio, Estilo.textoCorPrimaria, Estilo.centralizado]}>FINALIZAR COMPRA</Text>
            <View style={[style.areaProdutos]}>
                <View style={{alignItems: 'flex-start'}}>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria, {marginLeft: '5%'}]}>ITENS </Text>
                </View>
                {produtos.map((i) => 
                                    <View style={[{marginTop: '5%'}]}>
                                <ProdutoNoCarrinho
                                nome={i.nome}
                                imagem={i.imagem}
                                descricao={i.descricao}
                                />                
                                </View>
                )}

            </View>
            <View style={[style.areaProdutos]}>
                <View style={{alignItems: 'flex-start'}}>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria, {marginLeft: '5%'}]}>PAGAMENTO </Text>
                </View>
                <View style={[{marginTop: '5%',  width:'95%'}]}>
                <RadioBotao
                            options={['Cartão de Crédito', 'Boleto', 'Pix']}
                            selected={selecionado}
                            onChangeSelect={(opt, i) => { setSelecionado(i);}}
                        />
                </View>
                <View style={[{marginTop: '5%', width:'95%'}]}>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria, Estilo.centralizado]}>ENVIAR PARA</Text>
                    <Text style={[Estilo.texto15px, Estilo.textoCorPrimaria]}>Endereço do usuário</Text>
                </View>
                <View style={[{marginTop: '5%', width:'95%'}]}>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria, Estilo.centralizado]}>TOTAL</Text>
                    <Text style={[Estilo.texto15px, Estilo.textoCorPrimaria]}>R${total}</Text>
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