import { db } from '../utils/firebase-config';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';

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
              {auth.currentUser.displayName}
            </h4>
            <p>All the material uploaded by you.</p>
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
    </>
  );
}

export default Profile;
