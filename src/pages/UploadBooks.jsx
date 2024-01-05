import { useEffect, useState } from "react";
import axios from "axios";
import { pdfjs } from "react-pdf";
import PdfComp from "../components/pdfComponents/pdfComp";
import { BASE_URL } from "../config/confir";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

function UploadBooks() {
  const [title, setTitle] = useState("");
  const [description,setDescription]=useState("")
  const [price, setPrice] = useState(9.99);
  const [file, setFile] = useState("");
  const [coverPic, setCoverPic] = useState("");
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  const [isEditing,setIsEditing]=useState(false)
  const [selectedBooks,setSelectedBook]=useState(null)
  const [editInfo ,setEditInfo]=useState({})

  useEffect(() => {
    getPdf();
  }, []);
  const getPdf = async () => {
    const result = await axios.get(`${BASE_URL}/api/books/get-files`);
    setAllImage(result.data.data);
  };

  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("file", file);
    formData.append("coverPic", coverPic);
    formData.append("description",description)
    console.log(description,"ddd");

    const result = await axios.post(
      `${BASE_URL}/api/books/upload-files`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );
    if (result.data.status == "ok") {
      alert("Uploaded Successfully!!!");
      getPdf();
    setTitle("");
    setPrice(9.99);
    setFile("");
    setCoverPic("");
    setDescription("");
    e.target.reset()
    }
  };
  const [show, setShow] = useState(false);
  const showPdf = (pdf) => {
    if (pdfFile === `${BASE_URL}/files/${pdf}`) {
      setPdfFile(null);
    } else {
      setPdfFile(`${BASE_URL}/files/${pdf}`);
    }
  };

  const deleteFileHandler = async (id) => {
    const result = await axios.delete(`${BASE_URL}/api/books/fileDelete/${id}`);
    console.log("result", result);
    if (result.data.status == "ok") {
      alert("Deleted Successfully!!!");
      getPdf();
    } else {
      alert(result.data.msg);
    }
  };

  const handleEditPdf = async(data)=>{
    // const response = await axios.patch(`${BASE_URL}/editBook/${data?._id}`)

    setIsEditing(!isEditing)
    if(selectedBooks){
      setSelectedBook(null)
    }
    else{
      setSelectedBook(data)
    }
    // setEditInfo({...editInfo, coverPic:e.target.files[0]})
  }

  const handeSubmitEditPdf = async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    Object.entries(editInfo).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const result = await axios.patch(
      `${BASE_URL}/api/books/editBook/${selectedBooks?._id}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );
    if (result.data.status == "ok") {
      alert("Update Successfully!!!");
      getPdf();
      setIsEditing(false)
    }

  }

  return (
    <div className="App">
     {!isEditing? <form className="formStyle" onSubmit={submitImage}>
        <h4>Upload Pdf in React</h4>
        <br />
        <label htmlFor="CoverPic">Cover Image</label>
        <input
          id="CoverPic"
          type="file"
          class="form-control"
          accept="image/png, image/gif, image/jpeg"
          required
          onChange={(e) => setCoverPic(e.target.files[0])}
        />
        <br />
        <input
          type="number"
          className="form-control"
          placeholder="Price"
          step="0.01"
          required
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea className="form-control mt-3" rows="" cols="" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}></textarea>
        <br />
        <label htmlFor="uploadPDF">Upload PDF</label>
        <input
          id="uploadPDF"
          type="file"
          class="form-control"
          accept="application/pdf"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <button class="btn btn-primary" type="submit">
          Submit
        </button>
      </form>:<form className="formStyle" onSubmit={handeSubmitEditPdf}>
        <h4>Edit Pdf </h4>
        <br />
        <label htmlFor="CoverPic">Cover Image</label>
        <input
          id="CoverPic"
          type="file"
          class="form-control"
          accept="image/png, image/gif, image/jpeg"
      
          onChange={(e) => setEditInfo({...editInfo, coverPic:e.target.files[0]})}
        />
        <br />
        <input
          type="number"
          className="form-control"
          placeholder="Price"
          step="0.01"
          required
          value={isEditing&&selectedBooks?.price}
          onChange={(e) => {
            setSelectedBook({...selectedBooks,price:e.target.value})
            setEditInfo({...editInfo, price:e.target.value})}}

        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          required
          value={isEditing&&selectedBooks?.title}
          onChange={(e) => {
            setSelectedBook({...selectedBooks,title:e.target.value})
            setEditInfo({...editInfo, title:e.target.value})}}
        />
        <textarea
          value={isEditing&&selectedBooks?.description}
           className="form-control mt-3" 
            placeholder="Description"
            onChange={(e) => {
              setSelectedBook({...selectedBooks,description:e.target.value})
              setEditInfo({...editInfo, description:e.target.value})}}
             required></textarea>
        <br />
        <label htmlFor="uploadPDF">Upload PDF</label>
        <input
         
          type="file"
          class="form-control"
          accept="application/pdf"

          onChange={(e) => setEditInfo({...editInfo, file:e.target.files[0]})}
          
        />
        <br />
        <button class="btn btn-primary" type="submit">
          Submit
        </button>
      </form>}
      <div className="uploaded mt-4 mb-2">
        <h4>Uploaded PDF:</h4>
        <div className="output-div d-flex gap-3 mt-2 flex-wrap">
          {allImage == null
            ? ""
            : allImage.map((data,idx) => {
                return (
                  <div className="inner-div" key={idx}>
                    <h6
                      className="mb-2"
                      onClick={() => deleteFileHandler(data._id)}
                    >
                      <span
                        class="badge bg-danger text-white"
                        style={{ cursor: "pointer" }}
                      >
                        Delete
                      </span>{" "}
                    </h6>
                    <div className="">
                      <button
                        onClick={() => {
                          showPdf(data.pdf);
                          setShow(!show);
                          handleEditPdf(data)
                          console.log(data,"pdfs")
                        }}
                        className="btn btn-outline-primary d-flex align-items-center flex-column"
                      >
                        <span>
                          {" "}
                          {`${BASE_URL}/files/${data.pdf}` === pdfFile
                            ? "Hide"
                            : "Show"}
                        </span>
                        <img
                          width={100}
                          src={`${BASE_URL}/files/${data?.coverPic}`}
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <PdfComp pdfFile={pdfFile} />
    </div>
  );
}

export default UploadBooks;
