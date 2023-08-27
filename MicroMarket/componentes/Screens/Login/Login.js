import React, {useState, useEffect} from "react";
import {View, StyleSheet, Dimensions, Text, TextInput} from 'react-native'
import Estilo from "../../Estilo";
import InputTexto from "../../Inputs/InputTexto";
import Logo from "../../Logo";
import BotaoPrimario from "../../Inputs/BotaoPrimario";

export default props => {

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
                    <InputTexto placeholder="Informe seu email" onChangeText={()=> {}}/>
                </View>
                <View style={[{marginTop: '2%', width: '95%'}]}>
                    <Text style={[Estilo.texto20px, Estilo.textoCorSecundaria, {fontWeight: 'bold', marginBottom: 5}]}>Senha:</Text>
                    <InputTexto placeholder="Informe sua senha" onChangeText={()=> {}}/>
                </View>
            </View>

            <View style={[{marginTop: '10%', width: '50%', alignItems: 'center'}, Estilo.centralizado]}>
                    <BotaoPrimario onPress={()=> {}} texto={"Entrar"}/>
            </View>
        
            <View style={[Estilo.centralizado, {marginTop: '10%'}]}>
                <Text style={[Estilo.textoCorSecundaria, Estilo.texto12px, {textDecorationLine: 'underline'}]} onPress={()=> {}}>APERTE AQUI PARA SE CADASTRAR</Text>
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
        marginTop: '50%',
        width: '95%',
        alignItems: 'center'
    }
})