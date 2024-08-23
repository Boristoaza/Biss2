// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDzIQuo99J8YBXWGLN4TpmtJh-uc1RMXWI",
  authDomain: "biss-fa823.firebaseapp.com",
  databaseURL: "https://biss-fa823-default-rtdb.firebaseio.com",
  projectId: "biss-fa823",
  storageBucket: "biss-fa823.appspot.com",
  messagingSenderId: "309651183952",
  appId: "1:309651183952:web:5ed192e61d69b5b4eb3455",
  measurementId: "G-LFS1Y4HQEL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };