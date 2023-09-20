import { getFirestore } from 'firebase/firestore'
import {firebase, firebaseBD} from './config'

const recuperar = async (...params) => {
    let parametros = ''
    for (let i = 0; i < params.length; i++){
        parametros += params[i]
        if(i !== params)
    }
    const db = getFirestore();
    const paramsRef = 
}