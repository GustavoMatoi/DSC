import React,{useState,  useEffect, useCallback} from 'react'
import { TextInput, Text, StyleSheet, View, FlatList, SafeAreaView, Alert } from 'react-native'
import ProdutoPublicado from './ProdutoPublicado'
import BotaoPesquisa from './BotaoPesquisa'
import Estilo from '../../Estilo'
import { collection, getFirestore, getDocs, doc, query, orderBy, onSnapshot } from 'firebase/firestore'
import { criarDocumento, recuperarDocumentos } from '../../../bd/CRUD'
import { TouchableOpacity } from 'react-native-web'
import {firebase} from '../../../bd/config'
export default ({navigation}) => {
    const [listagem, setListagem] = useState([])
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
        } catch (e) {
            console.log(e);
        }
    }, []);
    
    const adicionarProdutoNoCarrinho = (produto) => {
        if(criarDocumento(produto, 'Clientes', email, 'Carrinho', produto.nome)){
            Alert.alert("Produto adicionado!", "Produto adicionado com sucesso no carrinho.")
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
        return (
        <SafeAreaView style={[Estilo.corPrimariaBackground, {marginBottom: 100}]}>
            <View style={[Estilo.centralizado, {marginVertical: 10}]}>
                <Text style={[Estilo.textoCorSecundaria, Estilo.tituloPequeno, Estilo.centralizado]}>PRODUTOS DISPONÍVEIS</Text>
                <BotaoPesquisa
                onPress={()=>console.log("Pesqusia")}/>
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