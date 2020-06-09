import React from 'react';
import { StyleSheet,View, Text, Button, TouchableWithoutFeedback, TextInput,Image, Keyboard} from 'react-native';
import Colors from '../Constants/Colors';
import Input from '../Components/Input';
import Logos from'../Components/Logos';
import { Entypo } from '@expo/vector-icons';

const LoginScreen =props=>{
    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
        <View style={styles.screen} >
            <Text style={styles.title} >Welcome Back </Text> 
            <Text style={styles.context}>Sign in to continue</Text>
            <Text style={styles.context1}>Username</Text>
            <Input style={styles.input} placeholder='johndeo@mail.com'/>
            <Text style={styles.context}>Password</Text>
            <Input style={styles.input}placeholder='********' />
            <Text style={styles.context2}>Forget Password?</Text>
            <View style={styles.buttonContainer} > 
            <Button  title='Sign In' onPress ={''} color={Colors.accent}/>
            </View>
            <View style={styles.context3}>
            <Text >Or Sign in with</Text>
            </View>
            <Logos/>
            <View style={styles.FlexProperty}>
            <Text >Don't have an account?Sign Up</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:30,
        marginTop:70,
    },
    title:{
        fontSize:25,
        marginVertical:10,
        fontWeight:"bold",
    },
    context:{
        color:Colors.primary,
        fontSize:14,
    },
    context1:{
        color:Colors.primary,
        fontSize:14,
        marginTop:20,
    },
    context2:{
        color:Colors.secondary,
        fontSize:14,
        fontWeight:"bold",
    },
    buttonContainer:{
        alignItems:"center",
        marginVertical:8,
        width:'100%',
        borderRadius:40,
    },
    context3:{
        flexDirection:'row',
        color:Colors.primary,
        fontSize:14,
        marginTop:20,
        justifyContent:'center',
    },
    FlexProperty:{
        flexDirection:'row',
        justifyContent:"center",
        marginTop:10,
    },
    container: {
        padding:5,
        justifyContent:'flex-end',
      },
    stretch: {
        width: 50,
        height: 50,
      }
});

export default LoginScreen;