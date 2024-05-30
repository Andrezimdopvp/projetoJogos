import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Image,
} from 'react-native';

const imgBackground = require('../assets/minecraft.jpg');

export default class TelaMinecraft extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={imgBackground} resizeMode="cover" style={styles.image}>
                    <View style={styles.box}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>
                        Minecraft
                            </Text>
                        </View>
                    <View style={styles.text}>
                        <Text style={styles.MineText}>
                            Minecraft é um jogo multiplayer quadrado em que você pode sobreviver ou se divertir no criativo (contando com explodir TNT), construindo, minerando, craftando, etc. Jogue agora este jogo!
                        </Text>
                        <Text style={styles.MineText}>
                            Preço: R$148,25
                        </Text>
                        <Text style={styles.MineText}>
                            Link para baixar: https://www.minecraft.net/pt-pt
                        </Text>
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
        width:'100%'
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
   MineText:{
        fontSize:46,
        fontWeight: 'bold',
        margin:10,
   }
});