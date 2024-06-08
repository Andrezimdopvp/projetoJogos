import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Image,
    Linking,
} from 'react-native';

const imgBackground = require('../assets/lethal.jpg');

const meuLink = () =>{
    Linking.openURL('https://store.steampowered.com/app/1966720/Lethal_Company/');
}
export default class TelaLethal extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={imgBackground} resizeMode="cover" style={styles.image}>
                    <View style={styles.box}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>
                            Lethal Company
                            </Text>
                        </View>
                    <View style={styles.text}>
                        <Text style={styles.LethalText}>
                            Lethal company é um jogo em que você e seus amigos estão em uma nave e precisam explorar luas para pegar sucata e bater a quota, mas existem monstros também o que dificulta, mas esse jogo pode ser mais engraçado do que assustador. 
                        </Text>
                        <Text style={styles.LethalText}>
                            Preço: R$32,99
                        </Text>
                        <TouchableOpacity style={styles.LethalText}
                        onPress={meuLink}>
                            Link para baixar: https://store.steampowered.com/app/1966720/Lethal_Company/
                        </TouchableOpacity>
                    </View>
                
                    </View>
                </ImageBackground>
            </View>

        );
    }
}
    
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        flex:1,
        justifyContent: 'center',
        width:'100%',
        height:'100%'
    },
    box:{
        flex:1,
    },
    title:{
        backgroundColor:'black',
        width:'100%',
        height:120,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:25,
    },
    titleText:{
        fontSize:52,
        fontWeight: 'bold',
        color:'white',
    },
    text:{
        backgroundColor:'white',
        width:'75%',
        margin:'auto',
        borderRadius:35,
    },
    LethalText:{
        fontSize:46,
        fontWeight: 'bold',
        margin:10,
   }
});