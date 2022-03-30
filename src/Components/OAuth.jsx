import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  OAuthProvider,
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../utils/firebase-config';
import { toast } from 'react-toastify';

function OAuth() {
  const navigate = useNavigate();

  const asyncLoginHandler = async () => {
    try {
      const auth = getAuth();
      const provider = new OAuthProvider('microsoft.com');
      // const userResult = await signInWithPopup(auth, provider);
      const userResult = await signInWithRedirect(auth, provider);
      const user = userResult.user;
      console.log(user);
      // Check for user
      // const docRef = doc(db, 'users', user.uid);
      // const docSnap = await getDoc(docRef);

      // If user doesn't exist, create user
      // if (!docSnap.exists()) {
      //   await setDoc(doc(db, 'users', user.uid), {
      //     name: user.displayName,
      //     email: user.email,
      //     timestamp: serverTimestamp(),
      //   });
      // }
      navigate('/profile');
    } catch (err) {
      console.log(err);
      toast.error('Could not authorize with microsoft');
    }
  };
  // const syncLoginHandler = () => {
  //   try {
  //     const auth = getAuth();
  //     const provider = new OAuthProvider('microsoft.com');
  //     signInWithPopup(auth, provider)
  //       .then((result) => {
  //         const user = result.user;

  //         //   console.log(user);

  //         // Check for user
  //         const docRef = doc(db, 'users', user.uid);
  //         getDoc(docRef).then(async (docSnap) => {
  //           // If user doesn't exist, create user
  //           if (!docSnap.exists()) {
  //             await setDoc(doc(db, 'users', user.uid), {
  //               name: user.displayName,
  //               email: user.email,
  //               timestamp: serverTimestamp(),
  //             });
  //           }
  //           navigate('/profile');
  //         });
  //       })
  //       .catch((err) => {
  //         window.alert('err', err);
  //         console.log(err);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //     toast.error('Could not authorize with microsoft');
  //   }
  // };

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
      console.log(err);
      toast.error('Could not authorize with microsoft');
    }
  };

  return (
    <div>
      <a
        className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
        onClick={asyncLoginHandler}
        style={{ cursor: 'pointer' }}
      >
        Login with Microsoft
      </a>
    </div>
  );
}

export default OAuth;
