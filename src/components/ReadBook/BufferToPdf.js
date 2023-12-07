// // const { PDFDocument } = require('pdf-lib');
import { PDFDocument } from 'pdf-lib'


// export async function createPdfFromBuffer(buffer) {
//   // Load existing PDF buffer
//   const existingPdfBytes = buffer;

//   // Create a new PDF document
//   const pdfDoc = await PDFDocument.create();

//   // Add a blank page to the document
//   const page = pdfDoc.addPage();

//   // Copy content from the existing PDF buffer to the new document
//   const copiedPages = await pdfDoc.copyPages(
//     PDFDocument.load(existingPdfBytes),
//     [0] // Copy the first page, you can change this array to copy specific pages
//   );

//   // Paste the copied page into the new document
//   copiedPages.forEach((copiedPage) => {
//     pdfDoc.addPage().drawPage(copiedPage);
//   });

//   // Save the new PDF to a buffer
//   const pdfBytes = await pdfDoc.save();

  
//   return pdfBytes;
//   // Save the buffer to a new PDF file
// //   fs.writeFileSync('output.pdf', pdfBytes);

//   console.log('New PDF created successfully!',pdfBytes);
// }
//  ;
// // Example usage with a PDF buffer
// // const existingPdfBuffer = fs.readFileSync('existing.pdf'); // Replace 'existing.pdf' with your existing PDF file
// // createPdfFromBuffer(existingPdfBuffer);

export async function createNewPdfFromBuffer(pdfBuffer) {
    try {
        const blob = new Blob(pdfBuffer);

        const buf = await blob.arrayBuffer();
      
        console.log(buf)

      // Load existing PDF buffer
      const existingPdfBytes = buf;
  
      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();
  
      // Load the existing PDF document
      const existingPdfDoc = await PDFDocument.load(existingPdfBytes);
  
      // Add a blank page to the new document
      const [newPage] = await pdfDoc.addPage();
  
      // Get the first page of the existing PDF document
      const [existingPage] = await pdfDoc.copyPages(existingPdfDoc, [0]);
  
      // Embed the existing page into the new page
      const { width, height } = existingPage.getSize();
      newPage.drawImage(existingPage, {
        x: 0,
        y: 0,
        width,
        height,
      });
  
      // Save the new PDF as a buffer
      const newPdfBytes = await pdfDoc.save();
      
      return newPdfBytes;
      // You can now use newPdfBytes as the new PDF buffer
  
      // For example, if you want to save the new PDF to a file
    //   const fs = require('fs');
    //   fs.writeFileSync('newPdf.pdf', newPdfBytes);
  
      console.log('New PDF created successfully');
    } catch (error) {
      console.error('Error creating new PDF:', error);
    }
  }


// export async function createPdfFromBuffer(pdfBuffer) {
//   try {
//     // Load existing PDF buffer
//     const existingPdfBytes = pdfBuffer;

//     // Create a new PDF document
//     const pdfDoc = await PDFDocument.create();

//     // Embed the existing PDF into the new document
//     const existingPdfDoc = await PDFDocument.load(existingPdfBytes);
//     const [copiedPage] = await pdfDoc.copyPages(existingPdfDoc, [0]);

//     // Add the copied page to the new document
//     const newPage = pdfDoc.addPage([copiedPage.getWidth(), copiedPage.getHeight()]);
//     newPage.drawPage(copiedPage);

//     // Save the new PDF as a buffer
//     const newPdfBytes = await pdfDoc.save();

//     // You can now use newPdfBytes as the new PDF buffer

//     return newPdfBytes;
//     // For example, if you want to save the new PDF to a file
//     // const fs = require('fs');
//     // fs.writeFileSync('newPdf.pdf', newPdfBytes);

//     console.log('New PDF created successfully');
//   } catch (error) {
//     console.error('Error creating new PDF:', error);
//   }
// }

