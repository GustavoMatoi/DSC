import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc, query } from 'firebase/firestore'
import {firebase, firebaseBD} from './config'

const destrinchaParametros = (params) => {
    let parametros = ''
    for (let i = 0; i < params.length; i++){
        parametros += params[i]
        if(i !== params.length - 1){
            parametros += '/'
        }
    }
    return parametros
}

const recuperarDocumentos = async (...params) => {
    const parametros = destrinchaParametros(params)
    const db = getFirestore()
    const documentos = []
    try {
        const parametroRef = collection(db, parametros);
        const querySnapshot = await getDocs(parametroRef)  

        console.log('querySnapshot', querySnapshot)
        querySnapshot.forEach((paramDoc) => {
            const dados = paramDoc.data()
            documentos.push(dados)
          })
    } catch (error) {
        console.log("Não foi possível recuperar os documentos.", error)
    }
    return documentos
}

const criarDocumento = async (documento, ...params) => {
    const parametros = destrinchaParametros(params)
    const novoDocumento = documento
    setDoc(doc(firebaseBD, parametros), {
    ...novoDocumento
    }).then(() => {
        console.log('sucesso')
    }
    ).catch((error) => {
        console.log("Erro ao criar o documento", error)
        return false
    })
    return true
}

const excluirDocumento = async (...params) => {
    const db = getFirestore();
    const parametro = destrinchaParametros(params);
    const docRef = doc(db, parametro);
    try {
        await deleteDoc(docRef);
        console.log('Documento excluído com sucesso!');
    } catch (error) {
        console.error('Ocorreu um erro na exclusão do documento:', error);
    }

}

export {recuperarDocumentos, criarDocumento, excluirDocumento}

