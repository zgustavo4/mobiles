import { StyleSheet, Text, View } from 'react-native';

const Card = ({titulo, descricao,cor})=>{
    return(
        <View style={[styles.ContornoCard, {backgroundColor:cor}]}>
            <Text>{titulo}</Text>
            <Text>_______________________</Text>
            <Text>{descricao}</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    ContornoCard:{
        margin:5,
        borderWidth:1,
        borderColor:'black',
        width:150,
        height:80,
        alignItems:'center'
    }
  
  });

  export {Card}