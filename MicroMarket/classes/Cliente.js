import { Usuario } from "./Usuario";

class Cliente extends Usuario{
    constructor(nome, estado, cidade, bairro, rua, numero, email, senha, cpf){
        super(nome, estado, cidade, bairro, rua, numero, email, senha)
        this.cpf = cpf
    }
    getCpf = () => {return this.cpf}
    setCpf = (cpf) => {this.cpf = cpf}
}

export {Cliente}