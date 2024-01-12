import axios from "axios";
import { useState } from "react";


const FileUpload = () => {

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = () => {
        const formData = new FormData();
        formData.append('file', file);

        axios.post('http://localhost:5000/upload', formData)
            .then(res => alert('File uploaded successfully:', res.data))
            .catch(error => console.error('Error uploading file:', error));
    };

    return (
        <div>
            {/* <h2>File Upload</h2> */}
            {/* <input type="file" onChange={handleFileChange} /> */}

            <label className="form-control w-full max-w-xs">
                <div className="label ">
                    <span className="label-text">Choose an attachment</span>
                    
                </div>
                <input type="file" onChange={handleFileChange} className="file-input file-input-bordered w-full max-w-xs" />
                
            </label>

            <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white mt-3" onClick={handleFileUpload}>Upload File</button>


            

        </div>
    );
};

export default FileUpload;