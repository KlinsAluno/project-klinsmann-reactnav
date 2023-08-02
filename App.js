import { Text } from "react-native";

const MyApp = () => {
  return (
    <>
      <Text>Hello Word</Text>
      <Text>IFAL</Text>
      <Gato nome="Jubileu" idade={5} />
      <Gato nome="Chico" idade={3} />
      <Gato nome="Garfild" idade={12} />
    </>
  );
};

const Gato = ({ nome, idade }) => {
  return (
    <Text>
      Eu sou um Gato, meu nome é {nome.toUpperCase()} e eu tenho {idade} ano(s).
    </Text>
  );
};

export default MyApp;
