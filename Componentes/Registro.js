// ./Componentes/registro.js
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { auth } from "../conexion/firebaseConfig";
import { registerUser } from "../conexion/autenticacion";

export default function Registro() {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const user = await registerUser(auth, name, lastname, nickname, email, password);
      console.log(`Bienvenido ${user.uid}`);
    } catch (error) {
      console.log('Error fatal en el registro');
      throw error;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nombre"
        style={styles.input}
      />
      <TextInput
        value={lastname}
        onChangeText={setLastName}
        placeholder="Apellido"
        style={styles.input}
      />
      <TextInput
        value={nickname}
        onChangeText={setNickname}
        placeholder="Apodo"
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Correo Electrónico"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
