import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Btn_subir_imagen from '../Botones/Btn_subir_imagen';
import ContenedorImagen from '../contendorComponente/contendorImagen';
import ImagenBanner from '../Botones/btn_subir_banner';
import MuestraBanner from '../contendorComponente/contenedorBanner';

export default function Perfil({ route }) {
  const { profileData } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <MuestraBanner />
      </View>
      <View style={styles.profilePictureContainer}>
        <ContenedorImagen />
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
      <View style={styles.buttonContainer}>
        <Btn_subir_imagen />
        <ImagenBanner />
      </View>
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
  buttonContainer: {
    flexDirection: 'row', // Para que los botones estén uno al lado del otro
    justifyContent: 'space-around', // Para espaciar los botones equitativamente
    marginVertical: 20, // Espaciado vertical
  },
});
