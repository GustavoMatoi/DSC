import React, {useState} from "react";
import {Text, View, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import Estilo from "../../Estilo";
import {firebase} from '../../../api/config'
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";

export default props => {
    const [mensagem, setMensagem] = useState('')
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '10%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        areaDigitarMensagem: {
            width: '80%',
            height: '80%',
            backgroundColor: 'white',
            elevation: 10,
            borderRadius: 5,
            padding: 10
        },
        botao: {
            width: '15%',
            height: '80%',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    const enviarMensagem = (mensagem) => {
        const firebase = getFirestore()
        const mensagemRef = collection(
          firebase,
          'Microempreendedores',
         'teste',
          'Mensagens',
          `Mensagens gustavo`,
          'todasAsMensagens' 
        );
      
        const novaMensagem = {
          texto: mensagem,
          data: serverTimestamp(), // Timestamp: data atual
          remetente: 'teste',
          destinatario: 'gustavo',
        };
      
        addDoc(mensagemRef, novaMensagem)
          .then((docRef) => {
            console.log('Nova mensagem inserida com o ID: ', docRef.id);
          })
          .catch((error) => {
            console.log('Erro ao inserir a nova mensagem', error);
          });
          setMensagem('')
      };

    return(
        <View style={[style.container, Estilo.corSecundariaBackground]}>
            <TextInput style={[ style.areaDigitarMensagem]}
            placeholder="Digite sua mensagem...."
            placeholderTextColor={'#e3e3e3'}
            value={mensagem}
            onChangeText={(text)=> setMensagem(text)}
            />
            <TouchableOpacity style={[style.botao, Estilo.corPrimariaBackground]} onPress={() =>enviarMensagem(mensagem)}>
                <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>ENVIAR</Text>
            </TouchableOpacity>
        </View>
    )
}