import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'; 
import Estilo from "../../Estilo";

export default ({navigation, produtos, user}) => {
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '43%',
            borderBottomWidth: 5,
            borderBottomColor: '#B8BFFF'
        },
        imagem: {
            width: 150,
            height: 150
        },
        areaProdutos: {
            marginHorizontal: '10%',
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'flex-end',
            justifyContent: 'space-evenly'
        }
    })

    const produtosAux = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    return (
        <View style={[style.container]}>
            <View style={[{height: '20%', padding: 20}]}>
                <Text style={[Estilo.tituloMedio, Estilo.textoCorSecundaria]}>Produtos recentes</Text>
            </View>
            <View style={style.areaProdutos}>
                {produtos.length > 0 ?                 produtos.slice(0,5).map((i) =>
                    <Image
                        source={{ uri: i.imagem }}
                        style={style.imagem}
                    />
                ) : <View>
                        <Text style={[Estilo.tituloMedio, {color: 'white'}]}>Cadastre algum produto</Text>
                        <TouchableOpacity style={[{width: 200, marginBottom: 20, height: 50, justifyContent: 'center', alignItems: 'center',  borderRadius: 20, marginTop: 10}, Estilo.corSecundariaBackground]} onPress={() => navigation.navigate('Produtos', {user: user})}>
                            <Text style={[Estilo.texto15px, Estilo.textoCorPrimaria, {fontWeight: 'bold'}]}>CADASTRAR PRODUTO</Text>
                        </TouchableOpacity>     
                    </View>}
            </View>
            <View style={[{alignItems: 'flex-end', width: '98%'}]}>
                <TouchableOpacity style={[{width: 200, marginBottom: 20, height: 50, justifyContent: 'center', alignItems: 'center',  borderRadius: 20, marginTop: 10}, Estilo.corSecundariaBackground]} onPress={() => navigation.navigate('Produtos', {user: user})}>
                    <Text style={[Estilo.texto15px, Estilo.textoCorPrimaria, {fontWeight: 'bold'}]}>VISUALIZAR PRODUTOS</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
