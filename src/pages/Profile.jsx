import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import RowData from '../Components/RowData';

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [uploads, setUploads] = useState(null);

  useEffect(() => {
    const fetchUserUploads = async () => {
      const UploadsRef = collection(db, 'questionPapers');

      const q = query(
        UploadsRef,
        where('userRef', '==', auth.currentUser.uid),
        orderBy('timestamp', 'desc')
      );

      const querySnap = await getDocs(q);

      let uploads = [];

      querySnap.forEach((doc) => {
        return uploads.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setUploads(uploads);
      setLoading(false);
    };

    fetchUserUploads();
  }, [auth.currentUser.uid]);

  return (
    <>
      <Navbar />
      <div className="px-5 pb-8 pt-32 md:px-32 md:pb-16">
        <div className="flex justify-between flex-col lg:flex-row">
          <div>
            <h4 className="text-lg md:text-2xl font-bold mb-1">
              Hey! {auth.currentUser.displayName}
            </h4>
            <p className="text-sm md:text-base">
              Thank you for uploading the following material!
            </p>
          </div>
          <div>
            <button
              className="button button-primary lg:float-right rounded border text-white mr-2 lg:mr-0 "
              onClick={() => navigate('/upload')}
            >
              upload
            </button>
            <button
              className="button button-primary mt-4 lg:mt-0 lg:float-right rounded border text-white mx-0 lg:mx-2"
              onClick={() => navigate('/download')}
            >
              download
            </button>
          </div>
        </div>
      </div>
      <div className="lg:container lg:px-32">
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
                className="inline-block pt-4 pb-2 px-4 font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent  hover:border-gray-300 active cursor-pointer"
                aria-current="page"
              >
                Books
              </a>
            </li>
          </ul>
        </div>
        {uploads?.length > 0 && (
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
                      {!loading &&
                        uploads.map((upload) => (
                          <RowData key={upload.id} upload={upload.data} />
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

export default Profile;
