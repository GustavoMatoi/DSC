import React, {useState, useEffect} from "react";
import {View, StyleSheet, Dimensions, Text, TextInput, Alert, TouchableOpacity} from 'react-native'
import Estilo from "../../Estilo";
import InputTexto from "../../Inputs/InputTexto";
import Logo from "../../Logo";
import BotaoPrimario from "../../Inputs/BotaoPrimario";
import {firebase} from "../../../bd/config"

export default ({navigation}) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const handleLogin = (email, senha) => {
        email = email.trim();
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(() => navigation.navigate('Principal'))
            .catch((e) => {
                console.error("Error:", e);
                Alert.alert("Erro ao realizar o login.", e.message);
            }); 
    }

    return (
        <View style={[style.container, Estilo.corPrimariaBackground]}>
            <View style={Estilo.centralizado}>
                <Logo/>

            </View>
            <View style={style.textos} >
                <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>"...Pequenos sonhos,</Text>
                <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>grandes negócios"</Text>
            </View>

            <View style={[style.inputs, Estilo.centralizado]}>
                <View style={[{marginTop: '2%', width: '95%'}]}>
                    <Text style={[Estilo.texto20px, Estilo.textoCorSecundaria, {fontWeight: 'bold', marginBottom: 5}]}>Login:</Text>
                    <TextInput
                    onChangeText={(text)=> setEmail(text)}
                    placeholder={'Informe seu email'}
                    style={style.containerInput}
                />
                                </View>
                <View style={[{marginTop: '2%', width: '95%'}]}>
                    <Text style={[Estilo.texto20px, Estilo.textoCorSecundaria, {fontWeight: 'bold', marginBottom: 5}]}>Senha:</Text>
                    <TextInput
                        onChangeText={(text) => setSenha(text)}
                        placeholder={'Informe sua senha'}
                        style={style.containerInput}
                    />
                        </View>
            </View>

            <View style={[{marginTop: '10%', width: '50%', alignItems: 'center'}, Estilo.centralizado]}>
                    <TouchableOpacity onPress={() => handleLogin(email, senha)} style={[style.containerBotao, Estilo.corSecundariaBackground]}>
                        <Text>Entrar</Text>
                    </TouchableOpacity>
            </View>
        
            <View style={[Estilo.centralizado, {marginTop: '10%'}]}>
                <Text style={[Estilo.textoCorSecundaria, Estilo.texto12px, {textDecorationLine: 'underline'}]} onPress={()=> navigation.navigate("Cadastro")}>APERTE AQUI PARA SE CADASTRAR</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width, 
        height: Dimensions.get('screen').height
    },
    textos: {
        marginTop: '25%',
        alignItems: 'flex-end',
        width: '90%'
    },
    inputs: {
        marginTop: '20%',
        width: '95%',
        alignItems: 'center'
    },
    containerInput: {
        width: '90%',
        height: 50, 
        padding: 10, 
        fontSize: 15,
        backgroundColor: 'white',
        borderRadius: 10
    },
    containerBotao: {
        height: 50, 
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})