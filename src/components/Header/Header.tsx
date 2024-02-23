export const Header = () => {
    return (
        <div className=" h-[8%] w-full bg-blue-400 flex justify-around items-center">
            <div>
                <a className="font-semibold text-2xl" href="/">Página inicial</a>
            </div>
            <div>
                <a className="font-semibold text-2xl" href="http://localhost:3000/delivery-list">Histórico de entregas</a>
            </div>
        </div>
    )
}