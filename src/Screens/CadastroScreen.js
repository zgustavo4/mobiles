import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import { Botao, BotaoVerde, BotaoGrande } from "../Components/Botoes";

import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import LoginScreen from "./LoginScreen";


export default function CadastroScreen() {

    const navigation = useNavigation()
    function navegar() {
        navigation.navigate(LoginScreen)
    }
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    async function CriarCadastro() {
        if (email.length < 5) {
            return Alert.alert("Atenção", "Preencha o e-mail corretamente!")
        }
        if (senha.length < 5) {
            return Alert.alert("Atenção", "Preencha o campo de senha corretamente!")
        }

        try {
            const resposta = await fetch('http://10.111.9.234:3000/cadastro',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }, body: JSON.stringify({
                        "email": email,
                        "senha": senha
                    })
                }
            )
            const resultado = await resposta.json()
            alert(resultado.mensagem)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>CADASTRO</Text>
            <Text>EMAIL</Text>
            <TextInput style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="digite seu email..."
            />
            <Text>SENHA</Text>
            <TextInput style={styles.input}
                onChangeText={setSenha}
                value={senha}
                placeholder="digite sua senha..."
            />

            <View style={styles.botao}>
                <Botao texto={"Cadastrar"} cor={"#7af5e7"} acao={CriarCadastro} />
            </View>
            <View style={styles.botao}>
                <Botao texto={"Ir para Login"} cor={"#82031e"} acao={navegar} />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContentyh: 'center',
    },
    input: {
        width: 140,
        height: 40,
        borderColor: "#0d0d0d",
        margin: 5,
        borderWidth: 2,

    },
    botao: {
        flexDirection: "row",
        margin: 5,
        gap: 4
    },
    titulo: {
        fontSize: 20
    }


});