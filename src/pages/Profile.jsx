import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { FaDownload } from 'react-icons/fa';

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="dashboard-header">
        <div className="flex justify-between flex-col lg:flex-row">
          <div>
            <h4 className="text-2xl font-bold mb-1">
              Hey! {auth.currentUser.displayName}
            </h4>
            <p>Thank you for uploading the following material!</p>
          </div>
          <div>
            <button
              className="button button-primary float-right rounded border text-white mx-0 lg:mx-2"
              onClick={() => navigate('/download')}
            >
              download
            </button>
            <button
              className="button button-primary float-right rounded border text-white"
              onClick={() => navigate('/upload')}
            >
              upload
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
                        Name
                      </th>
                      <th
                        scope="col"
                        className="pt-3 pb-2 px-6 font-bold text-left"
                      >
                        Branch
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
                    {/* <!-- row 1 --> */}
                    <tr className="bg-gray-200 text-sm font-medium whitespace-nowrap">
                      <td className="py-3 px-6">Operating Systems</td>
                      <td className="py-3 px-6">Information Technology</td>
                      <td className="py-3 px-6">MTE2</td>
                      <td className="py-3 px-6">2019</td>
                      <td className="py-3 px-6 float-right">
                        <FaDownload size={15} className="text-blue-600" />
                      </td>
                    </tr>
                    {/* <!-- row 2 --> */}
                    <tr className="text-sm font-medium whitespace-nowrap">
                      <td className="py-3 px-6 ">
                        Materials Science and Engineering
                      </td>
                      <td className="py-3 px-6">Mechanical Engineering</td>
                      <td className="py-3 px-6">MTE1</td>
                      <td className="py-3 px-6">2018</td>
                      <td className="py-3 px-6 float-right">
                        <FaDownload size={15} className="text-blue-600" />
                      </td>
                    </tr>
                    {/* <!-- Row 3 --> */}
                    <tr className="bg-gray-200 text-sm font-medium whitespace-nowrap">
                      <td className="py-3 px-6 ">Operating Systems</td>
                      <td className="py-3 px-6">Information Technology</td>
                      <td className="py-3 px-6">MTE2</td>
                      <td className="py-3 px-6">2019</td>
                      <td className="py-3 px-6 float-right">
                        <FaDownload size={15} className="text-blue-600" />
                      </td>
                    </tr>
                    {/* <!-- Row 4 --> */}
                    <tr className="text-sm font-medium whitespace-nowrap">
                      <td className="py-3 px-6 ">
                        Materials Science and Engineering
                      </td>
                      <td className="py-3 px-6">Mechanical Engineering</td>
                      <td className="py-3 px-6">MTE1</td>
                      <td className="py-3 px-6">2018</td>
                      <td className="py-3 px-6 float-right">
                        <FaDownload size={15} className="text-blue-600" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
