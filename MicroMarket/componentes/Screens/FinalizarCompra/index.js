import React, {useState, useEffect} from "react";
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Alert} from 'react-native'
import Estilo from "../../Estilo";
import ProdutoNoCarrinho from "./ProdutoNoCarrinho";
import RadioBotao from "./RadioBotao";
import { criarDocumento } from "../../../bd/CRUD";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { StripeProvider, confirmPayment } from "@stripe/stripe-react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import Spinner from "react-native-loading-spinner-overlay";
const API_URL = "http://192.168.1.3:3000";

export default ({navigation, route}) => {

    const [selecionado, setSelecionado] = useState(-1)
    const [cardDetails, setCardDetails] = useState('')
    const [finalizando, setFinalizando] = useState(false)
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
        },
        cartaoDeCredito: {
            width: '90%',
            backgroundColor: '#efefef',
            height: 50,
            margin: 20
        },

    })
    console.log('produtos', total)

    const data = new Date()
    const dia = data.getDate()
    const mes = data.getMonth()+1
    const ano = data.getFullYear()

    produtos.forEach((i, index) => {
        console.log('i', i)
    })
    const fetchPaymentIntentClientSecret = async (valor, pagamento) => {
        setFinalizando(true)
        const response = await fetch(`${API_URL}/create-payment-intent`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({valor, pagamento})
        });
        const { clientSecret, error } = await response.json();
        return { clientSecret, error };
      };
    
      const handlePayPress = async () => {
        console.log('cardDetails', cardDetails)
        if (!cardDetails?.complete || !email) {
          Alert.alert("Dados não preenchidos", "Por favor, preencha corretamente os dados do seu cartão.");
          return;
        }
        const billingDetails = {
            email: email, 
          };
          console.log('email', email)
        try {
          const { clientSecret, error } = await fetchPaymentIntentClientSecret();
          if (error) {
            console.log("Não foi possível processar o pagamento");
            setFinalizando(false)
          } else {
    
            const { paymentIntent, error } = await confirmPayment(clientSecret, {
                paymentMethodType: "Card", 
                billingDetails: billingDetails,
              });
            if (error) {
              Alert.alert("Erro", `Ocorreu o seguinte erro no pagamento: ${error.message}`);
              console.log('cardDetails', cardDetails)
              setFinalizando(false)

            } else if (paymentIntent) {
              Alert.alert("Concluído", "Pagamento concluído com sucesso.");
              console.log("Payment successful ", paymentIntent);
              finalizarCompras()
              navigation.navigate('Sucesso')
            }
          }
        } catch (e) {
          console.log("Erro", e);
        }
      };
    


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
        setFinalizando(false)

    }

    return (
        <StripeProvider
        publishableKey='pk_test_51O2jUCAJXIuRfKFnepaYXce78eg6jVY001MN2jaTTem1dlGS2hF2Gr60oeuYH20lZ1dFnPcijS5sbt0L7U4Sw7Ww00MDJ0zSCN'>
        
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
                        {selecionado === 0? 
                        <CardField
                            placeholders={{number: '4242 4242 4242 4242'}}
                            style={[style.cartaoDeCredito]}
                            cardStyle={Estilo.corLight}
                            onCardChange={text=> setCardDetails(text)}
                        /> : null}
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
                        <TouchableOpacity style={[{width: '80%', height: 50, backgroundColor: '#C0FFBB', justifyContent: 'center', alignItems: 'center', borderRadius: 20}]} onPress={()=>handlePayPress()}>
                            <Text style={[Estilo.tituloPequeno, {color: '#024C00'}]}>Finalizar compra</Text>
                        </TouchableOpacity>
                        <Spinner
                visible={finalizando}
                textContent={'Finalizando pagamento...'}
                textStyle={[Estilo.textoCorSecundaria, Estilo.texto15px]}
                />              
                    </View>
                </ScrollView>
        </StripeProvider>
    )
}