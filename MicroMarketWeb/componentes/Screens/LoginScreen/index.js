import React from "react";
import {Text, View, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Estilo from "../../Estilo";
import Logo from "../../Logo";

export default props => {
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%'
        },
        areaLogo: {
            width:'100%',
            height:'20%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        image: {
            width: 625,
            height: 275,
            borderRadius: 180
        },
        areaImagem: {
            width: '100%',
            alignItems: 'center'
        },
        areaBotoes: {
            width: '100%',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 40,
            padidng: 10

        },
        textInput: {
            width: '60%',
            height: 50,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
        },
        areaEntrar: {
            width: '100%',
            alignItems: 'center',
            padding: 20
        }

    })
    return (
        <View style={[Estilo.corPrimariaBackground, style.container]}>
            <View style={[style.areaLogo]}>
                <Logo/>
            </View>
            <View style={[style.areaImagem, ]}>
                <img
                    src="https://www.imf.org/wp-content/uploads/2017/08/BLOG-1024x600-image-of-charts-TOP5Charts-iStock-615507200.jpg"
                    alt="Your Image Alt Text"
                    style={style.image}
                />
            </View>
            <View style={[style.areaBotoes]}>
                <View style={{width: '40%'}}>
                    <Text style={[Estilo.texto20px, Estilo.textoCorSecundaria, {marginVertical: 10}]}>Login:</Text>
                    <TextInput
                        style={[style.textInput]}
                    />
                </View>
                <View style={{width: '40%'}}>
                    <Text style={[Estilo.texto20px, Estilo.textoCorSecundaria, {marginVertical: 10}]}>Senha:</Text>
                    <TextInput
                        style={[style.textInput]}
                    />
                </View>
            </View>

            <View style={[style.areaEntrar]}>
                <TouchableOpacity style={[Estilo.corSecundariaBackground, {width: 300, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 10}]}>
                    <Text style={[Estilo.tituloMedio, Estilo.textoCorPrimaria]}>ENTRAR</Text>
                </TouchableOpacity>
                <Text style={[style.textoCorSecundaria, {marginTop: 20}]}>CLIQUE AQUI PARA SE CADASTRAR</Text>
            </View>
        </View>
    )
}