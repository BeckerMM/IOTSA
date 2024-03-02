import { useState, useEffect } from "react"
import { produto } from "@/models"

export const DeliveryList = () => {

    
    const [produtos, setProdutos] = useState<Produto[]>([])
    

    useEffect(() => {
        async function getProdutos() {
            const response = await getProdutos();
            setProdutos(response);
        }
        getProdutos();
    }, []);

    return (
        <div className="w-full h-full flex justify-center">
            <div className="bg-[#D9D9D9] w-[80%] h-80%]">
                <tr className="flex ">
                    <th className="border border-black p-2 w-[52vh]">Número da entrega</th>
                    <th className="border border-black p-2 w-[30vh]">Temperatura</th>
                    <th className="border border-black p-2 w-[20vh]">Peso</th>
                    <th className="border border-black p-2 w-[30vh]">Tipo</th>
                    <th className="border border-black p-2 w-[30vh]">Quantidade</th>
                </tr>

                {produtos.map((produto) =>
                    <tr>
                        <th className="border border-black p-2 w-[52vh]">{produto.nome}</th>
                        <th className="border border-black p-2 w-[30vh]">{produto.temperatura}</th>
                        <th className="border border-black p-2 w-[20vh]">{produto.peso}</th>
                        <th className="border border-black p-2 w-[30vh]">{produto.tipo}</th>
                        <th className="border border-black p-2 w-[30vh]">{produto.quantidade}</th>
                    </tr>)}
            </div>
        </div>
    )
}