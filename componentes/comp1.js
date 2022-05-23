import { StyleSheet, Text, } from 'react-native';


export default function comp1(props){
    return(
     <Text style={styles.text}>Componente customizado 1 {props.curso}</Text>
        
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'red',
      
    },
  
  });