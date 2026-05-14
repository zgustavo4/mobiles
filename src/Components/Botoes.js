import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

const Botao = ({cor, texto, acao, tamanhoFonte})=>{
    return(
        <TouchableOpacity style={[meuCss.botao,{backgroundColor:cor}]} onPress={acao}>
            <Text style={{fontSize:tamanhoFonte}}>{texto}</Text>
        </TouchableOpacity>
    )
}

const meuCss = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    botao:{
        padding:10,
        width:100,
        alignItems:'center',
        borderRadius:10
    }
  });

  export {Botao}