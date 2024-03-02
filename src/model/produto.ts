export class produto{
    nome: string;
    temperatura: string;
    peso: string;
    tipo: string;
    quantidade: string;
    constructor(nome: string, temperatura: string, peso: string, tipo: string, quantidade: string){
        this.nome = nome;
        this.temperatura = temperatura;
        this.peso = peso;
        this.tipo = tipo;
        this.quantidade = quantidade;
    }
}