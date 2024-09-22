import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Alert } from 'react-native';
import { subirFoto } from './prueba';

const elegirImagen = async () => {

  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing:true,
    quality:1,
  })
  if(!result.canceled){
    const uri =  result.assets[0].uri;
    console.log('datos de la imagen ' + uri);
     subirFoto(uri)
  }else{
    Alert('no has seleccioando ninguna imafen');
  }
}
export default elegirImagen;
