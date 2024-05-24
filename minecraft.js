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
            <View style={StyleSheet.container}>
                <ImageBackground source={imgBackground} resizeMode="cover" style={styles.image}>
                <View style={styles.box}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>
                        Minecraft
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
});