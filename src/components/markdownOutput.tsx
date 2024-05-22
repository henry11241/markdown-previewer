import 'github-markdown-css/github-markdown-light.css'

export default function MarkdownOutput() {
  return (
    <div className="markdown-output">
      <div className="flex flex-col markdown-input max-w-[800px] border my-5 mx-auto">
        <div className="flex flex-row gap-2 title-bar h-7 items-center justify-center p-4 bg-gray-700 text-lg">
          <i className="fa-solid fa-display"></i>
          <h2>Markdown Preview</h2>
        </div>
        <div id="output" className="markdown-body w-full p-4"></div>
      </div>
    </div>
  )
}
