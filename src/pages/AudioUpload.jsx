import { useEffect, useState } from "react";
import axios from "axios";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import { BASE_URL } from "../config/confir";

function AudioUpload() {
  const [title, setTitle] = useState("");
  const [pageIndex, setPageIndex] = useState();
  const [bookID, setBookID] = useState();
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);
  const [allAudios, setAllAudios] = useState(null);

  const [audioFile, setAudioFile] = useState(null);

  useEffect(() => {
    getAudios();
    getPdf();
  }, []);

  const filterBookHandler = async (id) => {
    console.log("id", id);
    const result = await axios.get(`${BASE_URL}/api/books/getFilesById/${id}`);
    setAllAudios(result.data.data[0]?.audios);
  };
  const getAudios = async () => {
    const result = await axios.get(`${BASE_URL}/api/audios/get-files`);
    setAllAudios(result.data.data);
  };
  const getPdf = async () => {
    const result = await axios.get(`${BASE_URL}/api/books/get-files`);
    console.log(result.data.data);
    setAllImage(result.data.data);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("bookOutlineName", title);
    formData.append("audioFileName", file);
    formData.append("pageIndex", pageIndex);
    formData.append("book_id", bookID);
    console.log(formData);

    const result = await axios.post(
      `${BASE_URL}/api/audios/upload-files`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );
    console.log(result);
    if (result.data.status == "ok") {
      alert("Uploaded Successfully!!!");
      getAudios();
    }
  };

  const listenAudio = (audio) => {
    if (audioFile === `${BASE_URL}/files/audios/${audio}`) {
      // If the clicked audio is already active, deactivate it
      setAudioFile(null);
    } else {
      // Activate the clicked audio
      setAudioFile(`${BASE_URL}/files/audios/${audio}`);
    }
  };

  const deleteFileHandler = async (id) => {
    console.log(id);
    const result = await axios.delete(
      `${BASE_URL}/api/audios/fileDelete/${id}`,
    );
    if (result.data.status == "ok") {
      alert("Deleted Successfully!!!");
      getAudios();
    }
  };

  console.log("audio player", audioFile);

  return (
    <div className="App">
      <form className="formStyle" onSubmit={submitHandler}>
        <h4>Upload Audio of Books</h4>
        <br />
        <select
          className="form-control"
          name="book_id"
          onChange={(e) => setBookID(e.target.value)}
        >
          <option selected disabled>
            Select Book
          </option>
          {allImage?.map((item, key) => (
            <option key={key} value={item?._id}>
              {item?.title}
            </option>
          ))}
        </select>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Outline text"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="number"
          className="form-control"
          placeholder="Page Index"
          required
          onChange={(e) => setPageIndex(e.target.value)}
        />
        <br />
        <input
          type="file"
          className="form-control"
          accept="audio/mpeg, audio/wav, audio/ogg"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <div className="uploaded mt-4 mb-2">
        <div className="filter-book mb-4">
          <h4>Filter By Books</h4>
          <select
            className="form-control mt-2"
            name="book_id"
            onChange={(e) => filterBookHandler(e.target.value)}
          >
            <option selected disabled>
              Select Book
            </option>
            {allImage?.map((item, key) => (
              <option key={key} value={item?._id}>
                {item?.title}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <h4>Listen Audio: </h4>
          <AudioPlayer src={audioFile} />
        </div>

        <div className="output-div d-flex gap-3 mt-2 flex-wrap">
          {allAudios == null
            ? ""
            : allAudios.map((data) => {
                return (
                  <div className="inner-div">
                    <h6
                      className="mb-2"
                      onClick={() => deleteFileHandler(data._id)}
                    >
                      <span
                        className="badge bg-danger text-white"
                        style={{ cursor: "pointer" }}
                      >
                        Delete
                      </span>{" "}
                    </h6>
                    <button
                      onClick={() => {
                        listenAudio(data.audioFileName);
                      }}
                      className="btn btn-outline-primary"
                    >
                      {`${BASE_URL}/files/audios/${data.audioFileName}` ===
                      audioFile
                        ? "active"
                        : "Inactive"}
                    </button>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default AudioUpload;
