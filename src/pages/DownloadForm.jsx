import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { Schema } from '../data/Schema';
import DownloadImg from '../assets/download-01.png';

import '../css/styles.css';

function DownloadForm() {
  const navigate = useNavigate();

  const [Branch, setBranch] = useState('');
  const [Sem, setSem] = useState('');
  const [Subject, setSubject] = useState('');
  const [subjectsArr, setSubjectsArr] = useState([]);

  useEffect(() => {
    if (Branch && Sem) {
      const index = Schema.branches.findIndex((branch) => {
        return branch.Value === Branch;
      });

      const semIndex = Schema.branches[index].sems.findIndex((sem) => {
        return sem.semno.toString() === Sem.toString();
      });

      const subjectsArr = Schema.branches[index].sems[semIndex].subjects;
      setSubjectsArr(subjectsArr);
    }
  }, [Branch, Sem]);

  const handleSubmit = () => {
    navigate('/downloadQP', {
      state: {
        Branch: Branch,
        Semester: Sem,
        Subject: Subject,
      },
    });
  };

  return (
    <>
      <Navbar />
      <div className="layout" id="download-form">
        <div className="image">
          <img src={DownloadImg} alt="image" />
        </div>
        <div className="multistep-form-container">
          <h4 className="text-2xl font-bold mb-1.5">
            Download Question Papers
          </h4>
          <p className="text-gray-500 mb-12">
            Enter the details of the question paper you want to download. You
            will be able to see it if someone has uploaded it previously.
          </p>

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
                  onChange={(e) => {
                    setBranch(e.target.value);
                  }}
                >
                  <option value="DEFAULT" disabled hidden>
                    Select Branch
                  </option>
                  {Schema.branches.map((e, key) => (
                    <option key={key} value={e.Value}>
                      {e.Value}
                    </option>
                  ))}
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
                  onChange={(e) => {
                    setSem(e.target.value);
                  }}
                >
                  <option value="DEFAULT" hidden disabled>
                    Select Semester
                  </option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                  <option value="V">V</option>
                  <option value="VI">VI</option>
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
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                >
                  <option value="DEFAULT" disabled hidden>
                    Select Subject
                  </option>
                  {subjectsArr.map((e, key) => (
                    <option key={key} value={e.Value}>
                      {e.Value}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <button
              className="button button-primary float-right mt-12 rounded border text-white"
              id="submitForDownload"
              name="submit"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DownloadForm;
