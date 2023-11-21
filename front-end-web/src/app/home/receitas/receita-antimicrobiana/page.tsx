'use client'
import { z } from 'zod'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface FormData {
  nome?: string
  nomePaciente?: string
  idade?: string
  rg?: string
  orgaoEmissor?: string
  telefone?: string
  cep?: string
  rua?: string
  numero?: string
  bairro?: string
  cidade?: string
  dataPrescricao?: string
  estadoPrescrito?: string
  crm?: string
  nomeMedico?: string
}

const schema = z.object({
  nome: z.string().min(1, { message: 'O campo nome é obrigatório' }),
  nomePaciente: z.string().min(1, { message: 'O campo nome do paciente é obrigatório' }),
  idade: z.string().min(1, { message: 'O campo idade é obrigatório' }),
  rg: z.string().min(7, { message: 'O campo RG é obrigatório' }),
  orgaoEmissor: z.string().min(2, { message: 'O campo OE é obrigatório' }),
  telefone: z.string().min(11, { message: 'O campo telefone é obrigatório' }),
  cep: z.string().min(8, { message: 'O campo CEP é obrigatório' }),
  rua: z.string().min(1, { message: 'O campo rua é obrigatório' }),
  numero: z.string().min(1, { message: 'O campo número é obrigatório' }),
  bairro: z.string().min(1, { message: 'O campo bairro é obrigatório' }),
  cidade: z.string().min(1, { message: 'O campo cidade é obrigatório' }),
  dataPrescricao: z
    .string()
    .min(1, { message: 'O campo data da prescrição é obrigatório' }),
  estadoPrescrito: z
    .string()
    .min(2, { message: 'O campo estado prescrito é obrigatório' }),
  crm: z.string().min(1, { message: 'O campo CRM é obrigatório' }),
  nomeMedico: z
    .string()
    .min(6, { message: 'O campo nome do médico é obrigatório' }),
})

