import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '600', '700'] })

export const metadata = {
  title: 'Dr. Nirthika Rajendran - Portfolio',
  description: 'Professional portfolio of Dr. Nirthika Rajendran, Lecturer at University of Jaffna',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}

