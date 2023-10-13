import React, {useState, useEffect, useCallback} from "react";
import {View, StyleSheet, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import Estilo from "../../Estilo";
import ProdutoNoCarrinho from "./ProdutoNoCarrinho";
import { excluirDocumento, recuperarDocumentos } from "../../../bd/CRUD";
import { deleteDoc, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

export default ({navigation, route}) => {
    const {email} = route.params
    const [produtosNoCarrinho, setProdutosNoCarrinho] = useState([])
    const [total, setTotal] = useState(0)
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
        },
        titulo: {
            width: '100%',
            padding: 15
        },
        footer: {
            width: '100%',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        botao: {
            height: 40,
            borderRadius: 20,
            width: 180,
            justifyContent: 'center',
            alignItems: 'center',
        }
    })

    const fetchData = useCallback(async () => {
        try {
            const data = await recuperarDocumentos('Clientes', email, 'Carrinho');
            console.log('Data:', data);
            setProdutosNoCarrinho(data);
    
            const soma = data.reduce((accumulator, currentItem) => {
                const preco = currentItem.precoIndividual || 0; // Handle cases where precoIndividual is undefined
                return accumulator + preco;
            }, 0);
    
            setTotal(soma); 
        } catch (error) {
            console.error("Erro ao recuperar os dados:", error);
        }
    }, []);
    

    const excluirProduto = useCallback(async (produto) => {
        console.log(produto.nome)
        excluirDocumento('Clientes', email, 'Carrinho', produto.nome)
        fetchData()
    }, []);
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    
    
    return (
        <View  style={[style.container, Estilo.corPrimariaBackground]}>
            <View style={[style.titulo]}>
                <Text style={[Estilo.tituloMedio, Estilo.textoCorSecundaria]}>CARRINHO</Text>
            </View>
            <FlatList
            data={produtosNoCarrinho}
            renderItem={({item}) =>  {return (
                <View style={[{marginVertical: 20}]}>

                    <ProdutoNoCarrinho
                    nome={item.nome}
                    descricao={item.descricao}
                    preco={item.precoIndividual}
                    imagem={item.imagem}
                    onPress={() => excluirProduto(item)}
                    />

                </View>
            ) }}
            />

            
            <View style={[style.footer, Estilo.corSecundariaBackground]}>
                <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria]}>
                    R$ {total}
                </Text>
                <TouchableOpacity style={[style.botao, {backgroundColor:'#6DFB72' }]} onPress={()=> navigation.navigate("Finalizar compra", {produtos: produtosNoCarrinho, total: total, email})}>
                    <Text style={[Estilo.texto15px, {color: 'green', fontWeight: 'bold'}]}>FINALIZAR COMPRA</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}