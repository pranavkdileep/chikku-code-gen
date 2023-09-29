import './globals.css'
import { Inter } from 'next/font/google'
import favicon from './favicon.ico'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chikku Code Gen',
  description: 'Code generator by Chikku',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href={favicon.src} />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
