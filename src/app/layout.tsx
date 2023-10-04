import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Navbar } from './components/Navbar'

const roboto = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700"] })

export const metadata: Metadata = {
  title: 'RusCrimes',
  description: 'Russian war crimes in Ukraine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${roboto.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
