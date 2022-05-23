import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { TextInput } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import Comp1 from './componentes/comp1'

let nome;
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
        <Comp1 curso="teste"></Comp1> 
      <Text></Text>
      <TextInput style={{borderWidth:1, borderColor:'#000',width:"90%" , padding:5}}/>
      <StatusBar style="auto" backgroundColor='yellow'/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
