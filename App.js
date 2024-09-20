import { StatusBar } from 'expo-status-bar';
import { ImageBackgroundComponent, StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Registro from "./Componentes/Registro";
import Login from "./Componentes/Login";
import Perfil from './Componentes/Perfil';

const Stack = createNativeStackNavigator(); // Cambiado a Stack

export default function App() {

  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Registro" component={Registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
