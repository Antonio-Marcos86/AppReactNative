import{View, Text, TextInput, Button,Alert} from 'react-native'
import { useState } from 'react';
import Estilos from '../estilos/estilos.js'
function exibir(p){
    if(p){
      return(()=>Alert.alert('Login','Efetuado com sucesso!'))
    }else{
      return(()=>Alert.alert('Incorreto','Login ou senha incorretos!'))
    }
}




export default function(){
    const [nome,setNome]=useState();
    const [senha,setSenha]=useState();

    return(
        <View style={{width:'100%',padding:20}}>
            <Text>Login:</Text>
            <TextInput style={Estilos.txtInput} nome={nome} value={nome} onChangeText={text=>setNome(text)} />
            <Text>Senha:</Text>
            <TextInput style={Estilos.txtInput} senha={senha} value={senha} onChangeText={text=>setSenha(text)} />
            <Button style={Estilos.botao} title='Mostrar mensagem' onPress={exibir(true)}/>
            
        </View>
        
    )
}