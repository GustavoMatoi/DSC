import React, { useState } from "react";
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Estilo from "../../../Estilo";
import { MaterialIcons } from '@expo/vector-icons'; 
import { addDoc, collection, doc, getFirestore, serverTimestamp } from "firebase/firestore";
import { criarDocumento } from "../../../../bd/CRUD";

export default ({vendedor, email}) => {
    const [mensagem, setMensagem] = useState('')
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        },
        textInput: {
            width: '85%',
            height: 40
        },
        botao: {
            width: 40,
            height: 40,
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
         vendedor,
          'Mensagens',
          `Mensagens ${email}`,
          'todasAsMensagens' 
        );
      
        const novaMensagem = {
          texto: mensagem,
          data: serverTimestamp(), // Timestamp: data atual
          remetente: email,
          destinatario: vendedor,
        };

        const mensagemRef2 = doc(
          firebase,
          'Microempreendedores',
          vendedor,
          'Mensagens',
          `Mensagens ${email}`
        );

        const msg2 = {remetente: email}
          criarDocumento(msg2, 'Microempreendedores', vendedor, 'Mensagens', `Mensagens ${email}`)

        addDoc(mensagemRef, novaMensagem)
          .then((docRef) => {
            console.log('Nova mensagem inserida com o ID: ', docRef.id);
          })
          .catch((error) => {
            console.log('Erro ao inserir a nova mensagem', error);
          });
          setMensagem('')
      };
    return (
        <View style={[style.container, Estilo.corSecundariaBackground]}>
            <TextInput
            style={[Estilo.corLight, style.textInput]}
            onChangeText={(text) => setMensagem(text)}
            placeholder="Digite sua mensagem..."
            value={mensagem}
            />
            <TouchableOpacity style={[style.botao, Estilo.corPrimariaBackground]} onPress={()=> enviarMensagem(mensagem)}>
            <MaterialIcons name="schedule-send" size={30} color="#DEE1FF" />
            </TouchableOpacity>
        </View>
    )
}