import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import obtenerTodasLasUrls from "./imagnesUrl";

const ContenedorImagen = ({ imageUrl }) => {
  return (
    <View>
      {imageUrl ? (
        <Image
          style={styles.imagen}
          source={{ uri: imageUrl }} // Muestra la primera URL válida
        />
      ) : (
        <Text>No image available</Text>
      )}
    </View>
  );
};

const MostrarUnaImagen = () => {
  const [url, setUrl] = useState(null); // Solo se necesita un URL, así que no es un array

  useEffect(() => {
    const fetchUrl = async () => {
      const fetchedUrls = await obtenerTodasLasUrls(); // Llamada a la función
      if (fetchedUrls.length > 0) {
        setUrl(fetchedUrls[0]); // Solo toma la primera URL
      }
    };

    fetchUrl();
  }, []);

  return <ContenedorImagen imageUrl={url} />; // Pasa solo la primera URL al componente
};

const styles = StyleSheet.create({
  imagen: {
    width: 160, // Ajusta el tamaño según sea necesario
    height: 160, // Ajusta el tamaño según sea necesario
    marginBottom: 10,
    borderRadius:100,

  },
});

export default MostrarUnaImagen;
