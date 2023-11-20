import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

interface InputCardProps {
  text: string
  url: string
  bgGreen?: boolean
  imageUrl: any
}

export const InputCard: React.FC<InputCardProps> = ({
  text,
  bgGreen,
  url,
  imageUrl,
}) => {
  const styles = `${bgGreen ? 'bg-blue-400' : 'bg-blue-500'} ${
    bgGreen ? 'hover:bg-blue-500' : 'hover:bg-blue-600'
  } min-w-[300px] min-h-[200px]	bg-white border rounded-lg cursor-pointer transition-all duration-500 shadow-md shadow-slate-400 border-none`

  return (
    <Link href={url}>
      <div className={styles}>
        <Image src={imageUrl} alt="" width={300} height={300} />
        <div className="p-5">
          <p className="text-2xl font-bold tracking-tight text-white-100 bg-blue pb-2">
            {text}
          </p>
          <p className="font-normal text-xs text-white-100 font-raleway">
            Tipos de Notificação de receita
          </p>{' '}
        </div>
      </div>
    </Link>
  )
}
