import { Usuario } from "./Usuario";

class Microempreendedor extends Usuario {
    constructor(cnpj, nome, estado, cidade, bairro, rua, numero, email, senha){
        super(nome, estado, cidade, bairro, rua, numero, email, senha)
        this.cnpj = cnpj
    }
    
    getCnpj = () => {return this.cnpj}
    setCnpj = (cnpj) => {this.cnpj = cnpj}
}

export {Microempreendedor}