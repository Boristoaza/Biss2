import { getAuth } from 'firebase/auth';
import { ref, uploadBytes, getStorage, getDownloadURL } from 'firebase/storage';

export const subirFoto = async (uri) => {
  // console.log('URI recibida con éxito: ' + uri);
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    console.log('No hay ningún usuario autenticado');
    return;
  }
  const uid = user.uid; // Obtener el UID del usuario autenticado
  console.log('Este es el UID del usuario: ' + uid);

  const storage = getStorage();

  const timestamp = Date.now(); // Genera un timestamp
  const nombreArchivo = `${timestamp}.jpg`; // Asigna un nombre al archivo
  const storageRef = ref(storage, 'imagen/'+uid+'/'+nombreArchivo); // Crea la referencia

  try {
    // Obtén la imagen como blob
    const response = await fetch(uri);
    const blob = await response.blob();
    // Sube el blob a Firebase Storage
    await uploadBytes(storageRef, blob);

    console.log('La imagen se subió con éxito');
    const downloadURL = await getDownloadURL(storageRef);
    console.log('URL de descarga de la imagen:', downloadURL);
    urls(downloadURL)

  } catch (error) {
    console.log('Error fatal: ' + error);
  }
};

export default subirFoto;