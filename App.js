import { StatusBar } from 'expo-status-bar'
import { Text, View, Image,} from 'react-native'
import Estilos from './estilos/estilos.js'
import Caixa from './componentes/caixa.js'
import CaixaTexto from './componentes/CaixaDeTexto'
import Comp1 from './componentes/comp1'


function exibir(p){
    if(p){
      return(<Caixa/>)
    }else{
      return(<Text>falso</Text>)
    }
}

export default function App() {
  return (
    <View style={Estilos.container}>
      <StatusBar style="auto" backgroundColor='yellow'/>
      <Image style={Estilos.image} source={require('./assets/imagem/delivery.png')}/>
      <Text style={Estilos.titulo}>Hello World!</Text>
        <Comp1 curso="React-Native"></Comp1> 
        {exibir(true)}
      <Text></Text>
      {/* <View style={Estilos.lista}>
          <Lista/>

      </View> */}
      <CaixaTexto/>
    </View>
   
  );
}




