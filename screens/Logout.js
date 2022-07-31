import react, {component} from 'react';
import {Text, View , StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

export default class Logout extends Component{
    componentDidMount (){
        firebase.Auth().signOut();
        
    }
    render (){
        return(
            <View style = {styles.container}>

                <Text> LogOut..... </Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems : "center"
    }
});