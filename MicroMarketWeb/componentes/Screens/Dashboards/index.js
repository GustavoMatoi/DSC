import React, {useEffect, useState, useCallback} from 'react'
import { printToFileAsync } from 'expo-print'
import { shareAsync } from 'expo-sharing'
import {Text, View, SafeAreaView, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import Estilo from '../../Estilo'
import AreaEsquerda from './AreaEsquerda'
import { VictoryLine, VictoryChart,VictoryTheme, VictoryPie } from 'victory'
import BotaoSelect from '../../BotaoSelect'

export default ({navigation, route}) => {
    const {user, vendas} = route.params
    const [rows, setRows] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [selecionado, setSelecionado] = useState(0)
    
    const handleSelecionado = (selecionado) => {
        setSelecionado(selecionado)
    }
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            flexDirection: 'row',
        },
        areaProdutos: {
            width: '80%',
            flexDirection: 'column',
            overflow: 'hidden',
        },
        row: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 20
        },
    });
    console.log(user)

    console.log(vendas)

    const vendasMapeadas = vendas.map((i, index) => {
        return(
            {x: index, y: i.produto.precoIndividual}
        )
    })

    console.log(vendasMapeadas)
    const produtosVendidos = vendas.map((i, index) => {
        return i.produto.nome
    })
    const totalProfits = {};

    // Iterate through the input array
    vendas.forEach((item) => {
      const productName = item.produto.nome;
      const productPrice = item.produto.precoIndividual;
    
      if (totalProfits[productName]) {
        // If the product exists in the totalProfits object, add the price
        totalProfits[productName] += productPrice;
      } else {
        // If the product doesn't exist, initialize it
        totalProfits[productName] = productPrice;
      }
    });
    
    const profitData = Object.keys(totalProfits).map((productName) => ({
        x: productName,
        y: totalProfits[productName],
      }));
      
      console.log(profitData);


    console.log("Total Profits:");
    console.log(totalProfits);
    const produtosNoBotao = new Set([...produtosVendidos])

    return (
        <View style={[style.container, Estilo.corPrimariaBackground]}>
             <View style={[style.container, Estilo.corPrimariaBackground]}>
                <View style={style.container}>
               <AreaEsquerda navigation={navigation} imagem={user.imagem}  user={user}/>
               <View style={[style.areaProdutos, {backgroundColor: 'white'}]}>
               <View style={[{width: '100%', justifyContent: 'center', alignItems: 'center'}]}>
               </View>


                <View style={[{width: '100%',flexDirection: 'row'}]}>
                <View style={{width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={[Estilo.tituloPequeno,Estilo.textoCorPrimaria]}>Vendas totais</Text>

                <VictoryChart
                    theme={VictoryTheme.material}
                    >
                    <VictoryLine
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                      }}
                        style={{
                        data: { stroke: "#B8BFFF" },
                        }}
                        data={
                        vendasMapeadas
                        }
                    />
                    </VictoryChart>
                </View>
                <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={[Estilo.tituloPequeno,Estilo.textoCorPrimaria]}>Vendas por produto</Text>
                <VictoryPie
                  colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                data={profitData}
                />
                </View>
                </View>

               </View>
           </View>
        </View>
        </View>
    )
}