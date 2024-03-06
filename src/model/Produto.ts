export class Produto {
    id!: number;
    endereco!: string;
    tipo!: string;
    quantidade!: number;
    
    

    constructor(id: number, endereco: string, tipo: string, quantidade: number) {
        this.id = id;
        this.endereco = endereco;
        this.tipo = tipo;
        this.quantidade = quantidade;
    }
}