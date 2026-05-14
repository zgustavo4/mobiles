import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Botao, BotaoVerde, BotaoGrande } from "../Components/Botoes";

import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {

    const navigation = useNavigation()

    function navegar() {
        navigation.navigate("CriarTarefaScreen")
    }
    function listar(){
        navigation.navigate("ListarTarefaScreen")
    }

    return (
        <View style={styles.container}>
            <Text>Minha tela HomeScreen</Text>

            <Botao texto={"Ir para Criar"} cor={"#a18381"} acao={navegar} />
            <View style={styles.botao}>
                <Botao texto={"Ir para Listar"} cor={"#82031e"} acao={listar} />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});