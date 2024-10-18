// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const apiKey = import.meta.REACT_APP_FIREBASE_API_KEY;
const authDomain = import.meta.REACT_APP_FIREBASE_AUTH_DOMAIN;
const projectId = import.meta.REACT_APP_FIREBASE_PROJECTID;
const storageBucket = import.meta.REACT_APP_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = import.meta.REACT_APP_FIREBASE_MESSAGING_SENDERID;
const appId = import.meta.REACT_APP_FIREBASE_APPID;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  databaseURL: `https://react-portfolio-9e76d-default-rtdb.europe-west1.firebasedatabase.app/`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db;
