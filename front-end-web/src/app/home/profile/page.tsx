import Image from 'next/image'
import image from '../../../../public/background.jpg'
import Link from 'next/link'

export default function Profile() {
  return (
    <>
      <div className="w-[300px] h-[300px] flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Image
            className="w-10 h-10 rounded-full"
            src={image}
            alt=""
            width={40}
            height={40}
          />
          <div className="font-medium dark:text-white">
            <div>admin@gmail.com</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Status: Logado
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-6">
          <button
            className="bg-white-100 w-[200px] h-10 rounded-full font-bold text-sm text-blue-300
            hover:bg-blue-300 hover:text-white-100 transition-all duration-500"
          >
            Mudar de Login
          </button>

          <Link
            href={'/'}
            className="bg-white-100 w-[200px] h-10 rounded-full font-bold text-sm text-blue-300
            hover:bg-blue-300 hover:text-white-100 transition-all duration-500 flex justify-center items-center"
          >
            Sair da aplicação
          </Link>
        </div>
      </div>
    </>
  )
}
