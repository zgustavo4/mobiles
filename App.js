//NAVEGAÇÃO DE TELAS

//detecta interação tela x usuario
import 'react-native-gesture-handler'

//container
import { NavigationContainer } from '@react-navigation/native';

//importando a pilha
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './src/Screens/HomeScreen';
import CriarTarefaScreen from './src/Screens/CriarTarefaScreen';
import CadastroScreen from './src/Screens/CadastroScreen';
import LoginScreen from './src/Screens/LoginScreen';
import ListarTarefaScreen from './src/Screens/ListarTarefaScreen';
import SplashScreen from './src/Screens/SplashScreen';

const PilhaTelas = createStackNavigator()

  
export default function App() {
  return (
    <NavigationContainer>

      <PilhaTelas.Navigator initialRouteName='SplashScreen'>
        <PilhaTelas.Screen name="LoginScreen" component={LoginScreen}/>
        <PilhaTelas.Screen name="CadastroScreen" component={CadastroScreen}/>
        <PilhaTelas.Screen name="HomeScreen" component={HomeScreen}/>
        <PilhaTelas.Screen name="CriarTarefaScreen" component={CriarTarefaScreen}/>
        <PilhaTelas.Screen name="ListarTarefaScreen" component={ListarTarefaScreen}/>
        <PilhaTelas.Screen name="SplashScreen" component={SplashScreen}/>


      </PilhaTelas.Navigator>

    </NavigationContainer>
  );
}
