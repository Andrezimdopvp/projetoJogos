import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Image,
} from 'react-native';

const imgBackground = require('../assets/dauntless.jpg');

export default class TelaDauntless extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={imgBackground} resizeMode="cover" style={styles.image}>
                    <View style={styles.box}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>
                            Dauntless
                            </Text>
                        </View>
                    <View style={styles.text}>
                        <Text style={styles.DauntlessText}>
                            Dauntless é um jogo multiplataforma onde você tem que matar monstros gigantes em ilhas, além de fazer armas, missões, desafios, etc. Baixe esse jogo, é incrível!
                        </Text>
                        <Text style={styles.DauntlessText}>
                            Grátis
                        </Text>
                        <Text style={styles.DauntlessText}>
                            Link para baixar: https://playdauntless.com/pt_BR/landing/
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
    DauntlessText:{
        fontSize:46,
        fontWeight: 'bold',
        margin:10,
   }
});