import { StyleSheet, Text, } from 'react-native';
import Estilos from '../estilos/estilos.js'


export default function comp1(props){
    return(
     <Text style={Estilos.txt}>Componente customizado 1 {props.curso}</Text>
        
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'red',
      
    },
  
  });