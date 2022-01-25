import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../css/styles.css';

function UploadForm() {
  return (
    <div class="layout" id="download-form">
      <div class="image">
        <img src={require('../images/download-01.png').default} alt="image" />
      </div>
      <div></div>
      <div class="multistep-form-container">
        <h4>Download Question Papers</h4>
        <p class="text-secondary mb-5">
          Enter the details of the question paper you want to download. You will
          be able to see it if someone has uploaded it previously.
        </p>

        {/* <!-- form start --> */}
        <div id="file-download-form">
          <div
            class="alert visually-hidden alert-danger"
            id="download-form-error-message"
            role="alert"
          ></div>
          <div>
            <div class="form-group mb-3">
              <label for="branch">Branch </label>
              <select
                class="form-select form-select-sm"
                id="branch"
                name="branch"
              >
                <option value="" disabled hidden selected>
                  Select Branch
                </option>
              </select>
            </div>
          </div>
          <div class="form-group mb-3">
            <label for="semester">Semester </label>
            <select
              class="form-select form-select-sm"
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
          <div class="form-group mb-3">
            <label for="subject">Subject </label>
            <select
              class="form-select form-select-sm"
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
          <button
            class="btn btn-primary submit-button mt-5"
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
        <div class="dashboard-header ">
          <div class="d-flex justify-content-between flex-column flex-lg-row">
            <div>
              <h4>Download Question Papers</h4>
              <p class="text-secondary mb-3">
                The following are the resources which you requested.
              </p>
              <p id="dashboard-info"></p>
            </div>
            <div>
              <button
                class="btn btn-primary mx-0 mx-lg-2"
                id="downloadEditButton"
              >
                Edit Details
              </button>
            </div>
          </div>
        </div>

        <div class="container table-container table-responsive">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Question Papers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Books
              </a>
            </li>
          </ul>
          <div class="table-responsive">
            <table class="table table-striped">
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
