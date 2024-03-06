export class Produto{
    id: number;
    endereco: string;
    tipo: string;
    quantidade: string;
    constructor(id: number, endereco: string, tipo: string, quantidade: string){
        this.id = id;
        this.endereco = endereco;
        this.tipo = tipo;
        this.quantidade = quantidade;
    }
}