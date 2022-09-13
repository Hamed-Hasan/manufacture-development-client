// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// manufacture-development project
const firebaseConfig = {


  apiKey: "AIzaSyADYFCIKr-0-yYMpmuv176oyZ8U8Rm_plk",
  authDomain: "manufacture-development.firebaseapp.com",
  projectId: "manufacture-development",
  storageBucket: "manufacture-development.appspot.com",
  messagingSenderId: "304352925661",
  appId: "1:304352925661:web:47b850d3b657909f060834"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;