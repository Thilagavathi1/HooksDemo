import React, {useState,memo} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View, Text, TouchableOpacity,Button} from 'react-native';

const Child =(props) => {
    console.log('Rendering Child!!')
    return(
        <View style={styles.childView}>
            <Text style={{fontSize:16}}>Child!</Text>
        </View>
    )
}
export default memo(Child)





const styles = StyleSheet.create({
    childView:{
        width:150,
        height:150,
        borderColor:'black',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    }

})


