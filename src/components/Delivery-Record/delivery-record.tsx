"use client"
import {useState } from "react"

interface DeliveryRecordProps {
    closeModal: () => void
    registerModal: boolean
}
export const DeliveryRecord =({ closeModal, registerModal}: DeliveryRecordProps) => {
    const [slabol, setSlaBol] = useState(true)
    const [modal, setModal] = useState(false)

    const regitrarVenda = () =>{
        
    }

    return (
        <>
            <div className={`h-[60vh] w-[25vw] bg-blue-200 absolute shadow-xl rounded-lg overflow-hidden duration-200 ${!registerModal || modal ? 'opacity-0 invisible':'opacity-100 visible'}`}>

                <div onClick={()=>closeModal()} className="w-full flex justify-end p-2 text-xl font-semibold"><svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer duration-200 hover:scale-125" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-width="2"><path d="M7 7L17 17"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0"/></path><path d="M17 7L7 17"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="16;0"/></path></g></svg></div>
                <h1 className="w-full flex justify-center text-2xl font-semibold mb-[25%] pt-8">Registro de entrega</h1>

                <div className="flex justify-center items-center h-[4vh] gap-2 mb-[3%]">
                    <div className="bg-white h-full w-[4vh] flex justify-center items-center rounded-s-lg">
                    <svg   xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 2048 2048">
                        <path fill="currentColor" d="m1472 600l575 288v782l-575 288l-576-286v-321l-320 159L0 1224l1-784l575-288l575 288l1 321zm368 327l-368-183l-368 183l368 184zM944 479L576 296L208 479l368 184zM129 583l-1 561l384 191V774zm511 752l257-127V888l127-63l-1-242l-383 191zm385-304l-1 561l384 191v-561zm511 752l383-192v-560l-383 191z"/></svg>
                    </div>
                    <input id="quantidade" type="number" className="h-full w-[60%] px-2 font-semibold rounded-r-lg outline-blue-400" placeholder="Quantidade" />
                </div>

                <div className="flex justify-center items-center h-[4vh] gap-2 mb-[3%]">
                    <div className="bg-white h-full w-[4vh] flex justify-center items-center rounded-s-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 2048 2048"><path fill="currentColor" d="m960 120l832 416v1040l-832 415l-832-415V536zm625 456L960 264L719 384l621 314zM960 888l238-118l-622-314l-241 120zM256 680v816l640 320v-816zm768 1136l640-320V680l-640 320z"/></svg>
                    </div>
                    <select id="tipo"  className={`select h-full w-[60%] px-2 font-semibold rounded-r-lg outline-blue-400 ${slabol ? 'text-gray-400' : ''} `} 
                    onChange={(e) => {
                        if(e.target.value != "0"){
                            setSlaBol(false)
                        }
                    }}>
                        <option value="0" className="text-gray-300" selected disabled>Tipo de Produto</option>
                        <option value="1">Leite</option>
                        <option value="2">Iogurte</option>
                        <option value="3">Queijo</option>
                        <option value="4">Creme de leite</option>
                    </select>
                </div>

                <div className="flex justify-center items-center h-[4vh] gap-2 mb-[10%]">
                    <div className="bg-white h-full w-[4vh] flex justify-center items-center rounded-s-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 5a3 3 0 0 0-3 3v9.975l-.333.298a5 5 0 1 0 6.666 0L19 17.975V8a3 3 0 0 0-3-3m-5 3a5 5 0 0 1 10 0v9.101a7 7 0 1 1-10 0zm4 4a1 1 0 1 1 2 0v7.17a3.001 3.001 0 1 1-2 0z"/></svg>
                    </div>
                    <input id="endereco" type="text" className="h-full w-[60%] px-2 font-semibold rounded-r-lg outline-blue-400" placeholder="Endereco" />
                </div>

                <div className="flex justify-center font-semibold">
                    <button  className="bg-blue-400 w-[10vw] p-2 rounded-lg duration-200 hover:scale-105">Registrar</button>
                </div>

            </div>
        </>
    )
}
