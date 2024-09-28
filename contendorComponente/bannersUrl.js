// Función para obtener la URL del banner
import { getAuth } from "firebase/auth";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

export default async function get_URL_Banner() {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log('Usuario no autenticado');
    return [];
  }

  const uid = user.uid; // Obtener el UID del usuario autenticado
  const storage = getStorage();
  const folderBannerRef = ref(storage, 'banner/' + uid + '/');

  try {
    // listar los archivos
    const result = await listAll(folderBannerRef);
    // el array almacena las urls del query
    const urls = [];
    for (const itemsRef of result.items) {
      const url = await getDownloadURL(itemsRef); // Esperar a que se resuelva la promesa
      urls.push(url);
    }
    return urls;
  } catch (error) {
    console.log('Ocurrió un error: ' + error);
    return [];
  }
}