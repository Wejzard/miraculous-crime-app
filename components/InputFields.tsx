import {TextInput , Pressable, Text, StyleSheet, View, StyleProp, TextStyle, ViewStyle} from 'react-native';

type InputFieldsType = {

     placeholder: string,
     hidden: boolean
     style?: StyleProp<TextStyle | ViewStyle>;
};




export default function InputFields({placeholder, hidden, style}: InputFieldsType){
return(
     
      <TextInput
       placeholder={placeholder}
       style = {[styles.box, style]}
       secureTextEntry={hidden}
       />
   


)

}

 const styles = StyleSheet.create({

    box : {
          backgroundColor: "#D3D3D3",
          borderRadius: 40,
          borderWidth: 2,
          borderColor: "#2E2E2E" ,
          width: 300,
          height: 60,
          fontFamily: "StardosRegular",
          textAlign: "center",
          textAlignVertical: "center",     
          paddingVertical: 12,            
          paddingHorizontal: 10,
          fontSize: 15,
          

    }



})