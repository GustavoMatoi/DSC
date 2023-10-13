import React, { useEffect, useState } from "react";
import {Text, View} from 'react-native'
import Estilo from "../../Estilo";
import AreaEsquerda from "./AreaEsquerda";
import MensagemEnviada from "./MensagemEnviada";
import Conversa from "./Conversa";
import { recuperarDocumentos } from "../../../api/crud";
import { collection, getDocs, getFirestore, onSnapshot, orderBy, query } from "firebase/firestore";
import {firebase} from '../../../api/config'
export default ({route}) => {
    const {user} = route.params
    const [mensagens, setMensagens] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(async () => {
        const db = getFirestore();
        const mensagemRef = collection(
          db, 'Microempreendedores', user.email, 'Mensagens'
        );
    
        const mensagensSnapshot = await getDocs(mensagemRef)

        const arrayDestinatarios = []

        mensagensSnapshot.forEach((i) => {
          arrayDestinatarios.push(i)
          console.log(i)
        })

        /*const q = query(mensagemRef, orderBy('data', 'asc'));
    
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const mensagensArray = [];
          querySnapshot.forEach((doc) => {
            mensagensArray.push(doc.data());
          });
          setMensagens(mensagensArray);
          setCarregando(false);
        });*/
    
        return () => unsubscribe();
      }, []);
    
    


    return (
        <View style={[{width: '100%', height: '100%', flexDirection: 'row'}, Estilo.corSecundariaBackground]}>
            {carregando? <Text>Carregando...</Text> : 
            mensagens.length === 0 ? (
                <Text>Nenhuma mensagem...</Text>
            ) : (
                <>
                                <AreaEsquerda mensagens={mensagens}></AreaEsquerda>
                <View  style={[{width: '100%'}]}>
                    <Conversa mensagens={mensagens}></Conversa>
    
                </View>
                </>
            )}
        </View>
    )
}