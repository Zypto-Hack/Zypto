import Header from '@/components/header'
import './globals.css'

export const metadata = {
  title: 'Zypto Finance',
  description: 'A community of Angel Investors',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex h-full flex-col'>
        <Header />
        {children}
        </body>
    </html>
  )
}
