import { Text } from "react-native";

const MyApp = () => {
  return (
    <>
      <Text>Hello Word</Text>
      <Text>IFAL</Text>
      <Gato nome="Jubileu" />
      <Gato nome="Chico" />
      <Gato nome="Garfild" />
    </>
  );
};

const Gato = (props) => {
  return <Text>Eu sou um Gato {props.nome.toUpperCase()}.</Text>;
};

export default MyApp;
