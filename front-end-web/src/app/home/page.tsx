import { Cards } from '@/components/cards/Cards'

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-3xl font-semibold tracking-wider text-slate-600 font-inter uppercase rounded-sm p-2">
          Selecione o tipo de receita
        </p>
      </div>

      <div className="mt-6">
        <Cards />
      </div>
    </>
  )
}
