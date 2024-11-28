// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useColorMode } from 'native-base';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
  const navigation = useNavigation(); // Usa el hook para obtener la navegación

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { colorMode } = useColorMode(); // Obtener el modo de color actual

  const handleLogin = () => {
    navigation.replace('Main');
  };

  const handleForgotPassword = () => {
    alert('Recuperar contraseña no implementado aún');
  };

  // Colores según el modo
  const backgroundColor = colorMode === 'light' ? '#e6f2ff' : '#1a202c';
  const textColor = colorMode === 'light' ? '#3a5a9f' : '#ffffff';
  const inputBackgroundColor = colorMode === 'light' ? '#ffffff' : '#2d3748';
  const inputBorderColor = colorMode === 'light' ? '#bdd1e6' : '#ffffff';
  const placeholderColor = colorMode === 'light' ? '#6a8caf' : '#ffffff';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Iniciar Sesión</Text>

      <TextInput
        style={[styles.input, { backgroundColor: inputBackgroundColor, borderColor: inputBorderColor }]}
        placeholder="Usuario"
        placeholderTextColor={placeholderColor}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={[styles.input, { backgroundColor: inputBackgroundColor, borderColor: inputBorderColor }]}
        placeholder="Contraseña"
        placeholderTextColor={placeholderColor}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
        <Text style={[styles.forgotText, { color: textColor }]}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      {/* Navegación a la pantalla de Registro */}
      <Pressable onPress={() => navigation.navigate('Registro')}>
        <Text style={[styles.forgotText, { color: textColor }]}>¿No tienes cuenta? Regístrate aquí</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    borderWidth: 1,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#3a5a9f',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
  },
  forgotText: {
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default LoginScreen;
