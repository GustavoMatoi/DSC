import React,{useState,  useEffect} from 'react'
import { TextInput, Text, StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import ProdutoPublicado from './ProdutoPublicado'
import BotaoPesquisa from './BotaoPesquisa'
import Estilo from '../../Estilo'
export default props => {
    const produtos = [
        {
        nomeProduto: 'Arte digital',
        nomeVendedor: 'Gustavo',
        uriImagem: 'https://www.agenciaeplus.com.br/wp-content/uploads/2021/12/pagina-de-produto.jpg',
        descricao: 'Uma arte online para ajudar a impulsionar seus negócios',
        preco: 10,
        tags: ['#Arte', '#Design', '#Marketing'],
        onPressCarinho: () => console.log("Apertei no carrinho"),
        onPressMensagens: () => console.log("Apertei nas mensagens"),
        onPressInformacoes: () => console.log("Apertei nas informações")   
        },
        {
        nomeProduto: 'Arte digital',
        nomeVendedor: 'Gustavo',
        uriImagem: 'https://www.agenciaeplus.com.br/wp-content/uploads/2021/12/pagina-de-produto.jpg',
        descricao: 'Uma arte online para ajudar a impulsionar seus negócios',
        preco: 10,
        tags: ['#Arte', '#Design', '#Marketing'],
        onPressCarinho: () => console.log("Apertei no carrinho"),
        onPressMensagens: () => console.log("Apertei nas mensagens"),
        onPressInformacoes: () => console.log("Apertei nas informações")   
        },
        {
        nomeProduto: 'Arte digital',
        nomeVendedor: 'Gustavo',
        uriImagem: 'https://www.agenciaeplus.com.br/wp-content/uploads/2021/12/pagina-de-produto.jpg',
        descricao: 'Uma arte online para ajudar a impulsionar seus negócios',
        preco: 10,
        tags: ['#Arte', '#Design', '#Marketing'],
        onPressCarinho: () => console.log("Apertei no carrinho"),
        onPressMensagens: () => console.log("Apertei nas mensagens"),
        onPressInformacoes: () => console.log("Apertei nas informações")   
        },
        {
        nomeProduto: 'Arte digital',
        nomeVendedor: 'Gustavo',
        uriImagem: 'https://www.agenciaeplus.com.br/wp-content/uploads/2021/12/pagina-de-produto.jpg',
        descricao: 'Uma arte online para ajudar a impulsionar seus negócios',
        preco: 10,
        tags: ['#Arte', '#Design', '#Marketing'],
        onPressCarinho: () => console.log("Apertei no carrinho"),
        onPressMensagens: () => console.log("Apertei nas mensagens"),
        onPressInformacoes: () => console.log("Apertei nas informações")   
        },

    ]
    return (
        <SafeAreaView style={[Estilo.corPrimariaBackground, {marginBottom: 100}]}>
            <View style={[Estilo.centralizado, {marginVertical: 10}]}>
                <Text style={[Estilo.textoCorSecundaria, Estilo.tituloPequeno, Estilo.centralizado]}>PRODUTOS DISPONÍVEIS</Text>
                <BotaoPesquisa
                onPress={()=>console.log("Pesqusia")}/>
            </View>
            <FlatList
            data={produtos}
            renderItem={({ item }) => (
                <ProdutoPublicado
                nomeProduto={item.nomeProduto}
                nomeVendedor={item.nomeVendedor}
                uriImagem={item.uriImagem}
                descricao={item.descricao}
                tags={item.tags}
                preco={item.preco}
                onPressCarrinho={item.onPressCarinho}
                onPressMensagens={item.onPressMensagens}
                onPressInformacoes={item.onPressInformacoes}
                />
  )}
/>
        </SafeAreaView>
    )
}