import React from 'react';
import { StyleSheet,View, Text, Button, TouchableWithoutFeedback, TextInput} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Logos =props=>{
    return(
        <View style={styles.logo}>
                <Entypo name="facebook-with-circle" size={24} color="blue" />
                <Entypo name="google--with-circle" size={24} color="red" />
            </View>
    );
};

const styles = StyleSheet.create({
logo:{
    flexDirection:'row',
    justifyContent:"center",
    marginTop:10,
},
});

export default Logos;