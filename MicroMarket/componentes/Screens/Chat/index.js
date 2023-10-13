import React, {useState, useEffect, useCallback, useLayoutEffect} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Dimensions, ScrollView} from 'react-native'
import Estilo from '../../Estilo'
import Header from './Header'
import MensagemEnviada from './Mensagem/MensagemEnviada'
import MensagemRecebida from './Mensagem/MensagemRecebida'
import EnviarMensagem from './EnviarMensagem'
import { criarDocumento, recuperarDocumentos } from '../../../bd/CRUD'
import { collection, doc, getDoc, getDocs, getFirestore, onSnapshot, orderBy, query, exists } from 'firebase/firestore'

export default ({navigation, route}) => {
    const {vendedor, email} = route.params
    const [imagem, setImagem] = useState('')
    const [mensagens, setMensagens] = useState([])
    const [carregando, setCarregando] = useState(false)
    const height = Dimensions.get("screen").height
    const style = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'space-between'
        }
    })
    console.log(vendedor)

    const recuperarMensagens = useCallback(async () => {
      const db = getFirestore()
      try {
        const mensagemRef = collection(
          db,
          'Microempreendedores',
          vendedor,
          'Mensagens',
          `Mensagens ${email}`,
          'todasAsMensagens' 
        );
    
        const q = query(mensagemRef, orderBy('data', 'asc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const mensagensArray = [];
      querySnapshot.forEach((doc) => {
        mensagensArray.push(doc.data());
      });
      setMensagens(mensagensArray);
    });
    
        return () => unsubscribe();
      } catch (error) {
        console.log('Erro ao recuperar as mensagens:', error);
      }
    }, [email]);
    useLayoutEffect(() => {
      recuperarMensagens();
    }, [recuperarMensagens]);
    
      const recuperarImagem = useCallback(async () => {
        const db = getFirestore();
        const imagemRef = doc(
          db, 'Microempreendedores', vendedor
        );

            const data = await getDoc(imagemRef)
            const img = data.data().imagem
            setImagem(img) 
      }, [])


      useEffect(() => {
       recuperarImagem()
        console.log('imagem', imagem) 
      }, []) 
      
      
      return (
        <View style={[style.container, Estilo.corPrimariaBackground]}>
            {imagem !== '' ?             <>
            <Header vendedor={vendedor} imagem={imagem}/>
            <ScrollView>
                {mensagens.map((i) => {
                    return(
                        i.destinatario === email? 
                    <MensagemRecebida texto={i.texto}/> :
                    <MensagemEnviada texto={i.texto}/>
                    )

                }) }
            </ScrollView>

            <EnviarMensagem vendedor={vendedor} email={email}/></> : <Text>Carregando...</Text> }
        </View>
    )
}
