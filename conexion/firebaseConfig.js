// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { child, getDatabase, push, ref, set } from 'firebase/database';
import { getDownloadURL, getStorage, listAll } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCi-nqhxoku3zYdpcl_M0uCksh7bIvSXxE",
  authDomain: "biss-4943d.firebaseapp.com",
  databaseURL: "https://biss-4943d-default-rtdb.firebaseio.com",
  projectId: "biss-4943d",
  storageBucket: "biss-4943d.appspot.com",
  messagingSenderId: "251225724539",
  appId: "1:251225724539:web:29de5d0de56319f232b4de",
  measurementId: "G-TJ3WD2NKKW"
};

// Inicializa Firebase solo una vez
const app = initializeApp(firebaseConfig);

// Configura la autenticación con persistencia
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getDatabase(app);
const storage = getStorage(app);

export { auth, db, storage, set, ref };
