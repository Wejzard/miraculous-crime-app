import { Button, Text, TextInput, View, StyleSheet, Pressable} from 'react-native';

type PrimaryButtonType = 
{
    placeholder: string,
   
}

export default function PrimaryButton({placeholder} : PrimaryButtonType){
return(
    <View>
   <TextInput placeholder={placeholder} >


   </TextInput>
   </View>
)

}
const styles = StyleSheet.create({
     
    myButton: {color: "#2E2E2E"}

}

)