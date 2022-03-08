import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
import { db } from '../utils/firebase-config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function UploadForm3({ prevStep, values }) {
  const navigate = useNavigate();
  const auth = getAuth();
  const { Branch, Sem, Subject, Type, Year, downloadUrl } = values;

  const onSubmit = async () => {
    try {
      await addDoc(collection(db, 'questionPapers'), {
        Branch,
        Semester: Sem,
        Subject,
        Type,
        Year,
        downloadUrl,
        userRef: auth.currentUser.uid,
        timestamp: serverTimestamp(),
      });
      toast.success('Submitted details successfully');
      navigate('/profile');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-box" id="form-box-confirm">
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
          <li className="page-item">
            <a className="text-sm px-2 py-1 text-blue-600 border rounded-lg hover:bg-slate-100 mr-2">
              2
            </a>
          </li>
          <p className="text-gray-500">Upload File</p>
        </div>
        <div className="flex">
          <li className="page-item">
            <a className="text-sm px-2 py-1 bg-blue-600 text-white rounded-lg mr-2">
              3
            </a>
          </li>
          <p className="text-bold">Confirm and Publish</p>
        </div>
      </ul>
      <div>
        <h6 className="font-medium">Confirm Upload :</h6>
        <hr className="mt-2 mb-4" />

        <ul className="list-disc pl-8">
          <li>Branch: {Branch}</li>
          <li>Semester: {Sem}</li>
          <li>Subject: {Subject}</li>
          <li>Type: {Type}</li>
          <li>Year: {Year}</li>
        </ul>
        <br />
        <p className="text-green-700">
          <b>+ Uploaded File</b>
        </p>
      </div>
      <button
        className="button button-primary float-left mt-12 rounded border text-white"
        type="button"
        onClick={() => prevStep()}
      >
        {'<'}- Go Back{' '}
      </button>
      <button
        className="button button-primary float-right mt-12 rounded border text-white"
        type="button"
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default UploadForm3;
