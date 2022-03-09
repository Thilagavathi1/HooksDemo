import React, {useState,memo} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View, Text, TouchableOpacity,Button} from 'react-native';

const Child =({number,setNumber}) => {
    console.log('Rendering Child!!')
    return(
        <View style={styles.childView}>
            <Text style={{fontSize:16}}>Child!</Text>
            <Text style={{fontSize:16}}>{number}</Text>
            <TouchableOpacity  style={styles.buttonStyle} onPress={()=> setNumber(number+1)}>
                <Text style={{color:'white',fontSize:14}}>Increment</Text>
            </TouchableOpacity>
        </View>
    )
}
export default memo(Child)





const styles = StyleSheet.create({
    childView:{
        width:250,
        height:250,
        borderColor:'black',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonStyle:{
        flex:0.1,
        borderRadius:5,
        elevation:5,
        backgroundColor:'violet',
        alignItems:'center',
        justifyContent:'center'
      }

})


