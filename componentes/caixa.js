import {View} from 'react-native'

export default function(){
    return(
        <View style={{width:'100%', flexDirection:'row', marginBottom:30}}>
            <View style={{width:'20%', height:15, backgroundColor:'blue'}}></View>
            <View style={{width:'20%', height:15, backgroundColor:'green'}}></View>
            <View style={{width:'20%', height:15, backgroundColor:'red'}}></View>
            <View style={{width:'20%', height:15, backgroundColor:'yellow'}}></View>
            <View style={{width:'20%', height:15, backgroundColor:'orange'}}></View>  
            
        </View>
    );
}