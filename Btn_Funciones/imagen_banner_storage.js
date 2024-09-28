import { getAuth } from "firebase/auth";
import { ref, uploadBytes, getStorage, getDownloadURL } from 'firebase/storage';

// Función para subir el banner
export default async function subirBanner(uri) {
  // Verifica si el usuario está autenticado
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    console.log('No hay ningún usuario autenticado');
    return;
  }
  const uid = user.uid;

  const storage = getStorage();
  const nombreDeArchivo = Date.now() + '.jpg';

  // Referencia en Firebase Storage
  const storageRef = ref(storage, 'banner/' + uid + '/' + nombreDeArchivo);

  try {
    const response = await fetch(uri);
    const blob = await response.blob();

    await uploadBytes(storageRef, blob);
    console.log('El banner se subió con éxito');

    const downloadURL = await getDownloadURL(storageRef);
    console.log('URL de descarga de la banner:', downloadURL);

  } catch (error) {
    console.log('¡Ups! Algo salió mal: ' + error);
  }
}
