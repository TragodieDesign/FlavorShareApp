// LoginSignupScreen.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function LoginSignupScreen() {
  return (
    <View style={styles.container}>
      <Button title="Login" onPress={() => {/* Lógica de login */}} />
      <Button title="Cadastro" onPress={() => {/* Lógica de cadastro */}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
