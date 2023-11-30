import React, {useState, useEffect} from "react"
import { TextInput, StyleSheet, Text, TouchableOpacity,Image ,View, ScrollView, Alert } from "react-native"
import Estilo from "../../Estilo"
import BotaoPrimario from "../../Inputs/BotaoPrimario"
import { Cliente } from "../../../classes/Cliente"
import { criarDocumento, recuperarDocumentos, excluirDocumento } from "../../../bd/CRUD"
import {firebase} from "../../../bd/config"
export default ({navigation}) => {
    const novoCliente = new Cliente('', '', '', '', '', '', '', '', '')
    const [nome, setNome] = useState('')
    const [nomeInvalido, setNomeInvalido] = useState(false)

    const [cpf, setCpf] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [cpfInvalido, setCpfInvalido] = useState(false)
    const [estadoInvalido, setEstadoInvalido] = useState(false)
    const [cidadeInvalido, setCidadeInvalido] = useState(false)
    const [bairroInvalido, setBairroInvalido] = useState(false)
    const [ruaInvalido, setRuaInvalido] = useState(false)
    const [numeroInvalido, setNumeroInvalido] = useState(false)
    const [emailInvalido, setEmailInvalido] = useState(false)
    const [senhaInvalido, setSenhaInvalido] = useState(false)
    const style = StyleSheet.create({
        container: {
            flex: 1
        },
        areaInputs : {
            width: '95%',
            alignSelf: 'center',
            height: 60,
            marginVertical: 20,
        },
        textInput: {
            width: '100%',
            borderRadius: 10,
            backgroundColor: 'white',
            height: 50,
            elevation: 10,
            padding: 10,
            marginTop: 5
        },
        areaPreenchimento: {
            padding: 10,
            marginTop: 25,
        },
        titulos: {
            fontWeight: 'bold'
        }
    })
    const validaDados = () => {
        if([nome, cpf, estado, cidade, bairro, rua, numero, email, senha].some((element) => element == '')){
            Alert.alert('Há campos não preenchidos')
            nome == '' ? setNomeInvalido(true) : setNomeInvalido(false)
            cpf == '' ? setCpfInvalido(true) : setCpfInvalido(false)
            estado == '' ? setEstadoInvalido(true) : setEstadoInvalido(false)
            cidade == '' ? setCidadeInvalido(true) : setCidadeInvalido(false)
            bairro == '' ? setBairroInvalido(true) : setBairroInvalido(false)
            rua == '' ? setRuaInvalido(true) : setRuaInvalido(false)
            numero == '' ? setNumeroInvalido(true) : setNumeroInvalido(false)

            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (regexEmail.test(email)) {
                setEmailInvalido(true)
            }         
            senha == '' ? setSenhaInvalido(true) : setSenhaInvalido(false)
        } else {
            novoCliente.setNome(nome)
            novoCliente.setCpf(cpf)
            novoCliente.setEstado(estado)
            novoCliente.setCidade(cidade)
            novoCliente.setBairro(bairro)
            novoCliente.setRua(rua)
            novoCliente.setNumero(numero)
            novoCliente.setEmail(email)
            novoCliente.setSenha(senha)
            const novoClienteObj = {
                nome: nome,
                cpf: cpf, 
                endereco: {
                    estado: estado, 
                    cidade: cidade, 
                    bairro: bairro,
                    rua: rua, 
                    numero: numero,
                },
                email: email, 
                senha: senha,
            }
            
            const retorno = criarDocumento(novoClienteObj, 'Clientes', email)
            console.log(retorno)
            if (retorno) {
                firebase.auth().createUserWithEmailAndPassword(email, senha)
                Alert.alert("Usuário cadastrado com sucesso!")
                navigation.navigate("Login")
            } else {
                Alert.alert("Ocorreu um erro durante o cadastro.")
            }
        }
    }

    return (
        <ScrollView style={[style.container, Estilo.corPrimariaBackground ]}>
            <View style={[style.areaPreenchimento]}>
                <Text style={[Estilo.textoCorSecundaria, Estilo.texto20px, style.titulos]}>PREENCHA OS CAMPOS ABAIXO</Text>
                <View style={[style.areaInputs]}>
                    <Text style={[Estilo.textoCorSecundaria, Estilo.texto15px, style.titulos]}>NOME:</Text>
                    <TextInput
                        style=
                        {[style.textInput, nomeInvalido? {borderWidth: 1, borderColor: '#E70F0F'} 
                        :{borderWidth: 1, borderColor: '#C0FFBB'} ]}
                        placeholder="Informe seu nome"
                        placeholderTextColor={'#C3C3C3'}
                        value={nome}
                        onChangeText={(nome) => setNome(nome)}
                        />
                </View>
                <View style={[style.areaInputs]}>
                    <Text style={[Estilo.textoCorSecundaria, Estilo.texto15px, style.titulos]}>CPF:</Text>
                    <TextInput
                        style={[style.textInput, cpfInvalido ? {borderWidth: 1, borderColor: '#E70F0F'} :{borderWidth: 1, borderColor: '#C0FFBB'} ]}
                        placeholder="Informe seu CPF"
                        placeholderTextColor={'#C3C3C3'}
                        value={cpf}
                        onChangeText={(cpf) => setCpf(cpf)}
                    />
                </View>
                <View style={[style.areaInputs]}>
                    <Text style={[Estilo.textoCorSecundaria, Estilo.texto15px, style.titulos]}>ESTADO:</Text>
                    <TextInput
                        style={[style.textInput, estadoInvalido? {borderWidth: 1, borderColor: '#E70F0F'} :{borderWidth: 1, borderColor: '#C0FFBB'} ]}
                        placeholder="Informe seu estado"
                        placeholderTextColor={'#C3C3C3'}
                        value={estado}
                        onChangeText={(estado) => setEstado(estado)}
                    />
                </View>
                <View style={[style.areaInputs]}>
                    <Text style={[Estilo.textoCorSecundaria, Estilo.texto15px, style.titulos]}>CIDADE:</Text>
                    <TextInput
                        style={[style.textInput, cidadeInvalido? {borderWidth: 1, borderColor: '#E70F0F'} :{borderWidth: 1, borderColor: '#C0FFBB'} ]}
                        placeholder="Informe sua cidade"
                        placeholderTextColor={'#C3C3C3'}
                        value={cidade}
                        onChangeText={(cidade) => setCidade(cidade)}
                    />
                </View>
                <View style={[style.areaInputs]}>
                    <Text style={[Estilo.textoCorSecundaria, Estilo.texto15px, style.titulos]}>BAIRRO:</Text>
                    <TextInput
                    style={[style.textInput, bairroInvalido? {borderWidth: 1, borderColor: '#E70F0F'} :{borderWidth: 1, borderColor: '#C0FFBB'} ]}
                    placeholder="Informe seu bairro"
                    placeholderTextColor={'#C3C3C3'}
                    value={bairro}
                    onChangeText={(bairro) => setBairro(bairro)}
                    />
                </View>
                <View style={[style.areaInputs]}>
                    <Text style={[Estilo.textoCorSecundaria, Estilo.texto15px, style.titulos]}>RUA:</Text>
                    <TextInput
                    style={[style.textInput, ruaInvalido? {borderWidth: 1, borderColor: '#E70F0F'} :{borderWidth: 1, borderColor: '#C0FFBB'} ]}
                    placeholder="Informe sua rua"
                    placeholderTextColor={'#C3C3C3'}
                    value={rua}
                    onChangeText={(rua) => setRua(rua)}
                    />
                </View>
                <View style={[style.areaInputs]}>
                    <Text style={[Estilo.textoCorSecundaria, Estilo.texto15px, style.titulos]}>NÚMERO:</Text>
                    <TextInput
                    style={[style.textInput, numeroInvalido? {borderWidth: 1, borderColor: '#E70F0F'} :{borderWidth: 1, borderColor: '#C0FFBB'} ]}
                    placeholder="Informe o numero da sua casa"
                    placeholderTextColor={'#C3C3C3'}
                    value={numero}
                    onChangeText={(numero) => setNumero(numero)}
                    />
                </View>
                <View style={[style.areaInputs]}>
                    <Text style={[Estilo.textoCorSecundaria, Estilo.texto15px, style.titulos]}>EMAIL:</Text>
                    <TextInput
                    style={[style.textInput, emailInvalido? {borderWidth: 1, borderColor: '#E70F0F'} :{borderWidth: 1, borderColor: '#C0FFBB'} ]}
                    placeholder="Informe seu email"
                    placeholderTextColor={'#C3C3C3'}
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={[style.areaInputs]}>
                    <Text style={[Estilo.textoCorSecundaria, Estilo.texto15px, style.titulos]}>SENHA:</Text>
                    <TextInput
                    style={[style.textInput, senhaInvalido? {borderWidth: 1, borderColor: '#E70F0F'} :{borderWidth: 1, borderColor: '#C0FFBB'} ]}
                    placeholder="Informe sua senha"
                    placeholderTextColor={'#C3C3C3'}
                    value={senha}
                    secureTextEntry={true}
                    onChangeText={(senha) => setSenha(senha)}
                    />
                </View>
            </View>
            <View style={{width: '70%', marginTop: 10, marginBottom: 30, marginLeft: 'auto', marginRight: 'auto'}}>
                <BotaoPrimario
                    texto={"CADASTRAR-SE"}
                    onPress={validaDados}
                />
            </View>
        </ScrollView>
    )

}

