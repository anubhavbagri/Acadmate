// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH8qQL1du_sANh3GMhDR1T_ZskrCZzqMY",
  authDomain: "acadmate-react.firebaseapp.com",
  projectId: "acadmate-react",
  storageBucket: "acadmate-react.appspot.com",
  messagingSenderId: "81613806699",
  appId: "1:81613806699:web:f3f726ea0030de608d652e",
};

// Initialize Firebase
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

export default app;
