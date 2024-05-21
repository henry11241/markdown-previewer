export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-600 text-white">
      <div className="flex flex-col markdown-input max-w-[600px] border my-5 mx-auto">
        <div className="flex flex-row gap-2 title-bar h-7 items-center justify-center p-2 bg-gray-700">
          <i className="fa-regular fa-keyboard"></i>
          <h2>Write your mark down here</h2>
        </div>
        <textarea
          name="markdown-input"
          id="markdown-input"
          className="bg-gray-400 text-black"
          cols={50}
          rows={10}
        ></textarea>
      </div>
      <div className="markdown-output">
        <div className="flex flex-col markdown-input max-w-[800px] border my-5 mx-auto">
          <div className="flex flex-row gap-2 title-bar h-7 items-center justify-center p-2 bg-gray-700">
            <i className="fa-solid fa-display"></i>
            <h2>Markdown Preview</h2>
          </div>
        </div>
      </div>
    </main>
  )
}
