import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../css/styles.css';

function UploadForm() {
  return (
    <div className="layout">
      <div className="image">
        <img src={require('../images/upload-01.png').default} alt="image" />
      </div>
      <div className="multistep-form-container">
        <h4>Upload Question Papers</h4>
        <p className="text-secondary mb-5">
          Uploading question papers has never been so simple. Enter the subject
          details, upload the correct pdf file then confirm and publish.
        </p>
        {/* <!-- form start --> */}
        <form id="file-upload-form">
          <div className="multistep-form-area">
            {/* <!-- form box 1 start --> */}
            <div className="form-box" id="form-box-details">
              <ul className="d-flex align-items-baseline pagination pagination-sm">
                <div className="d-flex">
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">1</span>
                  </li>
                  <p className="ms-2 text-bold me-4">Enter Details</p>
                </div>
                <div className="d-flex">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <p className="text-secondary ms-2 me-4">Upload File</p>
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

              <div
                className="alert visually-hidden alert-danger"
                id="upload-form-error-message"
                role="alert"
              ></div>
              <div>
                <div className="form-group mb-3">
                  <label for="branch">Branch </label>
                  <select
                    className="form-select form-select-sm"
                    id="branch"
                    name="branch"
                  >
                    <option
                      value=""
                      disabled
                      hidden
                      selected
                      style={{ color: 'blue' }}
                    >
                      Select Branch
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group mb-3">
                <label for="semester">Semester </label>
                <select
                  className="form-select form-select-sm"
                  id="semester"
                  name="semester"
                >
                  <option value="" hidden selected disabled>
                    Select Semester
                  </option>
                  <option value="1">I</option>
                  <option value="2">II</option>
                  <option value="3">III</option>
                  <option value="4">IV</option>
                  <option value="5">V</option>
                  <option value="6">VI</option>
                  <option value="7">VII</option>
                  <option value="8">VIII</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <label for="subject">Subject </label>
                <select
                  className="form-select form-select-sm"
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
              </div>

              <div className="d-flex">
                <div
                  className="form-group fill-available mb-3"
                  style={{ marginRight: '0.5rem' }}
                >
                  <label for="type">Type </label>
                  <select
                    className="form-select form-select-sm"
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
                </div>
                <div
                  className="form-group fill-available mb-3"
                  style={{ marginLeft: '0.5rem' }}
                >
                  <label for="year">Year </label>
                  <select
                    className="form-select form-select-sm"
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
                </div>
              </div>
              <button
                className="btn btn-primary float-end mt-5"
                id="detailsCheck"
              >
                Continue -{'>'}
              </button>
            </div>
            {/* <!-- form box 1 end --> */}
            {/* <!-- form box 2 start --> */}
            <div className="form-box" id="form-box-file">
              <ul className="d-flex align-items-baseline pagination pagination-sm">
                <div className="d-flex">
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

              <label for="file-upload">Question Paper (PDF)</label>
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
                  for="file-upload"
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
                className="btn float-end btn-primary mt-5"
              >
                Continue -{'>'}
              </button>
              <button className="btn btn-primary previous mt-5">
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
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
              <a className="btn btn-primary previous mt-5">{'<'}- Go Back </a>
              <button
                className="btn btn-primary submit-button mt-5"
                id="submitUpload"
                name="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadForm;
