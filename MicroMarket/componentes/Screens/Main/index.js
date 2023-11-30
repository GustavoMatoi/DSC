import React,{useState,  useEffect, useCallback} from 'react'
import { TextInput, Text, StyleSheet, View, FlatList, SafeAreaView, Alert ,    TouchableOpacity} from 'react-native'
import ProdutoPublicado from './ProdutoPublicado'
import BotaoPesquisa from './BotaoPesquisa'
import Estilo from '../../Estilo'
import { collection, getFirestore, getDocs, doc, query, orderBy, onSnapshot } from 'firebase/firestore'
import { criarDocumento, recuperarDocumentos } from '../../../bd/CRUD'
import {firebase} from '../../../bd/config'
import { FontAwesome } from '@expo/vector-icons'; 

export default ({navigation}) => {
    const [pesquisa, setPesquisa] = useState('')
    const [listagem, setListagem] = useState([])
    const [listagemInicial, setListagemInicial] = useState([])
    const listagemProdutos = useCallback(async () => {
        const produtos = [];
        const db = getFirestore();
        try {
            const meiRef = collection(db, 'Microempreendedores');
            const querySnapshot = await getDocs(meiRef);
    
            const promises = querySnapshot.docs.map(async (meiDoc) => {
                const meiProdutos = await recuperarDocumentos('Microempreendedores', meiDoc.get('email'), 'Produtos');
                produtos.push(meiProdutos);
            });
    
            await Promise.all(promises);
            const novosProdutos = produtos.reduce((flatArray, nestedArray) => flatArray.concat(nestedArray), [])
            setListagem(novosProdutos);
            console.log('listagem', listagem);
            setListagemInicial(novosProdutos)
        } catch (e) {
            console.log(e);
        }
    }, []);
    
    const adicionarProdutoNoCarrinho = (produto) => {
        if(criarDocumento(produto, 'Clientes', email, 'Carrinho', produto.nome)){
            Alert.alert("Produto adicionado!", "Produto adicionado com sucesso no carrinho.")
            console.log(produto)
        } else { 
            Alert.alert("Ocorreu um erro", "Ocorreu um erro ao adicionar o produto no carrinho. Tente novamente mais tarde.")
        }
    }

    const [mensagens, setMensagens] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [email, setEmail] = useState('')
    useEffect(() => {
        const user = firebase.auth().currentUser
        console.log('user', user)
        setEmail(user.email)


    }, [])

    useEffect(() => {
        listagemProdutos();
    }, [listagemProdutos]);

    const style = StyleSheet.create({
        container : {
            width: '95%',
            height: 50,
            borderRadius: 25,
            padding: 5,
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        textInput: {
            width: '80%',
            height: 40,
            borderRadius: 10,
            padding: 5
        },
        botaoPesquisa: {
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0F0765'
        }
    })
    
    const filtraProdutos = (pesquisa) => {
        if(pesquisa == ''){
            setListagem(listagemInicial)
        } else {
            const filteredList = listagem.filter((produto) => produto.nome.toLowerCase().includes(pesquisa.toLowerCase()));
            setListagem(filteredList)
        }

    }
        return (
        <SafeAreaView style={[Estilo.corPrimariaBackground, {marginBottom: 50}]}>
            <Text style={[Estilo.textoCorSecundaria, Estilo.tituloPequeno, {marginTop: 20}]}>Pesquise algum produto...</Text>
        <View style={[style.container, Estilo.corSecundariaBackground]}>
            <TextInput style={[style.textInput, Estilo.corLight]}
                        placeholder='Pesquisar...'
                        value={pesquisa}
                        onChangeText={(text)=> setPesquisa(text)}/>
            <TouchableOpacity style={[style.botaoPesquisa]} onPress={()=>filtraProdutos(pesquisa)}>
                <FontAwesome name="search" size={24} color="#B8BFFF" />
            </TouchableOpacity>
        </View>
            {listagem.length == 0? <Text>Carregando..</Text> : 
            
            <FlatList
            data={listagem}
            renderItem={({ item }) => (
                <ProdutoPublicado
                nomeProduto={item.nome}
                nomeVendedor={item.nomeVendedor}
                uriImagem={item.imagem}
                descricao={item.descricao}
                tags={item.tags}
                preco={item.precoIndividual}
                onPressCarrinho={()=>adicionarProdutoNoCarrinho(item)}
                onPressMensagens={()=> navigation.navigate('Chat', {vendedor: item.nomeVendedor, email})}
                onPressInformacoes={item.onPressInformacoes}
                />
  )}
/>}
                
        </SafeAreaView>
    )
}