import {View,Text, FlatList} from 'react-native'
import estilos from '../estilos/estilos';
const produtos=[
    {
        id:1,
        produto:'Celular',
        preco: 250.32,
    },
    {
        id:2,
        produto:'Teclado',
        preco: 50.26,
    },
    {
        id:3,
        produto:'Monitor',
        preco: 850.99,
    }
]
export default function(){
    return(
        <View>
           <FlatList 
                style={estilos.lista}
                data={produtos}
                keyExtractor={item=>item.id}
                renderItem={({item})=><Text style={estilos.textoLista}>Produto: {item.produto} | Valor: R$ {item.preco}</Text>}           
            />
        </View>

    );
}