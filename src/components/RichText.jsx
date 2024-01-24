import { Editor } from 'primereact/editor';

const RichText = ({value, set}) => {
  return (
    <>
      <div className='container'>

        <Editor value={value} onTextChange={(e) => set(e.textValue)} style={{ height: '320px'}} />
      </div>
    </>
  )
}

export default RichText
