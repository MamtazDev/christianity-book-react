import React from "react";

const CompleteProfileForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  return (
    <div>
      <h4>Complete your Profile!</h4>
      <p>Kindly Enter your Credentials Below to Create Your Profile.</p>

      <form>
        <div className="">
          <div className="">
            <img
              className="object-cover w-full h-full rounded-full"
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : userInfo?.image
              }
              alt=""
            />
          </div>
          <img className="" src={camera.src} alt="" onClick={handleClick} />
          <input
            type="file"
            className={styles.imageInputField}
            accept="image/*"
            onChange={handleFileChange}
            ref={inputRef}
          />
        </div>
      </form>
    </div>
  );
};

export default CompleteProfileForm;
