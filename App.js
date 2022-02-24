/* eslint-disable eslint-comments/no-unused-disable */
import React, {useState,useMemo} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View, Text, TouchableOpacity,} from 'react-native';
import Child from'./Child';
function App() {
  const [counter,setCounter] = useState(0);
  
  return (
      <View style={styles.container}>
        <View style={styles.parentView}>
          <View style={{flex:0.1}}>
            <Text style={styles.parentFontStyle}>Hello from Parent : +{counter} </Text>
          </View>

          <TouchableOpacity  style={styles.buttonStyle} onPress={()=>{setCounter(counter+1)}}>
            <Text style={{color:'white',fontSize:14}}>Counter</Text>
          </TouchableOpacity>
      
            
        </View>
        <View style={styles.childView}>
          <Child ></Child>
        </View>
      </View>
  );


  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  parentView: {
    flex: 0.5,
  },
  parentFontStyle: {
    fontSize: 16,
    fontWeight:'bold'
  },
  buttonStyle:{
    flex:0.1,
    borderRadius:5,
    elevation:5,
    backgroundColor:'#24a0ed',
    alignItems:'center',
    justifyContent:'center'
  }
});

export default App;
