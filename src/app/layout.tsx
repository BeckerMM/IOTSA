import './globals.css'
import { Header } from "@/components/Header/Header"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='w-screen h-screen'>
        <Header />
        <div className='w-full h-[90%]'>
          {children}
        </div>
      </body>
    </html>
  )
}
