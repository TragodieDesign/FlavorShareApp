import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB2LbXcky6tycsr135oNlCZWIeN_YK3I6g",
  authDomain: "auth-flavorshare.firebaseapp.com",
  databaseURL: "https://auth-flavorshare-default-rtdb.firebaseio.com",
  projectId: "auth-flavorshare",
  storageBucket: "auth-flavorshare.appspot.com",
  messagingSenderId: "350883304437",
  appId: "1:350883304437:web:3732d59936eb7091df06bc",
  measurementId: "G-M10LV4FLYJ"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Obtendo a instância de autenticação do Firebase
  const auth = getAuth(app);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;

      // Salvar token de autenticação no AsyncStorage
      await AsyncStorage.setItem('authToken', user.accessToken);

      // Redirecionar para a tela HomeScreen após o login bem-sucedido
      navigation.replace('HomeScreen');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View>
        <Button style={{ marginTop: 60 }} title="Cadastre-se" onPress={() => navigation.navigate('Register')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#f2f2f2',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
