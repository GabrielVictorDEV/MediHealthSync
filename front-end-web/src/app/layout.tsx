import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins, Raleway, Roboto } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-inter',
})
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-raleway',
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-poppins',
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'MediHealthSync',
  description: 'Controle de receitas medicas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${poppins.variable} ${raleway.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
