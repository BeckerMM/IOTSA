'use client'
import { DeliveryRecord } from "@/components/Delivery-Record/delivery-record";
import { Display } from "@/components/Display/Display";
import { useEffect, useRef, useState } from "react";
import {get , getmiguel} from "@/Service/http/gets"
export default function Home() {
  const ref = useRef(null)
  const [registerModal, setRegisterModal] = useState<boolean>(false)

  useEffect(() => {
    console.log(ref);
    getmiguel('becker').then((res) => { console.log(res) })
    get('leiteenvasado').then((res) => { console.log(res) })
    window.addEventListener("click", (e) => {
      console.log(e.target);
      
    })
  }, [ref]);

  const mudar =() => {
    window.location.href = '/delivery-list'
  }
  return (
      <div className={`h-full w-full flex flex-col justify-around items-center  `} >
        <p className={`text-4xl font-semibold duration-200 ${registerModal ? 'blur-lg':'blur-none'}`}>Bem vindo</p>
        <div className={`w-5/6 flex justify-between duration-200 ${registerModal ? 'blur-lg':'blur-none'}`}>
          <Display />
        </div>
        <div className={`w-full flex justify-center gap-[10%] duration-200 ${registerModal ? 'blur-lg':'blur-none'}`} >
          <button onClick={()=>mudar()} className="bg-blue-400 w-[15%] min-w-fit p-4 font-semibold rounded-3xl duration-200 hover:scale-105">Ver entregas em andamento</button>
          <button className="bg-blue-400 w-[15%] min-w-fit p-4 font-semibold rounded-3xl duration-200 hover:scale-105" onClick={() => {
            setRegisterModal(!registerModal)
          }}>Registrar entrega</button>
        </div>
      <DeliveryRecord  registerModal={registerModal} closeModal={()=> setRegisterModal(false)}/>
      </div>
  )
}
