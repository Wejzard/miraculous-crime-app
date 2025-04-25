import { Text , View , TextInput, Button, StyleSheet, Pressable, Image} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types'; 
import PrimaryButton from '../components/PrimaryButton';
import InputFields from '../components/InputFields';

type Props = NativeStackScreenProps<RootStackParamList, 'RegisterScreen'>;

export default function RegisterScreen( {navigation} : Props ){
    return (

            <View style = {styles.container}>
                     
                     <Image source={require('../assets/images/BloodSplash.png')} style = {styles.image} />
           
                     <InputFields  placeholder='Enter Username' hidden = {false}/>
                    
                     <InputFields  style = {styles.email} placeholder='Enter Email' hidden = {false}/>

                     <InputFields  style = {styles.password} placeholder='Enter Password' hidden = {true}/>

                     <InputFields  style = {styles.password} placeholder='Repeat Password' hidden = {true}/>
           
                    
                    
                     <PrimaryButton  style = {styles.button} title = "Register" onPress= { () => navigation.navigate("AboutScreen") } />
                    
                    
                     <Pressable onPress = { () => navigation.navigate("LoginScreen") }>
           
                         <Text style = {styles.textual}>Already Registered ?</Text>
           
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
         marginTop: 15
    },
 
    password:{
        marginTop: 15
    },
    button: {
        marginTop: 20
    },
    image: {
        width: 300,
        height: 250
    },
    email: {
        marginTop: 15
    }




})