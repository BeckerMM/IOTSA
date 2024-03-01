export const Display =() => {
  return (
    <>
      <div  className="h-[30%] w-[30%] flex flex-col items-center">
        <div className="rounded-sm w-full h-full flex justify-center items-center border-b-[4px] border-gray-300"><h1 className="text-4xl font-bold">0</h1></div>
        <div>Caixa de leite em estoque</div>
      </div>
      <div  className="h-[30%] w-[30%] flex flex-col items-center">
        <div className="rounded-sm w-full h-full flex justify-center items-center border-b-[4px] border-gray-300"><h1 className="text-4xl font-bold">0</h1></div>
        <div>Caixas de creme de leite em estoque</div>
      </div>
      <div  className="h-[30%] w-[30%] flex flex-col items-center">
        <div className="rounded-sm w-full h-full flex justify-center items-center border-b-[4px] border-gray-300"><h1 className="text-4xl font-bold">0</h1></div>
        <div>Caixas de iogurte e queijo prato em estoque</div>
      </div>
    </>
  );
}