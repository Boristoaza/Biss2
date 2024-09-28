import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
import { subirFoto } from './imagen_profile_sotrage';
import subirBanner from './imagen_banner_storage';


const elegirImagen = async () => {

  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing:true,
    quality:1,
  })
  if(!result.canceled){
    const uri =  result.assets[0].uri;
    console.log('datos de la imagen ' + uri);
     subirFoto(uri)
     subirBanner(uri)
  }else{
    Alert('no has seleccioando ninguna imagen');
  }
}
export default elegirImagen;
