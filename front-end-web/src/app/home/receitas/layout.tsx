'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { AiFillHome } from 'react-icons/ai'
import { RxDividerVertical } from 'react-icons/rx'

export default function ReceitasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [estado, setEstado] = useState({
    branca: false,
    notificacao: false,
    antimicrobiana: false,
  })

  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    setEstado({
      branca: url === '/home/receitas/receita-branca?',
      notificacao: url === '/home/receitas/receita-notificacao?',
      antimicrobiana: url === '/home/receitas/receita-antimicrobiana?',
    })
  }, [pathname, searchParams])

  return (
    <>
      <div className="flex justify-between flex-col w-full min-h-[700px] box box-content text-white-100 top-0">
        <div className="w-full h-14 flex flex-row top-0">
          <div className="bg-blue-300 w-auto flex items-center justify-center rounded-tl-lg whitespace-nowrap pl-8">
            <span
              className={`hover:bg-blue-400 transition-all duration-300 p-2 rounded-md font-semibold ${
                estado.branca ? 'bg-blue-400' : 'bg-blue-300'
              }`}
            >
              <Link href={'/home/receitas/receita-branca'} scroll={false}>
                Receita Branca
              </Link>
            </span>
            <RxDividerVertical fontSize="2rem" />
          </div>
          <div className="bg-blue-300 w-auto flex items-center justify-center whitespace-nowrap">
            <span
              className={`hover:bg-blue-400 transition-all duration-300 p-2 rounded-md font-semibold ${
                estado.notificacao ? 'bg-blue-400' : 'bg-blue-300'
              }`}
            >
              <Link href={'/home/receitas/receita-notificacao'} scroll={false}>
                Notificação de Receita
              </Link>
            </span>
            <RxDividerVertical fontSize="2rem" />
          </div>
          <div className="bg-blue-300 w-auto flex items-center justify-center whitespace-nowrap">
            <span
              className={`hover:bg-blue-400 transition-all duration-300 p-2 rounded-md font-semibold ${
                estado.antimicrobiana ? 'bg-blue-400' : 'bg-blue-300'
              }`}
            >
              <Link
                href={'/home/receitas/receita-antimicrobiana'}
                scroll={false}
              >
                Receita Antimicrobiana
              </Link>
            </span>
            <RxDividerVertical fontSize="2rem" />
          </div>
          <div className="bg-blue-300 w-full "></div>

          <div className="bg-blue-300 w-auto flex items-center justify-center rounded-tr-lg pr-8">
            <span className="hover:bg-blue-400 transition-all duration-300 p-3 rounded-md">
              <Link href={'/home'} scroll={false}>
                <AiFillHome />
              </Link>
            </span>
          </div>
        </div>
        <div className=" h-auto">{children}</div>
      </div>
    </>
  )
}
