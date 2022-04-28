import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHSG9fBQpcXlJYPVjeYEeGgsuyAWDckp0",
  authDomain: "facebook-clone-89867.firebaseapp.com",
  projectId: "facebook-clone-89867",
  storageBucket: "facebook-clone-89867.appspot.com",
  messagingSenderId: "924121127799",
  appId: "1:924121127799:web:aeeafa9302b3111e2e9f72",
  measurementId: "G-CMRP2Z43MP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db; 