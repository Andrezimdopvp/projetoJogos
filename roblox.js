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

const imgBackground = require('../assets/roblox.jpg');

const meuLink = () =>{
    Linking.openURL('https://www.roblox.com/pt');
}
export default class TelaRoblox extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={imgBackground} resizeMode="cover" style={styles.image}>
                    <View style={styles.box}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>
                        Roblox
                            </Text>
                        </View>
                    <View style={styles.text}>
                        <Text style={styles.RobloxText}>
                            Roblox não é exatamente um jogo, e sim uma plataforma de jogos parecido com lego e pode criar um mapa, como a steam, podendo jogar mapas, fazendo amigos, etc. Então baixe agora!
                        </Text>
                        <Text style={styles.RobloxText}>
                            Grátis
                        </Text>
                        <TouchableOpacity style={styles.RobloxText}
                        onPress={meuLink}>
                            Link para baixar: https://www.roblox.com/pt
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
   RobloxText:{
        fontSize:46,
        fontWeight: 'bold',
        margin:10,
   }
});