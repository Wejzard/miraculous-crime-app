import { Text , View , TextInput, Button, StyleSheet} from 'react-native'


export default function AboutScreen(){
   return(
      <View>
         
         <Text style = {styles.text}>  This is ABOUT US screen!  </Text>

      </View>

   )
}

const styles = StyleSheet.create({
   
    text : { 
         fontSize: 20,
         alignSelf: "center",
         justifyContent: "center",
         fontFamily: "StardosRegular"
    }





})