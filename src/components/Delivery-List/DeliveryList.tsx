import { useState, useEffect } from "react"
import { Produto } from "@/model";



export const DeliveryList = () => {

    
    const [produtos, setProdutos] = useState<Produto[]>([])
    

    useEffect(() => {
        async function getProdutos() {
            const response = await getProdutos();

        }
        getProdutos();
    }, []);

    return (
        <div className="w-full h-full flex justify-center">
            <div className="bg-[#D9D9D9] w-[80%] h-80%]">
                <tr className="flex justify-center">
                    <th className="border border-black p-2 w-[52vh]">Número da entrega</th>
                    <th className="border border-black p-2 w-[30vh]">Endereco</th>
                    <th className="border border-black p-2 w-[30vh]">Tipo</th>
                    <th className="border border-black p-2 w-[30vh]">Quantidade</th>
                </tr>

                {produtos.map((produto) =>
                    <tr>
                        <th className="border border-black p-2 w-[52vh]">{produto.id}</th>
                        <th className="border border-black p-2 w-[30vh]">{produto.endereco}</th>
                        <th className="border border-black p-2 w-[30vh]">{produto.tipo}</th>
                        <th className="border border-black p-2 w-[30vh]">{produto.quantidade}</th>
                    </tr>)}
            </div>
        </div>
    )
}