import Link from 'next/link'

export default function Home() {
  return (
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
              className="outline-none border-b-2 border-white-100 bg-transparent text-2xl pb-2 text-white-100"
            />
          </div>

          <Link href={'/home'}>
            <button
              className="bg-white-100 w-[300px] h-12 rounded-full font-bold text-lg text-pink-100 
              hover:bg-pink-100 hover:text-white-100 transition-all duration-500 border-2 border-white-100"
            >
              ACESSAR
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}
