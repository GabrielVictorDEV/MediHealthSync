'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleLogin = () => {
    if (login === 'admin@gmail.com' && password === 'admin123456') {
      router.push('/home')
    } else {
      toast.error('Insira uma senha e login válidos!', {
        position: 'top-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
    }
  }

  return (
    <>
      <ToastContainer />

      <div className="h-screen grid grid-cols-2">
        {/* Parte Esquerda */}
        <section className="bg-white-100 flex flex-col justify-center items-center">
          <div className="flex flex-col gap-2">
            <p className="text-4xl font-extrabold tracking-wider text-pink-100">
              ACESSAR APLICAÇÃO
            </p>
            <hr className="w-[260px] border-pink-100 border-4 rounded-full" />
          </div>
        </section>

        {/* Parte Direita */}
        <main className="bg-pink-100 flex justify-center items-center flex-col gap-4">
          <div className="w-full p-[100px] flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <label
                htmlFor="login"
                className="text-[40px] justify-start flex font-semibold text-white-100"
              >
                LOGIN
              </label>
              <input
                type="text"
                id="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="outline-none border-b-2 border-white-100 bg-transparent text-2xl pb-2 text-white-100"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label
                htmlFor="password"
                className="text-[40px] justify-start flex font-semibold text-white-100"
              >
                SENHA
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="outline-none border-b-2 border-white-100 bg-transparent text-2xl pb-2 text-white-100"
              />
            </div>

            <button
              onClick={handleLogin}
              className="bg-white-100 w-[300px] h-12 rounded-full font-bold text-lg text-pink-100
            hover:bg-pink-100 hover:text-white-100 transition-all duration-500 border-2 border-white-100"
            >
              ACESSAR
            </button>
          </div>
        </main>
      </div>
    </>
  )
}
