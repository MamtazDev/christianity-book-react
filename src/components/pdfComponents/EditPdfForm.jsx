import React from 'react';

const EditPdfForm = ({handeSubmitEditPdf,selectedBooks,setSelectedBook,editInfo,setEditInfo,editing}) => {
    return (
        <form className="formStyle" onSubmit={handeSubmitEditPdf}>
        <h4>Edit Pdf </h4>
        <br />
        <label htmlFor="CoverPicedit">Cover Image</label>
        <input
          id="CoverPicedit"
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
          value={selectedBooks?.price}
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
          value={selectedBooks?.title}
          onChange={(e) => {
            setSelectedBook({...selectedBooks,title:e.target.value})
            setEditInfo({...editInfo, title:e.target.value})}}
        />
        <textarea
          value={selectedBooks?.description}
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
        <button class="btn btn-primary" type="submit" disabled={editing}>
         { editing?"Updating..":"Update"}
        </button>
      </form>
    );
};

export default EditPdfForm;