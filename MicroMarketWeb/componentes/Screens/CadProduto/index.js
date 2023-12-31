import React, {useState, useEffect} from "react";
import {Text, View, TextInput, StyleSheet, TouchableOpacity, Image, Touchable} from 'react-native'
import Estilo from "../../Estilo";
import { getStorage, ref, uploadBytes, getDownloadURL } from '@firebase/storage';
import {criarDocumento} from '../../../api/crud'
import { serverTimestamp } from "firebase/firestore";
export default ({navigation, route}) => {
    const {user} = route.params
    const [image, setImage] = useState('')
    const [nomeProduto, setNomeProduto] = useState('')
    const [descricaoProduto, setDescricaoProduto] = useState('')
    const [estoque, setEstoque] = useState('')
    const [precoIndividual, setPrecoIndividual] = useState('')
    const [tags, setTags] = useState('')
    
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
          const storage = getStorage(); 
          const storageRef = ref(storage, `/${file.name}`); 
          
          try {
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
    
    
            setImage(downloadURL);
          } catch (error) {
            console.error('Não foi possível realizar o upload da imagem. Erro ', error);
          }
        }
      };

      const cadastrarProduto = async () => {
        const tagsAux = tags.split(',')
        const produto = {
            nome: nomeProduto,
            descricao: descricaoProduto,
            estoque: parseInt(estoque),
            precoIndividual: parseFloat(precoIndividual),
            tags: tagsAux, 
            imagem: image,
            nomeVendedor: user.email,
            data: serverTimestamp(),
        }
        try {
            criarDocumento(produto, 'Microempreendedores', user.email, 'Produtos', nomeProduto)
        } catch (e){
            console.log("Não foi possível cadastrar o produto. Erro: ", e)
        }
    }
      
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%'
        },
        areaInputs: {
            width: '100%',
            height: '75%',
            flexDirection: 'row',
            },
        textInput: {
            width: 600,
            height: 50,
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 15
        },
        areaTextos: {
            justifyContent: 'space-evenly',
            padding: 30,
            alignItems: 'center'
        },
        view1: {
            width: '60%',

        },
        view2: {
            width: '40%'
        }

    })
    return (
        <View style={[style.container, Estilo.corPrimariaBackground]}>
            <Text style={[Estilo.tituloMedio, Estilo.textoCorSecundaria]}>CADASTRO DE PRODUTO</Text>
            <View style={[style.areaInputs]}>
                <View style={[style.areaTextos, style.view1]}>
                    <View style={[style.espacamento]}>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>NOME DO PRODUTO (obrigatório)</Text>
                    <TextInput
                        placeholder="Informe o nome do pruduto"
                        style={[style.textInput, {marginVertical: 10}]}
                        placeholderTextColor='#e3e3e3'
                        value={nomeProduto}
                        onChangeText={(text) => setNomeProduto(text)}

                    />
                    </View>
                    <View>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>DESCRIÇÃO DO PRODUTO (obrigatório)</Text>
                    <TextInput
                        placeholder="Informe a descrição do pruduto"
                        style={[style.textInput, {marginVertical: 10}]}
                        placeholderTextColor='#e3e3e3'
                        value={descricaoProduto}
                        onChangeText={(text) => setDescricaoProduto(text)}
                    />
                    </View>
                    <View>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>ESTOQUE (obrigatório)</Text>
                    <TextInput
                        placeholder="Informe o estoque do pruduto"
                        style={[style.textInput, {marginVertical: 10}]}
                        placeholderTextColor='#e3e3e3'
                        value={estoque}
                        onChangeText={(text) => setEstoque(text)}
                    />
                    </View>
                    <View>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>PREÇO INDIVIDUAL (obrigatório)</Text>
                    <TextInput
                        placeholder="Informe o nome do pruduto"
                        style={[style.textInput, ]}
                        placeholderTextColor='#e3e3e3'
                        value={precoIndividual}
                        onChangeText={(text) => setPrecoIndividual(text)}
                    />
                    </View>
                    <View>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>TAGs (separado por vírgula)</Text>
                    <TextInput
                        placeholder="Informe o nome do pruduto"
                        style={[style.textInput, ]}
                        placeholderTextColor='#e3e3e3'
                        value={tags}
                        onChangeText={(text) => setTags(text)}
                    />
                    </View>
                </View>
                <View style={[style.areaTextos, style.view2]}>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>IMAGEM DO PRODUTO (obrigatório)</Text>
                        {image &&  
                        <img id="imagemExibida" 
                        src={image} alt="Imagem do produto"
                        width={400}
                        height={400}
                        style={{backgroundColor: 'white'}}
                        />}
                        <input
                        style={{
                            width: '400px',
                            backgroundColor: '#B8BFFF',
                            color: 'white',
                            padding: '10px',
                            borderRadius: '5px',
                            border: 'none',
                            height: '40px',
                            fontSize: '16px',
                            maginTop: '10px'
                        }}
                        placeholder="Selecione a imagem do produto"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        />          
                        </View>
            </View>
            <View style={{alignItems: 'center', width: '100%', flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity
                disabled={image === ''}
                style={[image === '' ?  {backgroundColor: '#e3e3e3'} : Estilo.corSecundariaBackground, {width: 350, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 30}]} onPress={() => {cadastrarProduto(); navigation.goBack()}}>
                    <Text style={[Estilo.tituloPequeno, image === '' ? {color: 'white'}: Estilo.textoCorPrimaria]}>{image === '' ? 'SELECIONE UMA IMAGEM' : 'SALVAR PRODUTO'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                d
                style={[{backgroundColor: '#E70F0F', width: 350, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 30}]} onPress={() => {navigation.goBack()}}>
                    <Text style={[Estilo.tituloPequeno,{color: 'white'}]}>CANCELAR</Text>
                </TouchableOpacity>
            </View>
            <View>

            </View>
        </View>
    )
}