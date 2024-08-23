import { createUserWithEmailAndPassword,  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

export async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Usuario creado exitosamente');
    console.log('ID de usuario:', user.uid);
    return user;
  } catch (error) {
    console.error('Error fatal: No se pudo registrar al usuario', error);
    throw error;
  }
}

export async function LoginUser(email,password) {
  try {
    const userCredential = await signInWithEmailAndPassword( auth, email,password);
    const user = userCredential.user;
    console.log('logueado con exito');
    console.log('Este es Id del usuario ', user.uid);
    return user;
  } catch (error) {
    console.error('Error fatal, intenta otra vez o crea una cuenta', error);
    throw  Error;
  }
}