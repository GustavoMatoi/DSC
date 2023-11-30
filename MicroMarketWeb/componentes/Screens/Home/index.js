import React, {useCallback, useEffect, useState} from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Estilo from "../../Estilo";
import AreaEsquerda from "./AreaEsquerda";
import AreaProdutos from "./AreaProdutos";
import AreaDashboards from "./AreaDashboards";
import AreaVendas from "./AreaVendas";
import {firebase, firebaseBD} from '../../../api/config'
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { auth } from "firebase/auth";
import { recuperarDocumentos } from "../../../api/crud";

export default ({navigation, route}) => {
    const [user, setUser] = useState({})
    const [produtos, setProdutos] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [vendas, setVendas] = useState([])
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            flexDirection:'row'
        }
    }) 

    const {email} = route.params

    useEffect( () => {
        const recuperarDados = async () => {
            const bd = getFirestore()
            const userRef = doc(bd, 'Microempreendedores', email)
            const userSnapshot = await getDoc(userRef)
    
            const dados = userSnapshot.data()
            setUser(dados)
            console.log(dados)

            const produtosRef = collection(bd, 'Microempreendedores', email, 'Produtos')
            const produtosSnapshot = await getDocs(produtosRef)
            const produtosAux = []
            const vendasAux = []
            produtosSnapshot.forEach((i) => {
                produtosAux.push(i.data())
            })

            const vendasRef = collection(bd, 'Microempreendedores', email, 'Vendas')
            const vendasSnapshot = await getDocs(vendasRef)

            vendasSnapshot.forEach((i) => {
                vendasAux.push(i.data())
            })
            setCarregando(false)
            setProdutos(produtosAux)
            setVendas(vendasAux)
            console.log(vendasAux)
        }
        recuperarDados()

        return () => recuperarDados
    }, [] )

   
    return (
<View style={[style.container, Estilo.corPrimariaBackground]}>
<AreaEsquerda imagem={user.imagem} user={user} navigation={navigation}></AreaEsquerda>

    {user ? (
        carregando ? (
            <Text>Carregando</Text>
        ) : (

            <View style={{flexDirection: 'column', width: '80%'}}>
                <AreaProdutos produtos={produtos} user={user} navigation={navigation} />
                <View style={[{flexDirection: 'row', width: '100%', height: '57%'}]}>
                    <AreaDashboards navigation={navigation} user={user} vendas={vendas} />
                    <AreaVendas navigation={navigation} vendas={vendas} user={user} />
                </View>
            </View>
        )
    ) : (
        (() => {
            alert("Usuário não tem acesso à aplicação.");
            navigation.navigate('Login');
        })()
    )}
</View>
    )
}