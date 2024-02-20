import { Display } from "@/components/Display/Display";

export default function Home() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="h-[70%] w-5/6 flex justify-between">
        <Display />
        <Display />
        <Display />
      </div>
    </div>
  )
}
