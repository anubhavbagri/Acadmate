import { useLocation, Navigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import DownloadQpRowData from '../Components/DownloadQpRowData';

function DownloadQP() {
  const location = useLocation();

  const Branch = location?.state?.Branch;
  const Sub = location?.state?.Subject;
  const Sem = location?.state?.Semester;
  const qp = location?.state?.qp;

  if (!Branch || !Sub || !Sem || !qp) {
    return <Navigate to="/download" replace={true} />;
  }

  return (
    <>
      <Navbar />
      <div className="dashboard-header">
        <div className="flex justify-between flex-col lg:flex-row">
          <div>
            <h4 className="text-2xl font-bold">Download Question Papers</h4>
            <p className="text-gray-500 mb-4">
              The following are the question papers that you requested.
            </p>
            <p>
              <span className="font-bold">Branch: </span>
              {Branch}
            </p>
            <p>
              <span className="font-bold">Subject: </span>
              {Sub}
            </p>
            <p>
              <span className="font-bold">Semester: </span>
              {Sem}
            </p>
          </div>
          <div>
            <button
              className="button button-primary float-right rounded border text-white mx-0 lg:mx-2"
              onClick={() => {}}
            >
              edit details
            </button>
          </div>
        </div>
      </div>
      <div className="container px-32">
        <div className="border-b border-gray-300">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <a
                href="#"
                className="inline-block pt-4 pb-2 px-4 font-medium text-center text-blue-600 rounded-t-lg border-b-2 border-blue-600 "
              >
                Question Papers
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-block pt-4 pb-2 px-4 font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent  hover:border-gray-300 active"
                aria-current="page"
              >
                Books
              </a>
            </li>
          </ul>
        </div>
        {qp?.length > 0 && (
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b border-gray-200">
                      <tr>
                        <th
                          scope="col"
                          className="pt-3 pb-2 px-6 font-bold text-left"
                        >
                          Sl.no
                        </th>
                        <th
                          scope="col"
                          className="pt-3 pb-2 px-6 font-bold text-left"
                        >
                          Uploaded By
                        </th>
                        <th
                          scope="col"
                          className="pt-3 pb-2 px-6 font-bold text-left"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          className="pt-3 pb-2 px-6 font-bold text-left"
                        >
                          Year
                        </th>
                        <th scope="col">
                          <span className="sr-only"></span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {qp.map((item, indx) => (
                        <DownloadQpRowData
                          key={item.id}
                          singleQp={item.data}
                          index={indx}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DownloadQP;
