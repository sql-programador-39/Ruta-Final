import { Editor } from 'primereact/editor';

const RichText = ({action, setAction}) => {
  return (
    <>
      <div className='container'>

        <Editor value={action} onTextChange={(e) => setAction(e.textValue)} style={{ height: '320px'}} />
      </div>
    </>
  )
}

export default RichText
