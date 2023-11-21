'use client'
import { configs } from '@/configs'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsCardHeading, BsCardList, BsCardText } from 'react-icons/bs'

interface PrescricaoData {
  id: string
  dataPrescricao: string
  nome: string
  crm: string
  nomeMedico: string
}

const receitaBrancaURL = String(configs.RECEITA_BRANCA_URL)
const receitaAntimicrobianaURL = String(configs.RECEITA_ANTIMICROBIANA_URL)
const receitaNotificacaoURL = String(configs.RECEITA_NOTIFICACAO)

export default function Cadrastadas() {
  const [data, setData] = useState<PrescricaoData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(receitaBrancaURL)
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.error('Erro ao obter dados do backend', error)
      }
    }

    fetchData()
  }, [])

  const getAllReceitaBranca = async () => {
    try {
      const response = await fetch(receitaBrancaURL)
      const jsonData = await response.json()
      setData(jsonData)
    } catch (error) {
      console.error('Erro ao obter dados do backend', error)
    }
  }

  const getAllReceitaNotificacao = async () => {
    try {
      const response = await fetch(receitaNotificacaoURL)
      const jsonData = await response.json()
      setData(jsonData)
    } catch (error) {
      console.error('Erro ao obter dados do backend', error)
    }
  }

  const getAllReceitaAntimicrobiana = async () => {
    try {
      const response = await fetch(receitaAntimicrobianaURL)
      const jsonData = await response.json()
      setData(jsonData)
    } catch (error) {
      console.error('Erro ao obter dados do backend', error)
    }
  }

  return (
    <>
      <section className="w-[1000px] h-[600px] flex items-start flex-col top-0">
        <div className="w-full py-6 flex justify-between items-center">
          <div>
            <h1 className="text-lg">Filtrar tipo da receita</h1>
          </div>

          <div className="flex gap-2 text-slate-600">
            <span
              className="hover:bg-blue-300 hover:text-white-100 transition-all duration-300 p-3 rounded-md"
              onClick={getAllReceitaBranca}
              title="Filtrar por Receita Branca"
            >
              <BsCardText size={20} />
            </span>
            <span
              className="hover:bg-blue-300 hover:text-white-100 transition-all duration-300 p-3 rounded-md"
              onClick={getAllReceitaNotificacao}
              title="Filtrar por Notificação de Receita"
            >
              <BsCardHeading size={20} />
            </span>
            <span
              className="hover:bg-blue-300 hover:text-white-100 transition-all duration-300 p-3 rounded-md"
              onClick={getAllReceitaAntimicrobiana}
              title="Filtrar por Receita Antimicrobiana"
            >
              <BsCardList size={20} />
            </span>
            <span
              className="hover:bg-blue-400 transition-all duration-300 p-3 rounded-md"
              title="Voltar para Home"
            >
              <Link href={'/home'} scroll={false}>
                <AiFillHome />
              </Link>
            </span>
          </div>
        </div>
        <div className="w-[1000px] max-h-[500px] overflow-x-auto scrollbar-thin rounded-md">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-md">
            <thead className="text-xs text-blue-200 uppercase bg-blue-300 py-10">
              <tr>
                <th scope="col" className="px-6 py-3 w-1/4">
                  Data da prescrição
                </th>
                <th scope="col" className="px-6 py-3 w-1/4">
                  Nome
                </th>
                <th scope="col" className="px-6 py-3 w-1/4">
                  CRM
                </th>
                <th scope="col" className="px-6 py-3 w-1/4">
                  Nome do Médico
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b bg-slate-300 text-gray-900 border-blue-200"
                >
                  <td className="px-6 py-4 w-1/4 font-medium whitespace-nowrap dark:text-white">
                    {item.dataPrescricao}
                  </td>
                  <td className="px-6 py-4 w-1/4">{item.nome}</td>
                  <td className="px-6 py-4 w-1/4">{item.crm}</td>
                  <td className="px-6 py-4 w-1/4">{item.nomeMedico}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
