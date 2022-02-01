import React from 'react';
import UploadImg from '../assets/upload-01.png';

import '../css/styles.css';

function UploadForm() {
  return (
    <div className="layout">
      <div className="image">
        <img src={UploadImg} alt="image" />
      </div>
      <div className="multistep-form-container">
        <h4 className="text-2xl font-bold mb-1.5">Upload Question Papers</h4>
        <p className="text-gray-500 mb-12">
          Uploading question papers has never been so simple. Enter the subject
          details, upload the correct pdf file then confirm and publish.
        </p>
        {/* <!-- form start --> */}
        <form id="file-upload-form">
          <div className="multistep-form-area">
            {/* <!-- form box 1 start --> */}
            <div className="form-box" id="form-box-details">
              <ul className="flex items-baseline space-x-6 pb-6">
                <div className="flex">
                  {/* <li className="page-item active" aria-current="page"> */}
                  <li className="">
                    <a className="text-sm px-2 py-1 text-blue-600 border rounded-lg hover:bg-slate-100 mr-2">
                      1
                    </a>
                  </li>
                  <p className="text-bold">Enter Details</p>
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
                    <a className="text-sm px-2 py-1 text-blue-600 border rounded-lg hover:bg-slate-100 mr-2">
                      3
                    </a>
                  </li>
                  <p className="text-gray-500">Confirm and Publish</p>
                </div>
              </ul>

              <div
                className="alert visually-hidden alert-danger"
                id="upload-form-error-message"
                role="alert"
              ></div>
              <div className="form-group mb-5">
                <label className="block" htmlFor="branch">
                  Branch
                  <select
                    className="text-sm block w-full mt-1.5 py-1 pl-2
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    id="branch"
                    name="branch"
                  >
                    <option>Select Branch</option>
                  </select>
                </label>
              </div>
              <div className="form-group mb-5">
                <label className="block" htmlFor="semester">
                  Semester
                  <select
                    className="text-sm block w-full mt-1.5 py-1 pl-2
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    id="semester"
                    name="semester"
                  >
                    <option value="" hidden selected disabled>
                      Select Semester
                    </option>
                    <option value="3">III</option>
                    <option value="4">IV</option>
                    <option value="5">V</option>
                    <option value="6">VI</option>
                  </select>
                </label>
              </div>
              <div className="form-group mb-5">
                <label className="block" htmlFor="subject">
                  Subject
                  <select
                    className="text-sm block w-full mt-1.5 py-1 pl-2
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    id="subject"
                    name="subject"
                  >
                    <option value="" disabled hidden selected>
                      Select Subject
                    </option>
                    <option value="" disabled>
                      Select Branch and Semester
                    </option>
                  </select>
                </label>
              </div>

              <div className="flex">
                <div className="form-group fill-available mb-3 mr-2">
                  <label htmlFor="type">
                    Type
                    <select
                      className="text-sm block w-full mt-1.5 py-1 pl-2
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      id="type"
                      name="type"
                    >
                      <option value="" disabled hidden selected>
                        Select Type (MTE/ETE)
                      </option>
                      <option value="MTE1">MTE 1</option>
                      <option value="MTE2">MTE 2</option>
                      <option value="ETE">ETE</option>
                    </select>
                  </label>
                </div>
                <div className="form-group fill-available mb-3 ml-2">
                  <label htmlFor="year">
                    Year
                    <select
                      className="text-sm block w-full mt-1.5 py-1 pl-2
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      id="year"
                      name="year"
                    >
                      <option value="" disabled hidden selected>
                        Year
                      </option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                    </select>
                  </label>
                </div>
              </div>
              <button
                className="button button-primary float-right mt-12 rounded border text-white"
                id="detailsCheck"
              >
                Continue -{'>'}
              </button>
            </div>
            {/* <!--------------------------------- form box 1 end ------------------------------> */}

            {/* <!--------------------------------- form box 2 start ----------------------------> */}
            <div className="form-box" id="form-box-file">
              <ul className="flex align-items-baseline pagination pagination-sm">
                <div className="flex">
                  <li className="page-item previous" aria-current="page">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <p className="text-secondary ms-2 me-4">Enter Details</p>
                </div>
                <div className="d-flex">
                  <li className="page-item active">
                    {' '}
                    <span className="page-link">2</span>
                  </li>
                  <p className="ms-2 text-bold me-4">Upload File</p>
                </div>
                <div className="d-flex">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <p className="text-secondary ms-2 me-4">
                    Confirm and Publish
                  </p>
                </div>
              </ul>

              <label htmlFor="file-upload">Question Paper (PDF)</label>
              <div className="uploader mb-3">
                <div
                  className="alert visually-hidden alert-danger"
                  id="upload-file-error-message"
                  role="alert"
                ></div>
                <div
                  className="alert visually-hidden alert-success"
                  id="upload-file-success-message"
                  role="alert"
                ></div>
                <input
                  id="file-upload"
                  type="file"
                  id="file"
                  name="fileUpload"
                  accept="application/pdf"
                />
                <label
                  className="form-control"
                  htmlFor="file-upload"
                  id="file-drag"
                >
                  <iframe
                    id="file-preview"
                    src=""
                    alt="Preview"
                    className="hidden"
                  ></iframe>

                  <div id="content">
                    <i className="fas upload-icon fa-cloud-upload-alt"></i>
                    <div className="text-center">
                      <b>Click to upload</b> <br />
                      <p className="text-secondary">
                        Upload .pdf files less than 10 mb
                      </p>
                    </div>
                    {/* <!-- <div id="notPDF" className="hidden">Please select a PDF Document</div> --> */}
                  </div>
                </label>
              </div>

              <button
                id="checkFileButton"
                className="button float-end button-primary mt-5"
              >
                Continue -{'>'}
              </button>
              <button className="button button-primary previous mt-5">
                {'<'}- Go Back{' '}
              </button>
            </div>
            {/* <!-- form box 2 end -->
        <!-- form box 3 start --> */}
            <div className="form-box" id="form-box-confirm">
              <ul className="d-flex align-items-baseline pagination pagination-sm">
                <div className="d-flex">
                  <li className="page-item previous" aria-current="page">
                    <span className="page-link">1</span>
                  </li>
                  <p className="text-secondary ms-2 me-4">Enter Details</p>
                </div>
                <div className="d-flex">
                  <li className="page-item previous">
                    {' '}
                    <span className="page-link">2</span>
                  </li>
                  <p className="text-secondary ms-2 me-4">Upload File</p>
                </div>
                <div className="d-flex">
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <p className="ms-2 text-bold me-4">Confirm and Publish</p>
                </div>
              </ul>
              <div>
                <h6>Confirm Upload</h6>
                <hr />
                <ul id="upload-confirm"></ul>
                <p className="text-success">
                  <b>+ Uploaded File</b>
                </p>
              </div>
              <div
                className="my-5 visually-hidden alert alert-success alert-dismissible fade show"
                id="uploaded-alert"
                role="alert"
              >
                Uploaded Successfully
                <button
                  type="button"
                  className="button-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
              <a className="button button-primary previous mt-5">
                {'<'}- Go Back{' '}
              </a>
              <button
                className="button button-primary submit-button mt-5"
                id="submitUpload"
                name="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <div class="toast-container position-fixed top-0 end-0">
        <div
          class="toast align-items-center bg-success text-white border-0"
          role="alert"
          id="toast-success"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="d-flex">
            <div class="toast-body" id="toast-success-body">
              Successfully published!
            </div>
            <button
              type="button"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div> */}
      {/* <div class="toast-container position-fixed top-0 end-0">
        <div
          class="toast align-items-center text-white bg-error border-0"
          id="toast-error"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="d-flex">
            <div class="toast-body" id="toast-error-body">
              Error in publishing, try again later.
            </div>
            <button
              type="button"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default UploadForm;
