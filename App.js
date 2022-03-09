/* eslint-disable eslint-comments/no-unused-disable */
import React, {useState,useMemo,useCallback} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View, Text, TouchableOpacity,} from 'react-native';
import Child from'./Child';

const arr = [1, 5, 9, 5, 55, 24, 53, 12, 456, 4556];
function App() {
  const [parentComponentState,setParentComponentState] = useState(0);
  const [childComponentState, setChildComponentState] = useState(0);



  const word = "helloworld"   

  const incrementChildState = (number) => setChildComponentState(number);

  const memoizedCallback = useCallback(
    (state) => incrementChildState(state),
    []
  );



  const computeLetterCount = () => {  
    console.log("from memoizedValue");

 
    let i = 0;  

    while (i < 200000000) i++  

    console.log(i)  

    return word.length;  

};   

  const memoizedValue = useMemo(() => computeLetterCount(), []);

  return (
      <View style={styles.container}>
        <View style={styles.parentView}>
          <View style={{flex:0.1}}>
            <Text style={styles.parentFontStyle}>Count from Parent : +{parentComponentState} </Text>
          </View>

          <TouchableOpacity  style={styles.buttonStyle} onPress={()=>setParentComponentState(parentComponentState + 1)}>
            <Text style={{color:'white',fontSize:14}}>Increment</Text>
          </TouchableOpacity>
      
            
        </View>
        <View style={styles.childView}>
          <Child number ={childComponentState} setNumber={memoizedCallback}></Child>
        </View>
        <Text>{memoizedValue}</Text>
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
