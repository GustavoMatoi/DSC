import React, { useCallback, useEffect, useLayoutEffect, useState } from "react";
import {Text, View} from 'react-native'
import Estilo from "../../Estilo";
import AreaEsquerda from "./AreaEsquerda";
import MensagemEnviada from "./MensagemEnviada";
import Conversa from "./Conversa";
import { recuperarDocumentos } from "../../../api/crud";
import { collection, getDocs, getFirestore, onSnapshot, orderBy, query, getDoc, doc } from "firebase/firestore";
import {firebase} from '../../../api/config'
export default ({route}) => {
    const {user} = route.params
    const [mensagens, setMensagens] = useState([0])
    const [carregando, setCarregando] = useState(true)
    const [arrayMensagens, setArrayMensagens] = useState([])
    const [remetente, setRemetente] = useState('')


    useEffect(() => {
      const recuperarDestinatarios = async () => {
        try {
            const db = getFirestore();
            const mensagensDoc = collection(db, 'Microempreendedores', user.email, 'Mensagens');
    
            const querySnapshot = await getDocs(mensagensDoc);
            const arrayDestinatarios = [];
            console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
                arrayDestinatarios.push(doc.get('remetente'))
            });
    
            console.log(arrayDestinatarios); 
    
            setMensagens(arrayDestinatarios);
        } catch (error) {
            console.error("Erro ao buscar mensagens:", error);
        }
    }
      recuperarDestinatarios();
    }, [user]);
    
    const recuperarMensagens = useCallback((mensagensRecuperadas) => {
      try {
        const firebaseBD = getFirestore()
        const mensagemRef = collection(
          firebaseBD,
          'Microempreendedores',
          user.email,
          'Mensagens',
          `Mensagens ${mensagensRecuperadas}`,
          'todasAsMensagens' 
        );
    
        const q = query(mensagemRef, orderBy('data', 'asc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const mensagensArray = [];
      querySnapshot.forEach((doc) => {
        mensagensArray.push(doc.data());
      });
      setArrayMensagens(mensagensArray);
    });
    setRemetente(mensagensRecuperadas)

    console.log('mensagensRecuperadasmensagensRecuperadasmensagensRecuperadasmensagensRecuperadasmensagensRecuperadasmensagensRecuperadasmensagensRecuperadasmensagensRecuperadasmensagensRecuperadasmensagensRecuperadasmensagensRecuperadasmensagensRecuperadasmensagensRecuperadasmensagensRecuperadasmensagensRecuperadas', mensagensRecuperadas)
      console.log('remeenteremetenteremetenteremeenteremetenteremetenteremeenteremetenteremetenteremeenteremetenteremetenteremeenteremetenteremetente', remetente)


      return () => unsubscribe();
      } catch (error) {
        console.log('Erro ao recuperar as mensagens:', error);
      }


    }, [user.email]);
    useLayoutEffect(() => {
      recuperarMensagens();
    }, [recuperarMensagens]);


    return (
        <View style={[{width: '100%', height: '100%', flexDirection: 'row'}, Estilo.corSecundariaBackground]}>
          {mensagens.length > 0?                 <>
                                <AreaEsquerda recuperarMensagens={recuperarMensagens} mensagens={mensagens}></AreaEsquerda>
                <View  style={[{width: '100%'}]}>
                    <Conversa mensagens={arrayMensagens} email={user.email} remetente={remetente}></Conversa>
    
                </View>
                </> : null}
        </View>
    )
}