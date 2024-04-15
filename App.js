import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';

const App = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleEnviar = () => {
    // Lógica para processar o login e senha aqui
    console.log('Login:', login);
    console.log('Senha:', senha);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image
          source={require('./img/Captura de tela de 2024-04-15 07-29-41.png')}
          style={styles.logo}
        />
        <Text style={styles.greeting}>Olá Helysson, Bem-vindo de volta</Text>
        <Text style={styles.goal}>Meta atual: 160KWH/mês</Text>
      </View>

      {/* Caixa de texto para login */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu login"
        onChangeText={(text) => setLogin(text)}
        value={login}
      />

      {/* Caixa de texto para senha */}
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        onChangeText={(text) => setSenha(text)}
        value={senha}
      />

      {/* Botão Enviar */}
      <Button title="Enviar" onPress={handleEnviar} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
   // width: 100, // Ajusta a largura conforme necessário
   // height: 100, // Ajusta a altura conforme necessário
   // marginBottom: 16,
  },
  
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center', // Centraliza os elementos horizontalmente
  },
  header: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,

  },
  goal: {
    fontSize: 16,
    color: 'green',
  },
  input: {
    height: 40,
    width: '100%', // Ocupa toda a largura do contêiner pai
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default App;
