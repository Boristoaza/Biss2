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


// export default async function datos(data) {
//   try {
//     const uid = 'hdVjEDZZNwOYt4646wxdYoyp0GF3'; // UID quemado para ejemplo
//     const url = 'https://firebasestorage.googleapis.com/v0/b/biss-fa823.appspot.com/o/images%2Fundefined%2F1726547643236.jpg?alt=media&token=57bdd9ab-7dcd-4e77-8eca-b762c8522498'; // Asegúrate de obtener el URL real de la imagen
//     const timestamp = Date.now(); // Puedes usar un timestamp real

//     const db = getDatabase();
//     const base = ref(db, 'Imagenes_Url/' + uid + '/' + data);

//     const newEntryRef = await push(base, {
//       url: url,
//       timestamp: timestamp,
//     });

//     console.log('Datos subidos exitosamente. Referencia de la nueva entrada:', newEntryRef.key);
//   } catch (error) {
//     console.error('Algo falló:', error);
//   }
// }

// datos('imagen_123');