import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Text, View, Dimensions } from "react-native";
import get_URL_Banner from "./bannersUrl";

// Contenedor para mostrar el banner
const ContenedorBanner = ({ BannerUrl }) => {
  return (
    <View style={styles.container}>
      {BannerUrl ? (
        <Image style={styles.banner} source={{ uri: BannerUrl }} resizeMode="cover" />
      ) : (
        <Text>No se encontraron imágenes</Text>
      )}
    </View>
  );
};

// Componente principal para mostrar el banner
const MuestraBanner = () => {
  const [url, setUrl] = useState(null);

  // useEffect para obtener la URL del banner
  useEffect(() => {
    const fetchUrl = async () => {
      const fetchedUrls = await get_URL_Banner(); // Llamamos a la función asíncrona
      if (fetchedUrls.length > 0) {
        setUrl(fetchedUrls[0]); // Asignamos la primera URL obtenida
      }
    };
    fetchUrl(); // Llamamos a la función dentro del useEffect
  }, []);

  return <ContenedorBanner BannerUrl={url} />;
};

// Obtener las dimensiones de la pantalla
const { width } = Dimensions.get('window');

// Estilos
const styles = StyleSheet.create({
  container: {
    width: '100%', // Asegúrate de que el contenedor ocupe el ancho completo
    alignItems: 'center', // Centrar la imagen en el contenedor
  },
  banner: {
    width: width * 0.9, // 90% del ancho de la pantalla
    height: width * 0.9 * (3 / 4), // Mantener una relación de aspecto (3:4 por ejemplo)
    marginBottom: 10,
  },
});

export default MuestraBanner;
