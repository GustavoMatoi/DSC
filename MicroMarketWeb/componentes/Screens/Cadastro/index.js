import React, {useState, useEffect} from "react";
import {Text, View, TextInput, StyleSheet, TouchableOpacity, Image, Touchable} from 'react-native'
import Estilo from "../../Estilo";
import {firebase} from '../../../api/config'
import { getStorage, ref, uploadBytes, getDownloadURL } from '@firebase/storage';
import {criarDocumento} from '../../../api/crud'
export default ({navigation}) => {
    const [image, setImage] = useState('')
    const [nome, setNome] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
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

      const cadastrarUsuario = async () => {
        const usuario = {
            nome,
            endereco : {
                estado: estado,
                rua: rua, 
                cidade: cidade, 
                numero: numero,
            },
            cnpj,
            imagem: image,
            email,
            senha
        }
        try {
            if(criarDocumento(usuario, 'Microempreendedores', email)){
                firebase.auth().createUserWithEmailAndPassword(email, senha)
                alert("Usuário cadastrado com sucesso!")
                navigation.navigate('Login')
            }
            
        } catch (e){
            console.log("Não foi possível cadastrar o usuário. Erro: ", e)
        }
    }
      
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '150%'
        },
        areaInputs: {
            width: '100%',
            height: '80%',
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
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>NOME(obrigatório)</Text>
                    <TextInput
                        placeholder="Informe o nome do pruduto"
                        style={[style.textInput, {marginVertical: 10}]}
                        placeholderTextColor='#e3e3e3'
                        value={nome}
                        onChangeText={(text) => setNome(text)}

                    />
                    </View>
                    <View>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>ESTADO (obrigatório)</Text>
                    <TextInput
                        placeholder="Informe a descrição do pruduto"
                        style={[style.textInput, {marginVertical: 10}]}
                        placeholderTextColor='#e3e3e3'
                        value={estado}
                        onChangeText={(text) => setEstado(text)}
                    />
                    </View>
                    <View>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>CIDADE (obrigatório)</Text>
                    <TextInput
                        placeholder="Informe o estoque do pruduto"
                        style={[style.textInput, {marginVertical: 10}]}
                        placeholderTextColor='#e3e3e3'
                        value={cidade}
                        onChangeText={(text) => setCidade(text)}
                    />
                    </View>
                    <View>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>BAIRRO (obrigatório)</Text>
                    <TextInput
                        placeholder="Informe o nome do pruduto"
                        style={[style.textInput, ]}
                        placeholderTextColor='#e3e3e3'
                        value={bairro}
                        onChangeText={(text) => setBairro(text)}
                    />
                    </View>
                    <View>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>RUA (obrigatório)</Text>
                    <TextInput
                        placeholder="Informe o nome do pruduto"
                        style={[style.textInput, ]}
                        placeholderTextColor='#e3e3e3'
                        value={rua}
                        onChangeText={(text) => setRua(text)}
                    />
                    </View>
                    <View>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>NÚMERO (obrigatório)</Text>
                    <TextInput
                        placeholder="Informe o nome do pruduto"
                        style={[style.textInput, ]}
                        placeholderTextColor='#e3e3e3'
                        value={numero}
                        onChangeText={(text) => setNumero(text)}
                    />
                    </View>
                    <View>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>CNPJ (obrigatório)</Text>
                    <TextInput
                        placeholder="Informe o nome do pruduto"
                        style={[style.textInput, ]}
                        placeholderTextColor='#e3e3e3'
                        value={cnpj}
                        onChangeText={(text) => setCnpj(text)}
                    />
                    </View>
                    <View>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>Email (obrigatório)</Text>
                    <TextInput
                        placeholder="Informe o nome do pruduto"
                        style={[style.textInput, ]}
                        placeholderTextColor='#e3e3e3'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    </View>
                    <View>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>Senha (obrigatório)</Text>
                    <TextInput
                        placeholder="Informe o nome do pruduto"
                        style={[style.textInput, ]}
                        placeholderTextColor='#e3e3e3'
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                    />
                    </View>
                </View>
                <View style={[style.areaTextos, style.view2]}>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorSecundaria]}>FOTO (obrigatório)</Text>
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
                style={[Estilo.corSecundariaBackground, {width: 350, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 30}]} onPress={() => {cadastrarUsuario()}}>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria]}>FINALIZAR CADASTRO</Text>
                </TouchableOpacity>

            </View>
            <View>

            </View>
        </View>
    )
}