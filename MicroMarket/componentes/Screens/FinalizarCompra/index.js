import React, {useState, useEffect} from "react";
import {Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import Estilo from "../../Estilo";
import ProdutoNoCarrinho from "./ProdutoNoCarrinho";
import RadioBotao from "./RadioBotao";
import { criarDocumento } from "../../../bd/CRUD";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
export default ({navigation, route}) => {
    const [selecionado, setSelecionado] = useState(0)
    const {produtos, total, email} = route.params
    const style = StyleSheet.create({
        container: {
            width: '100%',
            minHeight: '100%',
        },
        areaProdutos: {
            marginTop: 10,
            width: '100%',
            alignItems: 'center'
        }
    })
    console.log('produtos', total)

    const data = new Date()
    const dia = data.getDate()
    const mes = data.getMonth()+1
    const ano = data.getFullYear()

    produtos.forEach((i, index) => {
        console.log('i', i)
    })

    const finalizarCompras = async () => {
        produtos.forEach((i, index) => {
            console.log(i)
            console.log('produtos[index]', produtos[index])
            let metodo = ''
            selecionado === 0? metodo = 'Cartão de Crédito' : selecionado === 1? metodo = 'Boleto' : metodo = 'Pix'
            const compra = {
                produtos: i,
                metodo,
                data: serverTimestamp(),

            }
            const venda = {
                produto: i,
                metodo,
                data: serverTimestamp(),

            }
            const bd = getFirestore()
            const compraRef = collection(bd,'Clientes', email, 'Compras')
            addDoc(compraRef, compra)
            .then((docRef) => {
              console.log('Nova compra inserida com o ID: ', docRef.id);
            })
            .catch((error) => {
              console.log('Erro ao inserir a nova compra', error);
            });
            const vendaRef = collection(bd, 'Microempreendedores', i.nomeVendedor, 'Vendas')

            addDoc(vendaRef, venda)
            .then((docRef) => {
              console.log('Nova venda inserida com o ID: ', docRef.id);
            })
            .catch((error) => {
              console.log('Erro ao inserir a nova venda', error);
            });


        })
        

    }

    return (
        <ScrollView style={[style.container, Estilo.corSecundariaBackground]}>
            <Text style={[Estilo.tituloMedio, Estilo.textoCorPrimaria, Estilo.centralizado]}>FINALIZAR COMPRA</Text>
            <View style={[style.areaProdutos]}>
                <View style={{alignItems: 'flex-start'}}>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria, {marginLeft: '5%'}]}>ITENS </Text>
                </View>
                {produtos.map((i) => 
                                    <View style={[{marginTop: '5%'}]}>
                                <ProdutoNoCarrinho
                                nome={i.nome}
                                imagem={i.imagem}
                                descricao={i.descricao}
                                />                
                                </View>
                )}

            </View>
            <View style={[style.areaProdutos]}>
                <View style={{alignItems: 'flex-start'}}>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria, {marginLeft: '5%'}]}>PAGAMENTO </Text>
                </View>
                <View style={[{marginTop: '5%',  width:'95%'}]}>
                <RadioBotao
                            options={['Cartão de Crédito', 'Boleto', 'Pix']}
                            selected={selecionado}
                            onChangeSelect={(opt, i) => { setSelecionado(i);}}
                        />
                </View>
                <View style={[{marginTop: '5%', width:'95%'}]}>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria, Estilo.centralizado]}>ENVIAR PARA</Text>
                    <Text style={[Estilo.texto15px, Estilo.textoCorPrimaria]}>Endereço do usuário</Text>
                </View>
                <View style={[{marginTop: '5%', width:'95%'}]}>
                    <Text style={[Estilo.tituloPequeno, Estilo.textoCorPrimaria, Estilo.centralizado]}>TOTAL</Text>
                    <Text style={[Estilo.texto15px, Estilo.textoCorPrimaria]}>R${total}</Text>
                </View>
            </View>
            <View style={[{marginVertical: '10%', alignItems: 'center'}]}>
                <TouchableOpacity style={[{width: '80%', height: 50, backgroundColor: '#C0FFBB', justifyContent: 'center', alignItems: 'center', borderRadius: 20}]} onPress={()=> finalizarCompras()}>
                    <Text style={[Estilo.tituloPequeno, {color: '#024C00'}]}>Finalizar compra</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}