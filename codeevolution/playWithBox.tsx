

import { Text, View, Image, ImageBackground, ScrollView, Button, Modal , TextInput, StyleSheet} from 'react-native';
//import PrimaryButton from './components/PrimaryButton' 

export default function App() {

 return(
  
  <View style = {styles.container}>

    {/*  <Text style = {[styles.title, styles.secondtitle]}>Be careful , THERE IS SOME TEXT!</Text> */}

     <View style = {[styles.boxBlueLook, styles.box]}> <Text> Lightblue BOX</Text></View>
     <View style = {[styles.boxGreenLook, styles.box]}><Text> Lightgreen BOX</Text></View>

         </View>
         
   
  );
}

const styles = StyleSheet.create ({
  container: {    
    backgroundColor : "maroon",
    flex:1,
    padding: 30,
  //  justifyContent: "center"
},
title: {fontSize:30},
secondtitle: {fontWeight: "bold"},

boxGreenLook: { backgroundColor: "lightgreen"},
boxBlueLook: { backgroundColor: "lightblue"},

box: {width: 150, height: 150, paddingTop: 20 , borderRadius: 30 ,  margin: 5, borderWidth: 10, borderColor: "cyan"}


}

)

