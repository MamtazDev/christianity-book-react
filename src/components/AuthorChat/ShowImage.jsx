import React, { useEffect, useState } from "react";

function ShowImage({ item }) {
    console.log(item.name)
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    setSelectedFile(item);
    if (item) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(item);
    }
  }, []);
  return (
    <>
      {selectedFile && (
        <img className="ml-auto" src={imageSrc} alt="Selected Image" />
      )}
    </>
  );
}

export default ShowImage;
