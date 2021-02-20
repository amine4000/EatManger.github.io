import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCIGF_XKDn3gQgbrzNGRLCxJkcWTAxj1eo",
  authDomain: "test-hooks-9be4f.firebaseapp.com",
  databaseURL: "https://test-hooks-9be4f.firebaseio.com",
  projectId: "test-hooks-9be4f",
  storageBucket: "test-hooks-9be4f.appspot.com",
  messagingSenderId: "21603759495",
  appId: "1:21603759495:web:0980a90e8aa611e90d0f22"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;


