import { useState } from 'react'
import { Editor } from 'primereact/editor';

const RichText = () => {

  const [text, setText] = useState('')

  console.log(text);

  return (
    <>
      <div className='container'>

        <Editor value={text} onTextChange={(e) => setText(e.textValue)} style={{ height: '320px'}} />
      </div>
    </>
  )
}

export default RichText
