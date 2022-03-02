import { FaCloudUploadAlt } from 'react-icons/fa';

function UploadForm2(props) {
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

      <label htmlFor="file-upload">Question Paper (PDF)</label>
      <div className="uploader mb-3">
        <input
          id="file-upload"
          type="file"
          id="file"
          name="fileUpload"
          accept="application/pdf"
        />
        <label
          className="form-control rounded border"
          htmlFor="file-upload"
          id="file-drag"
        >
          <iframe id="file-preview" src="" alt="Preview" className="hidden" />

          <div id="content">
            <FaCloudUploadAlt size={40} color="#CAD4E0" />
            <div className="text-center">
              <p className="text-bold">Click to upload</p>
              <p className="text-gray-500">Upload .pdf files less than 10 MB</p>
            </div>
          </div>
        </label>
      </div>

      <button
        id="checkFileButton"
        className="button button-primary float-right mt-12 rounded border text-white"
        onClick={() => props.nextStep()}
      >
        Continue -{'>'}
      </button>
      <button
        className="button button-primary float-left mt-12 rounded border text-white"
        onClick={() => props.prevStep()}
      >
        {'<'}- Go Back{' '}
      </button>
    </div>
  );
}

export default UploadForm2;
