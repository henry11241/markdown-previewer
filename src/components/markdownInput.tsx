const MarkdownInput = ({input, onInputChange}) => {
  const handleInputChange = (event) => {
    const newInput = event.target.value
    onInputChange(newInput)
  }
  
  return (
    <div className="flex flex-col markdown-input max-w-[600px] border my-5 mx-auto">
      <div className="flex flex-row gap-2 title-bar h-7 items-center justify-center p-2 bg-gray-700">
        <i className="fa-regular fa-keyboard"></i>
        <h2>Write your markdown here</h2>
      </div>
      <textarea
        name="markdown-input"
        id="markdown-input"
        className="bg-gray-400 text-black p-2"
        cols={50}
        rows={10}
        value={input}
        onChange={handleInputChange}
      ></textarea>
    </div>
  )
}

export default MarkdownInput
