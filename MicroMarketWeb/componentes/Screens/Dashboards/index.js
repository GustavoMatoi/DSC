import React, {useEffect, useState, useCallback} from 'react'
import { printToFileAsync } from 'expo-print'
import { shareAsync } from 'expo-sharing'
import {Text, View, SafeAreaView, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import Estilo from '../../Estilo'
import AreaEsquerda from './AreaEsquerda'
import { VictoryLine, VictoryChart,VictoryTheme } from 'victory'
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
        console.log('i', i)
        console.log('index', index)
        console.log(i.produto.precoIndividual)
        return(
            {x: index, y: i.produto.precoIndividual}
        )
    })

    const produtosVendidos = vendas.map((i, index) => {
        return i.produto.nome
    })

    const produtosNoBotao = new Set([...produtosVendidos])

    return (
        <View style={[style.container, Estilo.corPrimariaBackground]}>
             <View style={[style.container, Estilo.corPrimariaBackground]}>
                <View style={style.container}>
               <AreaEsquerda navigation={navigation} imagem={user.imagem}  user={user}/>
               <View style={style.areaProdutos}>
               <View style={[{width: '100%', justifyContent: 'center', alignItems: 'center'}]}>
               </View>
               <BotaoSelect options={produtosNoBotao} selecionado={false} onChange={handleSelecionado} select={selecionado} titulo='Selecione um produto'/>

                <View style={{width: '90%', height: '60%'}}>
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
                        data={[
                        vendasMapeadas
                        ]}
                    />
                    </VictoryChart>
                </View>
                
               </View>
           </View>
        </View>
        </View>
    )
}