import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Btn_subir_imagen from '../Botones/Btn_subir_imagen';
import ContenedorImagen from '../contendorComponente/contendorImagen';

export default function Perfil({ route }) {
  const { profileData } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <TouchableOpacity style={styles.editarBanner}>
          <Text style={styles.editText}>Editar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profilePictureContainer}>
        {/* <View style={styles.profilePicture}></View> */}

        <ContenedorImagen/>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>{profileData.name}</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Apellido:</Text>
        <Text style={styles.value}>{profileData.lastname}</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Apodo:</Text>
        <Text style={styles.value}>{profileData.nickname}</Text>
      </View>
      <Btn_subir_imagen></Btn_subir_imagen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  banner: {
    height: 200,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#ececec',
    position: 'relative',
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginTop: -60,
    marginBottom: 20,
  },
  profilePicture: {
    borderRadius: 120,
    height: 120,
    width: 120,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#ffffff',
    backgroundColor: 'grey',
  },
  profileInfo: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  editarBanner: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 25,
    backgroundColor: 'blue',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
