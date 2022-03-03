import React from 'react';

function UploadForm3({ prevStep, values }) {
  const { Branch, Sem, Subject, Type, Year } = values;

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

        <ul class="list-disc pl-8">
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
        name="submit"
      >
        Submit
      </button>
    </div>
  );
}

export default UploadForm3;
