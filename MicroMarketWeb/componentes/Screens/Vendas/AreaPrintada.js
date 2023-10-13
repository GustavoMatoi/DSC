import React from "react";
import {Text, View, Button, StyleSheet} from 'react-native'
import { printToFileAsync } from 'expo-print'
import { shareAsync } from 'expo-sharing'
import Estilo from "../../Estilo";

export default ({route, navigation}) => {
    const {item} = route.params
    const gerarPdf = async (item) => {
        console.log(item)
        const arquivo = await printToFileAsync({
            html: `    <html>
            <body>
                <p><strong>Método:</strong> ${item.metodo}</p>
                <p><strong>Produto:</strong> ${item.produto.nome}</p>
                <p><strong>Descrição:</strong> ${item.produto.descricao}</p>
                <p><strong>Estoque:</strong> ${item.produto.estoque}</p>
                <p><strong>Imagem:</strong> <img src="${item.produto.imagem}" width: 200px; /></p>
                <p><strong>Nome do Vendedor:</strong> ${item.nomeVendedor}</p>
                <p><strong>Preço Individual:</strong> ${item.produto.precoIndividual}</p>
            </body>
        </html>`, 
            base64: false
        });

        const { uri } = await Print.printToFileAsync({ html: arquivo });
        await Print.printAsync({ uri });
        navigation.goBack()
        }
        const style= StyleSheet.create({
            container: {
                width: '100%',
                height: '100%',

            }
        })

    return(
        <View style={[style.container, Estilo.corSecundariaBackground]}>
            <View style={[{padding: 20, justifyContent: 'space-between'}]}>
                <Text style={[{fontWeight: 'bold'}, Estilo.textoCorPrimaria]}>Método:{item.metodo}</Text>
                <Text style={[{fontWeight: 'bold'}, Estilo.textoCorPrimaria]}>Produto: {item.produto.nome}</Text>
                <Text style={[{fontWeight: 'bold'}, Estilo.textoCorPrimaria]}>Descrição: {item.produto.descricao}</Text>
                <Text style={[{fontWeight: 'bold'}, Estilo.textoCorPrimaria]}>Estoque: {item.produto.estoque}</Text>
                <View style={[{flexDirection: 'row'}]}>
                <Text style={[{fontWeight: 'bold'}, Estilo.textoCorPrimaria]}>Imagem: <img width={500} height={500} src={item.produto.imagem}/></Text>

                </View>
                <Text style={[{fontWeight: 'bold'}, Estilo.textoCorPrimaria]}>Nome do Vendedor: {item.nomeVendedor}</Text>
                <Text style={[{fontWeight: 'bold'}, Estilo.textoCorPrimaria]}>Preço Individual: {item.produto.precoIndividual}</Text>
            </View>
        <Button title="Printar" style={{width: '5%'}} onPress={()=>gerarPdf(item)}></Button> 
        </View>
    )
}