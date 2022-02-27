import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../utils/firebase-config';
import { toast } from 'react-toastify';

function OAuth() {
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      const auth = getAuth();
      const provider = new OAuthProvider('microsoft.com');
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //   console.log(user);

      // Check for user
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      // If user doesn't exist, create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate('/profile');
    } catch (err) {
      toast.error('Could not authorize with microsoft');
    }
  };

  return (
    <div>
      <a
        className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
        onClick={loginHandler}
        style={{ cursor: 'pointer' }}
      >
        Login with Microsoft
      </a>
    </div>
  );
}

export default OAuth;
