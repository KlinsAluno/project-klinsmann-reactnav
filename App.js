import { useState } from "react";
import { Text, TextInput } from "react-native";

const MyApp = () => {
  return (
    <>
      <Text>Hello Word</Text>
      <Text>IFAL</Text>
      <Gato idade={1} />
      <Gato idade={3} />
      <Gato idade={12} />
    </>
  );
};

const Gato = ({ idade }) => {
  const [nome, setNome] = useState("");

  return (
    <>
      <TextInput
        onChangeText={(texto) => setNome(texto)}
        defaultValue={nome}
        placeholder="Informe o nome do Gato..."
        style={{ borderWidth: 1, height: 40 }}
      />
      <Text>
        Eu sou um(a) Gato(a), meu nome é {nome.toUpperCase()} e eu tenho {idade}
        {idade === 1 ? " ano" : " anos"}.
      </Text>
    </>
  );
};

export default MyApp;
