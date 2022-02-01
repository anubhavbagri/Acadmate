import { createContext, useState, useEffect, useContext } from 'react';
import app from '../utils/firebase-config';
import firebase from 'firebase';

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);

  const [userData, setUserData] = useState();

  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

  const handleMicrosoftLogin = async () => {
    setLoader(true);
    const provider = new firebase.auth.OAuthProvider('microsoft.com');
    try {
      const data = await firebase.auth().signInWithPopup(provider);
      // console.log(data);
      setUserData(data);
      setLoader(false);
    } catch (e) {
      console.log(e, 'error');
      setLoader(false);
    }
  };

  return (
    <AuthContext.Provider value={{ userData, loader, handleMicrosoftLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
