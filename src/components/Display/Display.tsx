import { get } from "@/Service/http/gets";
import { useEffect, useState } from "react";



export const Display = () => {
  const [leiteIntegral, setLeiteIntegral] = useState<any[]>([]);
  const [leiteDesnatado, setLeiteDesnatado] = useState<any[]>([]);
  const [queijo, setQueijo] = useState<any[]>([]);
  const [iogurte, setIogurte] = useState<any[]>([]);
  const [leiteSemidesnatado, setLeiteSemidesnatado] = useState<any[]>([]);
  const [cremeDeLeite, setCremeDeLeite] = useState<any[]>([]);
  const [leiteZeroLactose, setLeiteZeroLactose] = useState<any[]>([]);

  useEffect(() => {
    get('leiteenvasado').then((res) => {
      res.leiteenvasadoobj.forEach((item: any) => {
        switch (item.produto) {
          case 'Leite Integral':
            setLeiteIntegral((prevItems) => [...prevItems, item]);
            break;
          case 'Leite Desnatado':
            setLeiteDesnatado((prevItems) => [...prevItems, item]);
            break;
          case 'Queijo':
            setQueijo((prevItems) => [...prevItems, item]);
            break;
          case 'Iogurte':
            setIogurte((prevItems) => [...prevItems, item]);
            break;
          case 'Leite Semidesnatado':
            setLeiteSemidesnatado((prevItems) => [...prevItems, item]);
            break;
          case 'Creme de Leite':
            setCremeDeLeite((prevItems) => [...prevItems, item]);
            break;
          case 'Leite Zero Lactose':
            setLeiteZeroLactose((prevItems) => [...prevItems, item]);
            break;
          default:
            break;
        }
      });
    });
  }, []);

  console.log(leiteDesnatado)
  console.log(cremeDeLeite)
  console.log(iogurte)
  return (
    <>
      <div className="h-[30%] w-[30%] flex flex-col items-center">
        <div className="rounded-sm w-full h-full flex justify-center items-center border-b-[4px] border-gray-300"><h1 className="text-4xl font-bold">0</h1></div>
        <div>Leite Integral</div>
      </div>
      <div className="h-[30%] w-[30%] flex flex-col items-center">
        <div className="rounded-sm w-full h-full flex justify-center items-center border-b-[4px] border-gray-300"><h1 className="text-4xl font-bold">0</h1></div>
        <div>Leite Desnatado</div>
      </div>
      <div className="h-[30%] w-[30%] flex flex-col items-center">
        <div className="rounded-sm w-full h-full flex justify-center items-center border-b-[4px] border-gray-300"><h1 className="text-4xl font-bold">0</h1></div>
        <div>Queijo</div>
      </div>
      <div className="h-[30%] w-[30%] flex flex-col items-center">
        <div className="rounded-sm w-full h-full flex justify-center items-center border-b-[4px] border-gray-300"><h1 className="text-4xl font-bold">0</h1></div>
        <div>Iogurte</div>
      </div>
      <div className="h-[30%] w-[30%] flex flex-col items-center">
        <div className="rounded-sm w-full h-full flex justify-center items-center border-b-[4px] border-gray-300"><h1 className="text-4xl font-bold">0</h1></div>
        <div>Leite Semidesnatado</div>
      </div>
      <div className="h-[30%] w-[30%] flex flex-col items-center">
        <div className="rounded-sm w-full h-full flex justify-center items-center border-b-[4px] border-gray-300"><h1 className="text-4xl font-bold">0</h1></div>
        <div>Creme de Leite</div>
      </div>
      <div className="h-[30%] w-[30%] flex flex-col items-center">
        <div className="rounded-sm w-full h-full flex justify-center items-center border-b-[4px] border-gray-300"><h1 className="text-4xl font-bold">0</h1></div>
        <div>Leite Zero Lactose</div>
      </div>
    </>
  );
}