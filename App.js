import { Text } from "react-native";

const MyApp = () => {
  return (
    <>
      <Text>Hello Word</Text>
      <Text>IFAL</Text>
      <Gato nome="Jubileu" idade={1} />
      <Gato nome="Chico" idade={3} />
      <Gato nome="Garfild" idade={12} />
    </>
  );
};

const Gato = ({ nome, idade }) => {
  let texto = "anos";
  if (idade === 1) {
    texto = "ano";
  }

  return (
    <Text>
      Eu sou um(a) Gato(a), meu nome é {nome.toUpperCase()} e eu tenho {idade}{" "}
      {texto}.
    </Text>
  );
};

export default MyApp;
