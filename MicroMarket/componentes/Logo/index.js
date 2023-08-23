import { StyleSheet, Text, View, Platform} from 'react-native';
import Estilo from '../Estilo';
export default props => {
    if(Platform.OS == 'web'){
        return (
            <View style={[style.caixa]}>
                <View style={[Estilo.centralizado, Estilo.corSecundariaBackground, Estilo.corSecundariaBackground, style.circulo, {width: '50%'}]}>
                    <Text  style={[Estilo.textoCorPrimaria, Estilo.tituloGrande]}>MICROMARKET</Text>
                </View>
                <Text style={[Estilo.textoCorSecundaria, Estilo.texto12px, Estilo.roboto, style.subtitulo, {width: '40%'}]}>O SEU APLICATIVO DE MICRONEGÓCIOS</Text>
            </View>
        )
    } else {
        return (
            <View style={[style.caixa]}>
                <View style={[Estilo.centralizado, Estilo.corSecundariaBackground, Estilo.corSecundariaBackground, style.circulo]}>
                    <Text  style={[Estilo.textoCorPrimaria, Estilo.tituloMedio]}>MICROMARKET</Text>
                </View>
                <Text style={[Estilo.textoCorSecundaria, Estilo.texto12px, Estilo.roboto, style.subtitulo]}>O SEU APLICATIVO DE MICRONEGÓCIOS</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    caixa: {
        width: '80%',

    },
    circulo: {
        borderRadius: 50, 
        alignItems: 'center',
        padding: 15,
        width: '100%'
    },
    subtitulo: {
        marginTop: 5,
        marginLeft: 'auto',
        marginRight: '5%'
    }
})