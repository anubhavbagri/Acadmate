import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBH8qQL1du_sANh3GMhDR1T_ZskrCZzqMY',
  authDomain: 'acadmate-react.firebaseapp.com',
  projectId: 'acadmate-react',
  storageBucket: 'acadmate-react.appspot.com',
  messagingSenderId: '81613806699',
  appId: '1:81613806699:web:f3f726ea0030de608d652e',
};

initializeApp(firebaseConfig);

export const db = getFirestore();
