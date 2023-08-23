import { useState } from "react";
import { Text, TextInput, Button } from "react-native";

const TelaLogin = () => {
  return (
    <>
      <Text>Seja Bem-Vindo</Text>
      <Login />
      <Senha />
      <Button title="LOGAR" />
    </>
  );
};

const Login = () => {
  const [login, setLogin] = useState("");

  return (
    <>
      <Text> Login </Text>

      <TextInput
        onChangeText={(loginValue) => setLogin(loginValue)}
        defaultValue={login}
        placeholder="Digite seu Login."
        style={{ borderWidth: 1, height: 40 }}
      />
    </>
  );
};

const Senha = () => {
  const [senha, setSenha] = useState("");

  return (
    <>
      <Text> Senha </Text>

      <TextInput
        secureTextEntry={true}
        onChangeText={(senhaValue) => setSenha(senhaValue)}
        defaultValue={senha}
        placeholder="Digite sua Senha"
        style={{ borderWidth: 1, height: 40 }}
      />
    </>
  );
};

export default TelaLogin;
