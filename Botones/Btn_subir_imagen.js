import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import elegirImagen from '../Btn_Funciones/Seleccionar_Imagne';

export default function Btn_subir_imagen() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={elegirImagen}>
        <Text style={styles.buttonText}>seleccionar imagen</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#007BFF', // Color del botón
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 3, // Sombra en Android
    shadowColor: '#000', // Color de sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#FFFFFF', // Color del texto
    fontSize: 16,
    fontWeight: 'bold',
  },
});
