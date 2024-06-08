import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class TelaInicial extends Component{
    constructor(){
        super();
        this.state={
            
        }
    }
    render(){
        const { navigation } = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>
                        Jogos Para Jogar Com Os Amigos
                    </Text>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.btnGameM} 
                    onPress={() => navigation.navigate('TelaMinecraft')}>
                        <Text style={styles.mineText}>
                            Minecraft
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnGameR}
                    onPress={() => navigation.navigate('TelaRoblox')}>
                        <Text style={styles.robloxText}>
                            Roblox
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnGameL}
                    onPress={() => navigation.navigate('TelaLethalCompany')}>
                        <Text style={styles.lethalText}>
                            Lethal Company
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnGameD}
                    onPress={() => navigation.navigate('TelaDauntless')}>
                        <Text style={styles.daunText}>
                            Dauntless
                        </Text>
                    </TouchableOpacity>
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
        backgroundColor:'red',
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
    btn:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:50,
        borderStyle:'solid',
    },
    btnGameM:{
        backgroundColor:'green',
        width:'80%',
        height:150,
        margin:15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50,
    },
    btnGameR:{
        backgroundColor:'gray',
        width:'80%',
        height:150,
        margin:15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50,
    },
    btnGameL:{
        backgroundColor:'darkred',
        width:'80%',
        height:150,
        margin:15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50,
    },
    btnGameD:{
        backgroundColor:'lightblue',
        width:'80%',
        height:150,
        margin:15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50,
    },
    mineText:{
        fontWeight: 'bold',
        fontSize:140,
    },
    robloxText:{
        fontWeight: 'bold',
        fontSize:140,
    },
    lethalText:{
        fontWeight: 'bold',
        fontSize:120,
    },
    daunText:{
        fontWeight: 'bold',
        fontSize:140,
    },
});