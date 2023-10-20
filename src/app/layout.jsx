import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Entrega 4',
  description: '1TDSPM - Entrega 4',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="dark:bg-slate-400">

    <header>
      <nav>
        <Link href="/">HOME</Link> | 
        <Link href="/produtos/mamao">MAMÃO</Link> | 
        <Link href="/produtos/melao">MELÃO</Link> | 
        <Link href="/produtos/manga">MANGA</Link>
      </nav>
    </header>

        {children}
      </body>
    </html>
  )
}
