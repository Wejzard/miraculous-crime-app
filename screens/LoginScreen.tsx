import { Text , View , TextInput, Button, StyleSheet, Pressable, Image, Switch} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types'; 
import PrimaryButton from '../components/PrimaryButton';
import InputFields from '../components/InputFields';
import { useState } from 'react';


type Props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;


export default function LoginScreen({navigation} : Props){
 
    const [showPassword, isPasswordVisible] = useState(false);

   return (
      <View style = {styles.container}>
          
          <Image source={require('../assets/images/BloodSplash.png')} style = {styles.image} />

          <InputFields  placeholder='Enter Username' hidden = {false}/>

          <InputFields  style = {styles.password} placeholder='Enter Password' hidden = {!showPassword}/>
           
           <Switch 

           trackColor={{true: "black", false: "white"}} 

           thumbColor={"gray"}
           
           value = { showPassword }

           onValueChange={ () => isPasswordVisible((previousState) => !previousState) }
           
           style = {styles.switch}
           
           />
              
              <Text style = {styles.textual}>Show Password</Text>
             
         
          <PrimaryButton  style = {styles.button} title = "Login" onPress= { () => navigation.navigate("MainScreen") } />
         
         
          <Pressable onPress={ ( ) => navigation.navigate("RegisterScreen")  } >

              <Text style = {styles.textual}>Not Registered ?</Text>

            </Pressable> 
     
      </View>

   )
}

const styles = StyleSheet.create({
   
    container : { 
         flex: 1,
         backgroundColor: "maroon",
       //  justifyContent: "center",
         alignItems: "center"
    },
    textual: {
        fontFamily: "StardosBold",
         color: "#D3D3D3",
         fontSize: 17,
         marginTop: 0
    },
 
    password:{
        marginTop: 15
    },
    button: {
        marginTop: 20,
        marginBottom: 15
    },
    image: {
        width: 300,
        height: 250
    },
    switch: {
           height: 50,
           width: 50  

    }





})