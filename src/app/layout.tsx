import './globals.css'
import { Open_Sans } from 'next/font/google'

const opensans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Portifólio Isaque Matos',
  description: 'Portfólio Isaque Matos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={opensans.className}>{children}</body>
    </html>
  )
}
