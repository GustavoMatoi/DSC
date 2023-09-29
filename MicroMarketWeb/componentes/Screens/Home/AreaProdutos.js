import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'; // Removed import for FlatList
import Estilo from "../../Estilo";
import { TouchableOpacity } from "react-native-web";

export default props => {
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

    const produtos = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    return (
        <View style={[style.container]}>
            <View style={[{height: '20%', padding: 20}]}>
                <Text style={[Estilo.tituloMedio, Estilo.textoCorSecundaria]}>Produtos recentes</Text>
            </View>
            <View style={style.areaProdutos}>
                {produtos.slice(0,5).map((i) =>
                    <Image
                        source={{ uri: "https://m.media-amazon.com/images/I/71JZjGQi3lL._AC_UF894,1000_QL80_.jpg" }}
                        style={style.imagem}
                    />
                )}
            </View>
            <View style={[{alignItems: 'flex-end', width: '98%'}]}>
                <TouchableOpacity style={[{width: 200, marginBottom: 20, height: 50, justifyContent: 'center', alignItems: 'center',  borderRadius: 20, marginTop: 10}, Estilo.corSecundariaBackground]}>
                    <Text style={[Estilo.texto15px, Estilo.textoCorPrimaria, {fontWeight: 'bold'}]}>VISUALIZAR PRODUTOS</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
