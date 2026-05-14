import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Botao, BotaoVerde, BotaoGrande } from "../Components/Botoes";

import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {

    const navigation = useNavigation()

    function listar(){
        navigation.navigate("ListarTarefaScreen")
    }
    function home(){
        navigation.navigate("HomeScreen")
    }

    return (
        <View style={styles.container}>
            <Text>Listar</Text>

            <View style={styles.botao}>
                <Botao texto={"Voltar"} cor={"#82031e"} acao={home} />
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