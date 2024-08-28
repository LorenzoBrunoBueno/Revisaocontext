import { Surface, Text} from "react-native-paper";
import { Button } from "react-native";
import styles from "../config/style";
import TemaContext from "../contexts/TemaContext"
import { useContext } from "react";

function TrocarTema() {
    const { alterarTema } = useContext(TemaContext);
    return <Button onPress={alterarTema} color="#841584" title="Trocar Tema"/>
}

export default function HomeScreen() {
  return (
    <Surface style={styles.container}>
      <Text>Olá</Text>
     <TrocarTema />
    </Surface>
  );
}
