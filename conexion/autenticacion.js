import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth ,set  ,db } from "./firebaseConfig";
import { ref, get, child } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';
import { doc, getDoc } from 'firebase/firestore';



export async function registerUser(email, password, firstname, lastname, nickname) {
  try {
    const credentials = await createUserWithEmailAndPassword(auth, email, password);
    const userId = credentials.user.uid;
    console.log(' estos son los datos ' ,firstname, lastname ,nickname );
    if (!firstname || !lastname || !nickname) {
      throw new Error("Todos los campos deben estar definidos");
    }
    try {
      await set(ref(db, `profile/${userId}`), {
        name: firstname,
        lastname: lastname,
        nickname: nickname
      });
      console.log('Se guardaron los datos con éxito en Realtime Database');
    } catch (error) {
      console.error('No se pudieron guardar los datos en Realtime Database:', error);
      throw error;
    }
    console.log('Bienvenido a Biss');
    console.log('User UID: ' + userId);
  } catch (error) {
    console.error('Error creating user:', error.message);
    throw error;
  }
}

export async function LoginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    const user = userCredential.user;

    console.log('Logueado con éxito');
    console.log('Este es el ID del usuario: ', user.uid);

    // Obtén la referencia de la base de datos para el perfil del usuario
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, `profile/${user.uid}`));

    if (snapshot.exists()) {
      const profileData = snapshot.val();
      console.log('Datos del perfil , hola mundo:', profileData);

      // Devuelve tanto el usuario como los datos del perfil
      return { user, profileData };
    } else {
      console.log('No se encontró el perfil del usuario');
      return { user, profileData: null };
    }
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    throw error;
  }
}