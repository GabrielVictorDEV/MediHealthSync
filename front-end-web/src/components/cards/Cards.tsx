import { InputCard } from './InputCard'
import img01 from '../../../public/pills.jpg'
import img02 from '../../../public/pills-03.jpg'

export function Cards() {
  return (
    <div className="flex justify-center items-center gap-10 flex-row">
      <InputCard
        text="Receita Branca"
        url="home/receitas/receita-branca"
        imageUrl={img02}
      />

      <InputCard
        text="Notificação de receita"
        url="home/receitas/receita-notificacao"
        imageUrl={img01}
        bgGreen
      />

      <InputCard
        text="Receita Antimicrobiana"
        url="home/receitas/receita-antimicrobiana"
        imageUrl={img02}
      />
    </div>
  )
}
