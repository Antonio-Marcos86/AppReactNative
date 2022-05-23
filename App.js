import { StatusBar } from 'expo-status-bar';
import { Text, View,Footer } from 'react-native';
import { TextInput } from 'react-native';
import Estilos from './estilos/estilos.js'
import Comp1 from './componentes/comp1'


export default function App() {
  return (
    <View style={Estilos.container}>
      <Text style={Estilos.titulo}>Hello World!</Text>
        <Comp1 curso="teste"></Comp1> 
      <Text></Text>
      <TextInput style={Estilos.txtInput}/>
      <StatusBar style="auto" backgroundColor='yellow'/>
    </View>
   
  );
}




