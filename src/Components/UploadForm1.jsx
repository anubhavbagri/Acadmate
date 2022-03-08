import { useEffect, useState } from 'react';
import { db } from '../utils/firebase-config';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { Schema } from '../data/Schema';
import { toast } from 'react-toastify';

function UploadForm1({ nextStep, handleStateChange, values }) {
  const [Branch, setBranch] = useState(values.Branch);
  const [Sem, setSem] = useState(values.Sem);
  const [Subject, setSubject] = useState(values.Subject);
  const [Type, setType] = useState(values.Type);
  const [Year, setYear] = useState(values.Year);

  const [subjectsArr, setSubjectsArr] = useState([]);

  useEffect(() => {
    if (Branch !== 'Select Branch' && Sem !== 'Select Semester') {
      const index = Schema.branches.findIndex((branch) => {
        return branch.Value === Branch;
      });

      const semIndex = Schema.branches[index].sems.findIndex((sem) => {
        return sem.semno === Sem;
      });

      const subjectsArr = Schema.branches[index].sems[semIndex].subjects;
      setSubjectsArr(subjectsArr);
    }
  }, [Branch, Sem]);

  const handleSubmit = async () => {
    if (
      Branch === 'Select Branch' ||
      Sem === 'Select Semester' ||
      Subject === 'Select Subject' ||
      Type === 'Select Type (MTE/ETE)' ||
      Year === 'Select Year'
    ) {
      toast.error('Please select all fields');
    } else {
      const QpRef = collection(db, 'questionPapers');

      const q = query(
        QpRef,
        where('Branch', '==', Branch),
        where('Semester', '==', Sem),
        where('Subject', '==', Subject),
        where('Type', '==', Type),
        where('Year', '==', Year),
        orderBy('timestamp', 'desc')
      );

      const querySnap = await getDocs(q);

      let questionPapers = [];

      querySnap.forEach((doc) => {
        return questionPapers.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      if (questionPapers.length > 0) {
        toast.error('This question paper already exists!');
      } else {
        nextStep();
        handleStateChange({ Branch, Sem, Subject, Type, Year });
      }
    }
  };

  return (
    <div className="form-box" id="form-box-details">
      <ul className="flex items-baseline space-x-6 pb-6">
        <div className="flex">
          <li className="">
            <a className="text-sm px-2 py-1 bg-blue-600 text-white rounded-lg mr-2">
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
            <option value="DEFAULT" hidden disabled>
              {Branch}
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
              {Sem}
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
              {Subject}
            </option>
            {subjectsArr.map((e, key) => (
              <option key={key} value={e.Value}>
                {e.Value}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex">
        <div className="form-group fill-available mb-3 mr-2">
          <label htmlFor="type">
            Type
            <select
              defaultValue={'DEFAULT'}
              className="text-sm block w-full mt-1.5 py-1 pl-2
      rounded-md
      border-gray-300
      shadow-sm
      focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              id="type"
              name="type"
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option value="DEFAULT" disabled hidden>
                {Type}
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
              defaultValue={'DEFAULT'}
              className="text-sm block w-full mt-1.5 py-1 pl-2
      rounded-md
      border-gray-300
      shadow-sm
      focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              id="year"
              name="year"
              onChange={(e) => {
                setYear(e.target.value);
              }}
            >
              <option value="DEFAULT" disabled hidden>
                {Year}
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
        type="button"
        onClick={handleSubmit}
      >
        Continue -{'>'}
      </button>
    </div>
  );
}

export default UploadForm1;
