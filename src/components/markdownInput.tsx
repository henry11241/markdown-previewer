const MarkdownInput = ({ input, onInputChange, extend, onButtonClicked }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newInput = event.target.value
    onInputChange(newInput)
  }
  const handleClick = () => {
    onButtonClicked()
  }

  return (
    <div className="markdown-input flex flex-col max-w-[600px] border my-5 mx-auto">
      <div className="flex flex-row gap-2 title-bar h-7 items-center justify-center p-4 bg-gray-700 relative text-lg">
        <i className="fa-regular fa-keyboard"></i>
        <h2>Write your markdown here</h2>
        <button className="absolute right-2" onClick={handleClick}>
          {extend ? (
            <i className="fa-solid fa-down-left-and-up-right-to-center hover:text-gray-500"></i>
          ) : (
            <i className="fa-solid fa-up-right-and-down-left-from-center hover:text-gray-500"></i>
          )}
        </button>
      </div>
      <textarea
        name="markdown-input"
        id="markdown-input"
        className="bg-gray-400 text-black p-4 w-full"
        cols={60}
        rows={10}
        value={input}
        onChange={handleInputChange}
      ></textarea>
    </div>
  )
}

export default MarkdownInput
