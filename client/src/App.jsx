import './App.css'
import { useState, useRef, useEffect } from 'react';
import { uploadFile } from './service/api';


function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  // console.log(file);

  useEffect(() => {
    const getImage = async()=> {
      if(file){
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        console.log("response-path", response.path);
        setResult(response.path);

      }
    };
    getImage();
  }, [file]); 


  const fileInputRef = useRef();
  return(
    <div className="box">
      <h1>File Sharing Application</h1>
      <p>Upload your file and share links with your friends</p>
      <button onClick={() => fileInputRef.current.click()}>Upload</button>
      <input type="file" 
      ref={fileInputRef} 
      style={{display: 'none'}} 
      onChange={(e) => setFile(e.target.files[0])}/> 
      <p><a href={result}>{result}</a></p>
    </div>
  )
}

export default App;
