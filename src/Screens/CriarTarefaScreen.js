import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native"
import { Botao, BotaoVerde, BotaoGrande } from "../Components/Botoes";

import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";



export default function CriarTarefaScreen(){

    const navigation = useNavigation()
    function navegar() {
        navigation.goBack()
    }
    return(
        <View style={styles.container}>
            
            <Text>Titulo</Text>
            <TextInput style={styles.input}></TextInput>
            <Text>Descrição</Text>
            <TextInput style={styles.input}></TextInput>
            <Text>Nivel</Text>
            <TextInput style={styles.input}></TextInput>

            <View style={styles.botao}>
            <Botao texto={"Salvar"} cor={"#7af5e7"}/>
            <Botao texto={"Home"} cor={"#fa2036"} acao={navegar}/>
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
    input:{
        width:140,
        height:40,
        borderColor:"#0d0d0d",
        margin:5,
        borderWidth:2,

    },
    botao:{
        flexDirection:"row",
        margin:5,
        gap:4
    }

  
  });