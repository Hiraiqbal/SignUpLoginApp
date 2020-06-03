import React from 'react';
import { StyleSheet,View, Text, Button, TouchableWithoutFeedback, TextInput} from 'react-native';
import Colors from '../Constants/Colors';
import Input from '../Components/Input';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Logos from '../Components/Logos';

const SignUpScreen =props=>{
    return(
        <TouchableWithoutFeedback onPress={()=>{
        }}>
        <View style={styles.screen} >
            <Text style={styles.title} >Welcome User </Text> 
            <AntDesign name="pluscircle" size={24} color="green" />
            <Text style={styles.context}>Sign up to join</Text>
            <Text style={styles.context}>Name</Text>
            <Input style={styles.input} placeholder='John Deo'/>
            <Text style={styles.context1}>Email</Text>
            <Input style={styles.input} placeholder='johndeo@mail.com'/>
            <Text style={styles.context}>Password</Text>
            <Input style={styles.input}placeholder='********' />
            <View style={styles.terms}>
            <AntDesign name="checkcircleo" size={24} color="white"/>
            <Text style={styles.context2}>I agree to the terms and services</Text>
            </View>
            <View style={styles.buttonContainer} > 
            <Button  title='Sign Up' onPress ={''} color={Colors.accent}/>
            </View>
            <View style={styles.context3}>
            <Text >Or Sign Up with</Text>
            </View>
            <Logos/>
            <View style={styles.logos}>
            <Text >Have an account?Sign In</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:30,
        marginTop:50,

    },
    title:{
        fontSize:25,
        marginVertical:10,
        fontWeight:"bold",

    },
    pad:{
        paddingVertical:10,
    },
    context:{
        color:Colors.primary,
        fontSize:14,
    },
    context1:{
        color:Colors.primary,
        fontSize:14,
    },
    context2:{
        color:Colors.secondary,
        fontSize:14,
        fontWeight:"bold",
    },
    terms:{
        flexDirection:'row',
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
        justifyContent:'center',
    },
});

export default SignUpScreen;