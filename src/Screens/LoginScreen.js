import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import { Botao, BotaoVerde, BotaoGrande } from "../Components/Botoes";

import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import CadastroScreen from "./CadastroScreen";
import HomeScreen from "./HomeScreen";


export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function navegar() {
        navigation.navigate("CadastroScreen");
    }

    async function CriarLogin() {

        if (email.length < 5) {
            return Alert.alert("Atenção", "Preencha o e-mail corretamente!");
        }
        if (senha.length < 5) {
            return Alert.alert("Atenção", "Preencha o campo de senha corretamente!");
        }

        try {
            const resposta = await fetch('http://10.111.9.234:3000/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": email,
                    "senha": senha
                })
            });

            const resultado = await resposta.json();

            if (resultado.resposta === "true") {
                Alert.alert("Sucesso", resultado.mensagem);
                navigation.navigate("HomeScreen");
            } else {
                Alert.alert("Erro", resultado.mensagem || "Credenciais inválidas");
            }

        } catch (error) {
            console.log("Erro na requisição:", error);
            Alert.alert("Erro", "Não foi possível conectar ao servidor.");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>LOGIN</Text>
            
            <Text>EMAIL</Text>
            <TextInput 
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="digite seu email..."
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Text>SENHA</Text>
            <TextInput 
                style={styles.input}
                onChangeText={setSenha}
                value={senha}
                placeholder="digite sua senha..."
                secureTextEntry={true}
            />

            <View style={styles.botao}>
                <Botao texto={"Entrar"} cor={"#7af5e7"} acao={CriarLogin} />
            </View>
            
            <View style={styles.botao}>
                <Botao texto={"Cadastro"} cor={"#82031e"} acao={navegar} />
            </View>
        </View>
    );
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