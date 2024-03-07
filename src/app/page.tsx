'use client'
import { Display } from "@/components/Display/Display";
import { useEffect, useRef } from "react";
export default function Home() {
  const ref = useRef(null)

  useEffect(() => {
  }, [ref]);

  return (
      <div className="h-full w-full flex flex-col justify-around items-center" >
        <p className="text-4xl font-semibold duration-200 'blur-lg':'blur-none'">Bem vindo</p>
        <div className="w-5/6 flex justify-between duration-200  'blur-lg':'blur-none'">
          <Display />
        </div>
      </div>
  )
}
