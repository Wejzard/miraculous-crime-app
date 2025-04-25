import { Button, Text, View, StyleSheet, Pressable,  StyleProp, TextStyle, ViewStyle} from 'react-native';

type PrimaryButtonType = 
{
    title: string;
    onPress : ()=> void;
    style?: StyleProp< TextStyle | ViewStyle >;
};

export default function PrimaryButton({title , onPress, style} : PrimaryButtonType ){

  return(
  <Pressable onPress={onPress} style = {[styles.myButton, style]}>

  <Text style = { styles.textual}>{title}</Text>

</Pressable>
)

}
const styles = StyleSheet.create({
     
    myButton: {
        
           height: 60,
           width: 300,
           borderRadius: 40,
           borderWidth: 2,
           borderColor: "#2E2E2E",
           justifyContent: "center",
           elevation: 20,
           
           
    },
    textual: {
      color: "#D3D3D3",
      fontSize: 20,
      alignSelf: "center",
      letterSpacing: 5,
      fontFamily: "StardosBold"
    }

}

)

