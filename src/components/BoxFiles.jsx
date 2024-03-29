import { useDropzone } from 'react-dropzone'
import { useMemo } from 'react'

import Upload from '../assets/uploadLogo.png'
import File from '../assets/file.png'

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

const BoxFiles = ({dataProject, setDataProject}) => {
  
  const onDrop = (acceptedFiles) => {
    
    setDataProject((prevDataProject) => ({
      ...prevDataProject,
      files: [...(prevDataProject.files || []), ...acceptedFiles],
    }));

    const  newAction = {
      id: (Date.now()).toString(),
      action: "Se agrego un nuevo archivo al proyecto",
      responsable: "Camilo Ardila",
      date: new Date().toLocaleDateString()
    }

    setDataProject((prevProject) => ({
      ...prevProject,
      actions: [...(prevProject.actions || []), newAction],
    }))
  };
  
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  
  const files = dataProject.files?.map((file, index) => (
    <li key={index}>
      <div className='flex bg-gray-800 px-2 py-1 rounded-md text-white h-16 items-center'>
        <img src={File} alt="File" className='me-2 w-7 h-7'/>
        <p>
          {file.path} - {file.size} bytes
        </p>
      </div>
    </li>
  ));

  return (
    <section className='w-full'>
      <div {...getRootProps(({style}))}>
        <input {...getInputProps()} />
        <div className='flex flex-col justify-center items-center'>
          <img src={Upload} alt="Upload" className='w-1/3'/>
          <p>Arrastra o da click para subir los archivos</p>
        </div>
      </div>
      <aside>
        {dataProject.files && dataProject.files.length > 0 && (
            <div>
              <h3 className='text-2xl font-bold text-center my-5'>Archivos</h3>
              <ul className='grid grid-cols-2 gap-2'>
                {files}
              </ul>
            </div>
          )}
      </aside>
    </section>
  );
}

export default BoxFiles
