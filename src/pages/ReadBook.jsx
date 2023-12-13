import React, { useContext, useEffect, useState } from "react";
import PageHeading from "../components/Utils/PageHeading";
// import ReadBooks from "../components/ReadBook/ReadBooks";
import Pagination from "../components/Utils/Pagination";
import ReadBooks2 from "../components/ReadBook/ReadBooks2";
import ReadBooks3 from "../components/ReadBook/ReadBooks3";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router";
import { BASE_URL } from "../config/confir";

const ReadBook = () => {
  const [document, setDocument] = useState("document.pdf");

  const { user } = useContext(AuthContext);
  const [authChecked, setAuthChecked] = useState();
  const [subsCribed, setSubscribed] = useState(false);

  const navigate = useNavigate();

const [audios, setAudios]= useState([]);

  const getAllAudios = async ()=>{
    fetch(`${BASE_URL}/api/get-file-path`)
      .then(res=>res.json())
        .then(data=>setAudios(data))
}

useEffect(()=>{
  getAllAudios()
},[])



  const handleOpen = () => setDocument("another-example.pdf");
  // const handleOpenAnother = () => setDocument("document.pdf");

  const handleFileChange = (event) => {
    setDocument(URL.createObjectURL(event.target.files[0]));
  };

  const [arrayBuffer, setArrayBuffer] = useState(null);

  useEffect(() => {
    console.log("ArrayBuffer:", arrayBuffer);

    if (user?.data?.isSubscribed === true) {
      setSubscribed(true);
    } else {
      navigate("/subscription");
    }

    setAuthChecked(true);
  }, [user, arrayBuffer]);
  

  return authChecked ? (
    <>
      <div className="container ">
        <div className="mb-5">
          <PageHeading path="/read-book">Read Book</PageHeading>
          <h3 className="mb-1 bookName">
            Christianity is My Mental Disorder: A Client
            <br className="d-none d-lg-block" />
            Guide to Recovery.
          </h3>
          {/* <ReadBooks /> */}

          <ReadBooks2 setArrayBuffer={setArrayBuffer} audios={audios}/>

          {/* <ReadBooks3 arrayBuffer={arrayBuffer} /> */}
        </div>
        {/* <Pagination /> */}
      </div>
    </>
  ) : (
    ""
  );
};

export default ReadBook;
