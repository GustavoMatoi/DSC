import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Estilo from "../../Estilo";
import {firebase} from '../../../bd/config'
import { recuperarDocumentos } from "../../../bd/CRUD";
import { doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from '@firebase/storage';
import * as ImagePicker from 'expo-image-picker';

export default ({navigation}) => {
    const [user, setUser] = useState({})
    const [imageUrl, setImageUrl] = useState('')
    useEffect(() => {
        const db = getFirestore()
        const user = firebase.auth().currentUser
        console.log('user', user)

        const recuperarDados = async () => {
            const userRef = doc(db, 'Clientes', user.email);
            const userSnapshot = await getDoc(userRef);
            const userData = userSnapshot.data();
            setUser(userData)
            console.log(userData)
        }

        recuperarDados()
    }, [])

    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%'
        },
        header: {
            width: '100%',
            height: '20%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        body: {
            width: '100%',
            height: '85%',
            borderTopEndRadius: 50,
            borderTopStartRadius: 50,
            borderWidth: 1
        },
        imagem: {
            width: 200,
            height: 200, 
            borderRadius: 100,
            marginVertical: 'auto',
            marginTop: -60
        },
        areaImagem: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20
        },
        areaInformacoes : {
            width: '100%',
            padding: 15, 
            height: '30%',
            justifyContent: 'space-around'
        },
        areaBotoes: {
            width: '100%',
            height: '30%',
            flexDirection: 'row',
            justifyContent:'space-evenly',
            alignItems: 'flex-end'
        },
        botao: {
            width: '45%',
            height: 50,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })



    return (
        <View style={[style.container, Estilo.corPrimariaBackground]}>
            <View style={[style.header]}>
                <Text style={[Estilo.tituloMedio, Estilo.textoCorSecundaria]}>PERFIL</Text>
            </View>
            <View style={[Estilo.corSecundariaBackground, style.body]}>
                <View style={[style.areaImagem]}>
                    <Image
                        source={{uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
                        style={[style.imagem]}
                    />
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria]}>{user.nome}</Text>
                </View>

                <View style={[style.areaInformacoes]}>
                    <Text style={[Estilo.texto15px, Estilo.textoCorPrimaria]}>{user.email}</Text>

                </View>
                <View style={[style.areaBotoes]}>

                    <TouchableOpacity style={[style.botao, Estilo.corPrimariaBackground]} onPress={()=> navigation.navigate("Carrinho", {navigation: navigation, email: user.email})}>
                        <Text style={[Estilo.texto15px, Estilo.textoCorSecundaria]}>CARRINHO</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}