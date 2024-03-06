// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDH3dou8XdYbRJ1X1crD-2nERQj-zdR5s",
  authDomain: "login-a71d5.firebaseapp.com",
  projectId: "login-a71d5",
  storageBucket: "login-a71d5.appspot.com",
  messagingSenderId: "641006187285",
  appId: "1:641006187285:web:4d9243fd9ef2ebb78d6f1c",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { auth };
