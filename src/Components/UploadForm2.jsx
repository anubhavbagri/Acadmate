import { FaCloudUploadAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useState } from 'react';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function UploadForm2({ nextStep, prevStep }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [pdfFile, setPdfFile] = useState(null);

  const allowedFiles = ['application/pdf'];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile) {
      if (selectedFile && allowedFiles.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
        };
      } else {
        toast.error('Not a valid pdf file');
        setPdfFile('');
      }
    } else {
      console.log('please select a PDF');
    }
  };

  return (
    <div className="form-box" id="form-box-file">
      <ul className="flex items-baseline space-x-6 pb-6">
        <div className="flex">
          <li className="page-item">
            <a className="text-sm px-2 py-1 text-blue-600 border rounded-lg hover:bg-slate-100 mr-2">
              1
            </a>
          </li>
          <p className="text-gray-500">Enter Details</p>
        </div>
        <div className="flex">
          <li className="">
            <a className="text-sm px-2 py-1 bg-blue-600 text-white rounded-lg mr-2">
              2
            </a>
          </li>
          <p className="text-bold">Upload File</p>
        </div>
        <div className="flex">
          <li className="page-item">
            <a className="text-sm px-2 py-1 text-blue-600 border rounded-lg hover:bg-slate-100 mr-2">
              3
            </a>
          </li>
          <p className="text-gray-500">Confirm and Publish</p>
        </div>
      </ul>

      <div className="mb-3">
        <label htmlFor="file-upload">Question Paper (PDF)</label>
      </div>

      {pdfFile !== null ? (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
          <div style={{ height: '750px' }}>
            <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
          </div>
        </Worker>
      ) : (
        <div className="uploader">
          <input
            id="file-upload"
            type="file"
            name="fileUpload"
            onChange={handleFile}
            accept="application/pdf"
            hidden
          />
          <label
            className="form-control rounded border mt-2"
            htmlFor="file-upload"
            id="file-drag"
          >
            <div id="content">
              <FaCloudUploadAlt size={40} color="#CAD4E0" />
              <div className="text-center">
                <p className="text-bold">Click to upload</p>
                <p className="text-gray-500">
                  Upload .pdf files less than 10 MB
                </p>
              </div>
            </div>
          </label>
        </div>
      )}

      <button
        id="checkFileButton"
        className="button button-primary float-right mt-12 rounded border text-white"
        onClick={() => nextStep()}
      >
        Continue -{'>'}
      </button>
      <button
        className="button button-primary float-left mt-12 rounded border text-white"
        onClick={() => prevStep()}
      >
        {'<'}- Go Back{' '}
      </button>
    </div>
  );
}

export default UploadForm2;
