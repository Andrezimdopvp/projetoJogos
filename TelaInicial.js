import React, {Component} from 'react';
import {View, Text, Title, Image, Touchableopacity, StyleSheet,} from 'react-native';

export default class TelaInicial extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                <Text style={styles.titleText}>Jogos para jogar com amigos</Text>
                </View>
                <View style={styles.btn}>
                <Touchableopacity style={styles.btnjMine}>
                <Text style={styles.mineText}>
                    Minecraft
                </Text>
                </Touchableopacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        width:'100%',
        height:50,
        justifyContent: 'center',
        alignItems:'center',
        marginTop:25,
    },
    titleText:{
        fontSize:57,
        fontWeight: 'bold',
        color:'black',
    },
    btn:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnjMine:{
        backgroundColor:'green',
        width:'60%',
        height:40,
        margin:15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mineText:{
        fontWeight: 'bold',
        color:'black',
    }
});