import React from 'react';
import DownloadImg from '../assets/download-01.png';

import '../css/styles.css';

function UploadForm() {
  return (
    <div className="layout" id="download-form">
      <div className="image">
        <img src={DownloadImg} alt="image" />
      </div>
      <div className="multistep-form-container">
        <h4 className="text-2xl font-bold mb-1.5">Download Question Papers</h4>
        <p className="text-gray-500 mb-12">
          Enter the details of the question paper you want to download. You will
          be able to see it if someone has uploaded it previously.
        </p>

        {/* <!-- form start --> */}
        <div id="file-download-form">
          <div
            className="alert visually-hidden alert-danger"
            id="download-form-error-message"
            role="alert"
          ></div>
          <div className="form-group mb-5">
            <label className="block" htmlFor="branch">
              Branch
              <select
                defaultValue={'DEFAULT'}
                className="text-sm block w-full mt-1.5 py-1 pl-2
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                id="branch"
                name="branch"
              >
                <option value="DEFAULT" disabled hidden>
                  Select Branch
                </option>
              </select>
            </label>
          </div>
          <div className="form-group mb-5">
            <label className="block" htmlFor="semester">
              Semester
              <select
                defaultValue={'DEFAULT'}
                className="text-sm block w-full mt-1.5 py-1 pl-2
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                id="semester"
                name="semester"
              >
                <option value="DEFAULT" hidden disabled>
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
                defaultValue={'DEFAULT'}
                className="text-sm block w-full mt-1.5 py-1 pl-2
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                id="subject"
                name="subject"
              >
                <option value="DEFAULT" disabled hidden>
                  Select Subject
                </option>
                <option value="" disabled>
                  Select Branch and Semester
                </option>
              </select>
            </label>
          </div>
          <button
            className="button button-primary float-right mt-12 rounded border text-white"
            id="submitForDownload"
            type="submit"
            name="submit"
          >
            Submit
          </button>
        </div>
        {/* <!-- form end --> */}
      </div>
      {/* <div id="download-dashboard">
        <div className="dashboard-header ">
          <div className="d-flex justify-content-between flex-column flex-lg-row">
            <div>
              <h4>Download Question Papers</h4>
              <p className="text-secondary mb-3">
                The following are the resources which you requested.
              </p>
              <p id="dashboard-info"></p>
            </div>
            <div>
              <button
                className="button button-primary mx-0 mx-lg-2"
                id="downloadEditButton"
              >
                Edit Details
              </button>
            </div>
          </div>
        </div>
        <div className="container table-container table-responsive">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Question Papers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Books
              </a>
            </li>
          </ul>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">S.no</th>
                  <th scope="col">QP</th>
                  <th scope="col">Type</th>
                  <th scope="col">Year</th>
                  <th scope="col">Uploaded By</th>
                  <th scope="col">Download</th>
                </tr>
              </thead>
              <tbody id="download-body"></tbody>
            </table>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default UploadForm;
