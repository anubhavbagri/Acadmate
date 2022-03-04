import { useState } from 'react';
import { toast } from 'react-toastify';
import { getAuth } from 'firebase/auth';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
// import { db } from '../utils/firebase-config';
import { FaCloudUploadAlt } from 'react-icons/fa';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function UploadForm2({ nextStep, prevStep, values, handleStateChange }) {
  const auth = getAuth();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [pdfFile, setPdfFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(values.downloadUrl);

  const storePdf = async (pdf) => {
    const storage = getStorage();

    const file = new File(
      [pdf],
      `${values.Branch}-${values.Subject}-${values.Type}-${values.Year}.pdf`,
      { type: 'pdf' }
    );

    const metadata = {
      contentType: 'application/pdf',
    };

    const storageRef = ref(storage, 'questionPapers/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          setDownloadUrl(downloadURL);
          toast.success('Uploaded file successfully');
        });
      }
    );
  };

  const allowedFiles = ['application/pdf'];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile && allowedFiles.includes(selectedFile.type)) {
      if (selectedFile.size / 1024 / 1024 > 10) {
        toast.error('File size exceeds 10 MB');
        setPdfFile('');
      } else {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          storePdf(pdfFile);
          handleStateChange({ downloadUrl });
        };
      }
    } else {
      toast.error('Not a valid pdf file');
      setPdfFile('');
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
        type="button"
        onClick={() => {
          if (pdfFile === null) {
            toast.error('Please select a PDF file');
          } else {
            nextStep();
          }
        }}
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
