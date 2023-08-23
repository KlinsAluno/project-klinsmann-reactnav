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
  const [raca, setRaca] = useState("");
  const [corOlhos, setCorOlhos] = useState("");

  return (
    <>
      <TextInput
        onChangeText={(nomeTxt) => setNome(nomeTxt)}
        defaultValue={nome}
        placeholder="Nome do Gato..."
        style={{ borderWidth: 1, height: 40 }}
      />

      <TextInput
        onChangeText={(racaTxt) => setRaca(racaTxt)}
        defaultValue={raca}
        placeholder="Raça do Gato."
        style={{ borderWidth: 1, height: 40 }}
      />

      <TextInput
        onChangeText={(corOlhosTxt) => setCorOlhos(corOlhosTxt)}
        defaultValue={corOlhos}
        placeholder="Cor dos Olhos do Gato."
        style={{ borderWidth: 1, height: 40 }}
      />

      <Text>
        Eu sou um(a) Gato(a), meu nome é {nome.toUpperCase()} e eu tenho {idade}
        {idade === 1 ? " ano" : " anos"}, Raça: {raca.toUpperCase()}, Cor dos
        Olhos: {corOlhos.toUpperCase()}
      </Text>
    </>
  );
};

export default MyApp;
