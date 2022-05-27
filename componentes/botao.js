import { StyleSheet, Text, } from 'react-native';
import Estilos from '../estilos/estilos.js'

export default function botao(props){
    return(
       validar()
        
    );
   
}

const validar=()=>{
    if(props.nome == 'Antonio' && props.senha == '1234'){
       return(()=>Alert.alert('Login','Efetuado com sucesso!'));
      
    }else{
       return(()=>Alert.alert('Incorreto','Login ou senha incorretos!'));
      
   }
}