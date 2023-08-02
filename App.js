import { Text } from "react-native";

const MyApp = () => {
  return (
    <>
      <Text>Hello Word</Text>
      <Text>IFAL</Text>
      <Gato />
      <Gato />
      <Gato />
    </>
  );
};

const Gato = () => {
  return <Text>Eu sou um Gato.</Text>;
};

export default MyApp;
