import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Markdown Previewer',
  description: 'Simple React Markdown Previewer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script
        src="https://kit.fontawesome.com/7f16c284d6.js"
        crossOrigin="anonymous"
      />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.2/marked.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.1.4/purify.min.js" />
    </html>
  )
}
