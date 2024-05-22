'use client'

import MarkdownInput from '@/components/markdownInput'
import MarkdownOutput from '@/components/markdownOutput'
import { useEffect, useState } from 'react'
import exampleData from '@/data/data'
import DOMPurify from 'dompurify'
import { marked } from 'marked'

export default function Home() {
  const [input, setInput] = useState(exampleData)
  const [extend, setExtend] = useState(false)
  const displayData = async (data: string) => {
    const parsed = await marked.parse(data)
    const clean = DOMPurify.sanitize(parsed)
    document.getElementById('output').innerHTML = clean
  }
  const handleInputChange = async (newInput: string) => {
    setInput(newInput)
    displayData(newInput)
  }

  const handleButtonClicked = () => {
    setExtend((extend) => !extend)
    const markdownInput = document.querySelector('.markdown-input')
    const markdownOutput = document.querySelector('.markdown-output')
    markdownInput.classList.toggle('extend')
    markdownOutput.classList.toggle('hidden')
  }

  useEffect(() => {
    displayData(exampleData)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-3 bg-gray-600 text-white">
      <MarkdownInput
        input={input}
        onInputChange={handleInputChange}
        extend={extend}
        onButtonClicked={handleButtonClicked}
      />
      <MarkdownOutput />
    </main>
  )
}
