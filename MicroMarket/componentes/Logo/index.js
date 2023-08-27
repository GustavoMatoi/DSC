import { StyleSheet, Text, View} from 'react-native';
import Estilo from '../Estilo';
import { Entypo } from '@expo/vector-icons'; 
export default props => {

        return (
        <View style={[style.caixa]}>
            <View style={[Estilo.centralizado, Estilo.corSecundariaBackground, Estilo.corSecundariaBackground, style.circulo]}>
                <Text  style={[Estilo.textoCorPrimaria, Estilo.tituloMedio]}>MICROMARKET</Text>
            </View>
            <View style={[{flexDirection: 'row'}]}>
                <Text style={[Estilo.textoCorSecundaria, Estilo.texto12px, Estilo.roboto, style.subtitulo]}>O SEU APLICATIVO DE MICRONEGÓCIOS</Text>
                <View style={[{transform: [{ rotate: '-15deg'}]}]}>
                    <Entypo name="shopping-cart" size={45} color="#B8BFFF" />
                </View>
            </View>
  
        </View>
    )
}


const style = StyleSheet.create({
    caixa: {
        width: '100%',
    },
    circulo: {
        borderRadius: 50, 
        alignItems: 'center',
        padding: 5,
        width: '100%'
    },
    subtitulo: {
        marginTop: 5,
        marginLeft: 'auto',
        marginRight: '5%'
    }
})