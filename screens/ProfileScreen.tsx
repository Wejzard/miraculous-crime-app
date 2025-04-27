import { Text , View , TextInput, Button, StyleSheet, Pressable, Image, ImageBackground} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types'; 
import PrimaryButton from '../components/PrimaryButton';
import InputFields from '../components/InputFields';



type Props = NativeStackScreenProps<RootStackParamList, 'ProfileScreen'>;

export default function ProfileScreen( {navigation} : Props ){

    return(
        <ImageBackground   source={require('../assets/images/maroonBackground.jpg')}  style = {styles.backgroundImage} >

    <View style = {styles.container}>

    <Image  source={require('../assets/icons/settings.png')} style = {styles.settings} />
   <View style = {styles.placeholder}>
  

   <Image  source={require('../assets/images/pikachu.png')}  style = {styles.image}  />
    
    </View>

    <Text  style = { styles.text}  >USERNAME</Text>


   






    </View>



    </ImageBackground>










    )

}

const styles = StyleSheet.create({
backgroundImage: {
    flex:1,
    resizeMode: "cover"
} ,


 container: {
  
    justifyContent: "flex-start",
    alignItems: "center",
    
 },

 image: {
    width: 170,
    height: 170,
    borderRadius: 100

 },

 placeholder: {
    
    backgroundColor: "#2E2E2E",
    borderRadius: 100,
    height: 180,
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 3

 },
 settings: {

    width: 40,
    height: 40,
    marginLeft: 280,
    marginTop: 10,


 },

 text: {
   
    fontFamily: "StardosBold",
    color: "white",
    marginTop: 20,
    fontSize: 20


 }











}
)