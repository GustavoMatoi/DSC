class Usuario{
    constructor(nome, estado, cidade, bairro, rua, numero, email, senha){
        this.nome = nome
        this.estado = estado
        this.cidade = cidade
        this.bairro = bairro
        this.rua = rua
        this.numero = numero 
        this.email = email 
        this.senha = senha
    }
    getNome = () => {return this.nome}
    setNome = (nome) => {this.nome = nome}
    getEstado = () => {return this.estado}
    setEstado = (estado) => {this.estado = estado}
    getCidade = () => {return this.cidade}
    setCidade = (cidade) => {this.cidade = cidade}
    getBairro = () => {return this.bairro}
    setBairro = (bairro) => {this.bairro = bairro}
    getRua = () => {return this.rua}
    setRua = (rua) => {this.rua = rua}
    getNumero = () => {return this.numero}
    setNumero = (numero) => {this.numero = numero}
    getEmail = () => {return this.email}
    setEmail = (email) => {this.email = email}
    getSenha = () => {return this.senha}
    setSenha = (senha) => {this.senha = senha}
}

export {Usuario}