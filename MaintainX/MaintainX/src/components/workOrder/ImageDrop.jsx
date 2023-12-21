import  { useState } from 'react';
import { FaCamera } from "react-icons/fa";

const ImageDrop = () => {

    const [image, setImage] = useState(null);
    
    const handleDrop = (e) => {
        e.preventDefault();
    
        const file = e.dataTransfer.files[0];
    
        if (
            file &&
            (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/svg')
          ) {
            setImage(file);
          }
      };

      const handleDragOver = (e) => {
        e.preventDefault();
        
      };

      // const handleUploadImage = () => {
      //       `   `
      // }
    
      return (
        <div>
          <div
            className="dropzone"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <FaCamera className='dropzone__camIcon'/>
            <p  className="dropzone__text">Add or drag pictures</p>
          </div>
    
          {image && (
            <div>
              <h2>Selected Image:</h2>
              <img src={URL.createObjectURL(image)} alt="Selected" />
            </div>
          )}
        </div>
      );
};


export default ImageDrop