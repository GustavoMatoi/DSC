import React, { useEffect, useState, useCallback } from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Estilo from "../../Estilo";
import AreaEsquerda from "../Home/AreaEsquerda";
import Produto from "./Produto";
import { excluirDocumento, recuperarDocumentos } from "../../../api/crud";
import { TouchableOpacity } from "react-native-web";

export default ({navigation}) => {
    const [produtos, setProdutos] = useState([])
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

    const excluirDocumentos = (nome) => {
        const confirmacao = confirm("Deseja excluir mesmo? Não será possível recuperar os dados após a confirmação.");
        if (confirmacao) {
            excluirDocumento('Microempreendedores', 'teste', 'Produtos', nome)
        } else {
            alert("Exclusão cancelada.")
        }

    }

    const editarDocumento = (item) => {
        navigation.navigate('Editar', {nome: item.nome, imagem: item.imagem, tags: item.tags, descricao: item.descricao, preco: item.precoIndividual, estoque: item.estoque})
    }
        const fetchData =  useCallback( async () => {
            try {
                const produtosData = await recuperarDocumentos('Microempreendedores', 'teste', 'Produtos');
                setProdutos(produtosData);

                const itemsPerRow = 5;
                const rowsAux = [];
                for (let i = 0; i < produtosData.length; i += itemsPerRow) {
                    const rowItems = produtosData.slice(i, i + itemsPerRow);
                    rowsAux.push(rowItems);
                }
                setRows(rowsAux);
                setCarregando(false);
            } catch (error) {
                console.error("Erro ao recuperar os dados:", error);
                setCarregando(false);
            }
        }
        , [])


    useEffect(() => {
        fetchData()
    })

    return (
        <View style={[style.container, Estilo.corPrimariaBackground]}>
            {carregando ? <Text>Carregando</Text> :
                <View style={style.container}>
                    <AreaEsquerda />
                    <View style={style.areaProdutos}>
                    <View style={[{width: '100%', justifyContent: 'center', alignItems: 'center'}]}>
                    <TouchableOpacity style={[{width: 200, marginBottom: 20, height: 50, justifyContent: 'center', alignItems: 'center',  borderRadius: 20, marginTop: 10}, Estilo.corSecundariaBackground]} onPress={() => navigation.navigate('Cadastrar Produtos')}>
                        <Text style={[Estilo.texto15px, Estilo.textoCorPrimaria, {fontWeight: 'bold'}]}>CADASTRAR PRODUTO</Text>
                    </TouchableOpacity>
                    </View>
                        {rows.map((row, index) => (
                            <View key={index} style={style.row}>
                                <FlatList
                                    data={row}
                                    horizontal={true}
                                    renderItem={({ item }) => (
                                        <View style={{ marginHorizontal: 15 }}>
                                            <Produto 
                                            nome={item.nome}
                                            descricao={item.descricao}
                                            tags={item.tags}
                                            precoIndividual={item.precoIndividual}
                                            imagem={item.imagem}
                                            onPressExcluir={() => excluirDocumentos(item.nome)}
                                            onPressEditar={() => editarDocumento(item)}
                                            />
                                            </View>
                                        
                                    )}
                                />
                            </View>
                        ))}
                    </View>
                </View>}
        </View>
    );
};
