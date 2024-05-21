'use client'

import MarkdownInput from '@/components/markdownInput'
import MarkdownOutput from '@/components/markdownOutput'
import { useEffect, useState } from 'react'
import exampleData from '@/data/data'

export default function Home() {
  const [input, setInput] = useState(exampleData)
  const handleInputChange = (newInput) => {
    setInput(newInput)
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-3 bg-gray-600 text-white">
      <MarkdownInput input={input} onInputChange={handleInputChange} />
      <MarkdownOutput />
    </main>
  )
}
