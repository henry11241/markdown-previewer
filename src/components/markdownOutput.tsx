import 'github-markdown-css/github-markdown-light.css'

export default function MarkdownOutput() {
  return (
    <div className="markdown-output">
      <div className="markdown-input flex flex-col max-w-[800px] border my-5 mx-auto">
        <div className="title-bar flex flex-row gap-2 h-7 items-center justify-center p-4 bg-gray-700 text-lg">
          <i className="fa-solid fa-display"></i>
          <h2>Markdown Preview</h2>
        </div>
        <div className="loading-container flex flex-row bg-white w-[600px] justify-center items-center gap-4">
          <div className="spinner w-8 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="animate-spin"
              viewBox="0 0 512 512"
            >
              <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
            </svg>
          </div>
          <p className="h-full bg-white text-black">
            Browser parsing the markdown...
          </p>
        </div>

        <div id="output" className="markdown-body w-full p-4 hidden"></div>
      </div>
    </div>
  )
}
