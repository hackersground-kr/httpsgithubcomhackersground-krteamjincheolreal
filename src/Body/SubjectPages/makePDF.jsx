import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { renderToStaticMarkup } from 'react-dom/server';
import './EnglishTest.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const MyDocument = () => (
  <Document>
    <Page>
      <h1>My PDF</h1>
      <p>Hello, world!</p>
    </Page>
  </Document>
);

const PDFDownloadButton = () => (
    <button className='submit1' onClick={downloadPDF}>Download PDF</button>
);

const downloadPDF = () => {
  const doc = new Blob([renderToStaticMarkup(<MyDocument />)], { type: 'application/pdf' });
  const pdfUrl = URL.createObjectURL(doc);
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'my_pdf.pdf';
  link.click();
};

export default PDFDownloadButton;
