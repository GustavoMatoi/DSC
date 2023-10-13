import React, {useEffect, useState, useCallback} from 'react'
import { printToFileAsync } from 'expo-print'
import { shareAsync } from 'expo-sharing'
import {Text, View, SafeAreaView, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import Venda from './Venda'
import Estilo from '../../Estilo'
import { recuperarDocumentos } from '../../../api/crud'
import AreaEsquerda from './AreaEsquerda'
export default ({navigation, route}) => {
    const {user, vendas} = route.params
    const [rows, setRows] = useState([])
    const [carregando, setCarregando] = useState(true)
    
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

  

    return (
        <View style={[style.container, Estilo.corPrimariaBackground]}>
             <View style={[style.container, Estilo.corPrimariaBackground]}>
                <View style={style.container}>
               <AreaEsquerda navigation={navigation} imagem={user.imagem} />
               <View style={style.areaProdutos}>
               <View style={[{width: '100%', justifyContent: 'center', alignItems: 'center'}]}>
               </View>

                   {vendas.map((item, index) => (
  <View key={index} style={style.row}>
    <FlatList
      data={vendas}
      horizontal={true}
      renderItem={({ item }) => (
        <View style={{ marginHorizontal: 15 }}>
          {console.log('item', item.produto.nome)}
          <Venda
            cliente={item.produto.nome}
            produtos={item.produto.nome}
            total={item.produto.precoIndividual}
            onPress={() => navigation.navigate('Relatório de Venda', {item: item})}
          />
        </View>
                                   
                               )}
                           />
                       </View>
                               )) }
               </View>
           </View>
        </View>
        </View>
    )
}