import React from 'react'
import { Navbar } from '@/components/Navbar'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white-100 h-screen flex flex-col">
      <Navbar />
      <div className="w-full h-auto flex justify-center items-center bg-gradient-to-b from-blue-300 to-blue-800">
        <div className="bg-blue-200 w-full h-auto min-h-[700px] rounded-[24px] flex justify-center items-center flex-col gap-4 shadow-md shadow-slate-700 m-8 max-w-6xl">
          {children}
        </div>
      </div>
    </div>
  )
}
