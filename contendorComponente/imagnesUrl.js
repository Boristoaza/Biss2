import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

export const obtenerTodasLasUrls = async () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log('No hay ningún usuario autenticado');
    return [];
  }

  const uid = user.uid; // Obtener el UID del usuario autenticado
  const storage = getStorage();

  // Referencia a la carpeta donde están almacenadas las imágenes del usuario
  const folderRef = ref(storage, 'imagen/' + uid + '/');

  try {
    // Listar todos los archivos en la carpeta
    const result = await listAll(folderRef);

    // Array para almacenar las URLs
    const urls = [];

    // Recorrer cada archivo y obtener su URL
    for (const itemRef of result.items) {
      const url = await getDownloadURL(itemRef);
      urls.push(url); // Agregar la URL al array
    }

    // Retornar todas las URLs
    return urls;
  } catch (error) {
    console.error('Error al obtener las URLs:', error);
    return [];
  }
};

export default obtenerTodasLasUrls;