export default function ReceitaAntimicrobiana() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    rg: '',
    orgaoEmissor: '',
    telefone: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    dataPrescricao: '',
    estadoPrescrito: '',
    crm: '',
    nomeMedico: '',
    nomePaciente:'', 
    idade:''
  })

  const [formErrors, setFormErrors] = useState<FormData>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const clearForm = () => {
    setFormData({
      nome: '',
      rg: '',
      orgaoEmissor: '',
      telefone: '',
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      dataPrescricao: '',
      estadoPrescrito: '',
      crm: '',
      nomeMedico: '',
      nomePaciente:'', 
      idade:'',
    })
  }

  function notify() {
    toast.success('Mensagem enviada com sucesso!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      schema.parse(formData)
      console.log(formData)
      setFormErrors({})
      clearForm()
      notify()
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { [key: string]: string } = {}
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message
        })
        setFormErrors(fieldErrors)
      }
    }
  }

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }))
  }

  return (
    <>
      <ToastContainer toastStyle={{ backgroundColor: '#14999C' }} />

      <div className="w-full h-auto min-h-[650px] font-poppins text-slate-600 flex flex-col items-center justify-center py-6">
        <form onSubmit={handleSubmit}>
          {/* Form usuario */}
          <div className="max-w-[900px]">
            <div className="py-4">
              <span className="font-semibold text-xl text-slate-400">
                Dados do Cliente:
              </span>
              <hr className="border-b-2 border-slate-400 w-[600px]" />
            </div>

            <div className="flex flex-col items-center gap-2 ">
              <section className="flex flex-row gap-4">
                <div className="flex flex-col justify-between h-auto">
                  <label htmlFor="nome" className="text-lg px-2 pb-2">
                    Nome:
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    placeholder="•••••••••"
                    value={formData.nome}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-[400px] h-8 p-4 rounded-md focus:border-blue-500 border border-gray-300 outline-none ${
                      formErrors.nome ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.nome ? (
                    <span className="text-red-500">{formErrors.nome}</span>
                  ) : (
                    <span className="h-[25px]"></span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="rg" className="text-lg px-2 pb-2">
                    RG:
                  </label>
                  <input
                    id="rg"
                    name="rg"
                    type="text"
                    placeholder="•••••••••"
                    value={formData.rg}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-[235px] h-8 p-4 rounded-md focus:border-blue-500 border border-gray-300 outline-none ${
                      formErrors.rg ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.rg ? (
                    <span className="text-red-500">{formErrors.rg}</span>
                  ) : (
                    <span className="h-[25px]"></span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="orgaoEmissor" className="text-lg px-2 pb-2">
                    Órgão Emissor:
                  </label>
                  <input
                    id="orgaoEmissor"
                    name="orgaoEmissor"
                    type="text"
                    placeholder="•••••••••"
                    value={formData.orgaoEmissor}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-[235px] h-8 p-4 rounded-md focus:border-blue-500 border border-gray-300 outline-none ${
                      formErrors.orgaoEmissor ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.orgaoEmissor ? (
                    <span className="text-red-500">
                      {formErrors.orgaoEmissor}
                    </span>
                  ) : (
                    <span className="h-[25px]"></span>
                  )}
                </div>
              </section>

              <section className="flex flex-row gap-4">
                <div className="flex flex-col">
                  <label htmlFor="telefone" className="text-lg px-2 pb-2">
                    Telefone:
                  </label>
                  <input
                    id="telefone"
                    placeholder="•••••••••"
                    name="telefone"
                    type="text"
                    value={formData.telefone}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-[290px] h-8 p-4 rounded-md focus:border-blue-500 border border-gray-300 outline-none ${
                      formErrors.telefone ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.telefone ? (
                    <span className="text-red-500">{formErrors.telefone}</span>
                  ) : (
                    <span className="h-[25px]"></span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="cep" className="text-lg px-2 pb-2">
                    CEP:
                  </label>
                  <input
                    id="cep"
                    placeholder="•••••••••"
                    name="cep"
                    type="text"
                    value={formData.cep}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-[290px] h-8 p-4 rounded-md focus:border-blue-500 border border-gray-300 outline-none ${
                      formErrors.cep ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.cep && (
                    <span className="text-red-500">{formErrors.cep}</span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="rua" className="text-lg px-2 pb-2">
                    Rua:
                  </label>
                  <input
                    id="rua"
                    placeholder="•••••••••"
                    name="rua"
                    type="text"
                    value={formData.rua}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-[290px] h-8 p-4 rounded-md focus:border-blue-500 border border-gray-300 outline-none ${
                      formErrors.rua ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.rua && (
                    <span className="text-red-500">{formErrors.rua}</span>
                  )}
                </div>
              </section>

              <section className="flex flex-row gap-4">
                <div className="flex flex-col">
                  <label htmlFor="numero" className="text-lg px-2 pb-2">
                    Número:
                  </label>
                  <input
                    id="numero"
                    placeholder="•••••••••"
                    name="numero"
                    type="text"
                    value={formData.numero}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-[290px] h-8 p-4 rounded-md focus:border-blue-500 border border-gray-300 outline-none ${
                      formErrors.numero ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.numero ? (
                    <span className="text-red-500">{formErrors.nome}</span>
                  ) : (
                    <span className="h-[25px]"></span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="bairro" className="text-lg px-2 pb-2">
                    Bairro:
                  </label>
                  <input
                    id="bairro"
                    placeholder="•••••••••"
                    name="bairro"
                    type="text"
                    value={formData.bairro}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-[290px] h-8 p-4 rounded-md focus:border-blue-500 border border-gray-300 outline-none ${
                      formErrors.bairro ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.bairro && (
                    <span className="text-red-500">{formErrors.bairro}</span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="cidade" className="text-lg px-2 pb-2">
                    Cidade:
                  </label>
                  <input
                    id="cidade"
                    placeholder="•••••••••"
                    name="cidade"
                    type="text"
                    value={formData.cidade}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-[290px] h-8 p-4 rounded-md focus:border-blue-500 border border-gray-300 outline-none ${
                      formErrors.cidade ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.cidade && (
                    <span className="text-red-500">{formErrors.cidade}</span>
                  )}
                </div>
              </section>
            </div>
          </div>

          {/* Form Receita */}
          <div className="max-w-[900px] mt-4">
            <div className="py-4">
              <span className="font-bold text-xl text-slate-400">
                Dados da Receita:
              </span>
              <hr className="border-b-2 border-slate-400 w-[600px]" />
            </div>

            <div className="flex flex-col items-center gap-2 ">

            <section className="flex flex-row gap-4">
                <div className="flex flex-col justify-between">
                  <label htmlFor="nomePaciente" className="text-lg px-2 pb-2">
                    Nome do paciente:
                  </label>
                  <input
                    id="nomePaciente"
                    placeholder="•••••••••"
                    name="nomePaciente"
                    type="text"
                    value={formData.nomePaciente}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-[445px] h-8 p-4 rounded-md focus:border-blue-500 border border-gray-300 outline-none ${
                      formErrors.nomePaciente ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.nomePaciente ? (
                    <span className="text-red-500">
                      {formErrors.nomePaciente}
                    </span>
                  ) : (
                    <span className="h-[25px]"></span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="idade"
                    className="text-lg px-2 pb-2"
                  >
                    Idade:
                  </label>
                  <input
                    id="idade"
                    placeholder="•••••••••"
                    name="idade"
                    type="text"
                    value={formData.idade}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-[445px] h-8 p-4 rounded-md focus:border-blue-500 border border-gray-300 outline-none ${
                      formErrors.idade ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.idade && (
                    <span className="text-red-500">
                      {formErrors.idade}
                    </span>
                  )}
                </div>
              </section>

              <section className="flex flex-row gap-4">
                <div className="flex flex-col justify-between">
                  <label htmlFor="dataPrescricao" className="text-lg px-2 pb-2">
                    Data da Prescrição:
                  </label>
                  <input
                    id="dataPrescricao"
                    placeholder="•••••••••"
                    name="dataPrescricao"
                    type="text"
                    value={formData.dataPrescricao}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-[445px] h-8 p-4 rounded-md focus:border-blue-500 border border-gray-300 outline-none ${
                      formErrors.dataPrescricao ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.dataPrescricao ? (
                    <span className="text-red-500">
                      {formErrors.dataPrescricao}
                    </span>
                  ) : (
                    <span className="h-[25px]"></span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="estadoPrescrito"
                    className="text-lg px-2 pb-2"
                  >
                    Estado Prescrito:
                  </label>
                  <input
                    id="estadoPrescrito"
                    placeholder="•••••••••"
                    name="estadoPrescrito"
                    type="text"
                    value={formData.estadoPrescrito}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-[445px] h-8 p-4 rounded-md focus:border-blue-500 border border-gray-300 outline-none ${
                      formErrors.estadoPrescrito ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.estadoPrescrito && (
                    <span className="text-red-500">
                      {formErrors.estadoPrescrito}
                    </span>
                  )}
                </div>
              </section>

              <section className="flex flex-row gap-4">
                <div className="flex flex-col justify-between">
                  <label htmlFor="crm" className="text-lg px-2 pb-2">
                    CRM:
                  </label>
                  <input
                    id="crm"
                    placeholder="•••••••••"
                    name="crm"
                    type="text"
                    value={formData.crm}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-[445px] h-8 p-4 rounded-md focus:border-blue-500 border border-gray-300 outline-none ${
                      formErrors.crm ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.crm ? (
                    <span className="text-red-500">{formErrors.crm}</span>
                  ) : (
                    <span className="h-[25px]"></span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="nomeMedico" className="text-lg px-2 pb-2">
                    Nome do Médico:
                  </label>
                  <input
                    id="nomeMedico"
                    placeholder="•••••••••"
                    name="nomeMedico"
                    type="text"
                    value={formData.nomeMedico}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={`w-[445px] h-8 p-4 rounded-md focus:border-blue-500 border border-gray-300 outline-none ${
                      formErrors.nomeMedico ? 'border-red-500' : ''
                    }`}
                  />
                  {formErrors.nomeMedico && (
                    <span className="text-red-500">
                      {formErrors.nomeMedico}
                    </span>
                  )}
                </div>
              </section>
            </div>
          </div>

          <div className="w-full my-10 flex justify-end gap-2">
            <button className="bg-blue-500 w-[250px] h-10 rounded-full text-white-100 border-none hover:bg-blue-600 transition-all duration-300 outline-none">
              Cadrastar Receita
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
