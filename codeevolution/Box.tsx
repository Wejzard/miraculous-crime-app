import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';
//kada želimo child generalno da koristimo za većinu tipova, onda varijablu style deklarisemo kao React.ReactNode
type BoxProps = 
{
    children: string,
    style: StyleProp<ViewStyle>
   
}

export default function Box({children, style} : BoxProps){
    return(

    <View style = {[styles.box, style]}>
      
     <Text style = {styles.text}> {children}  </Text>
  
    </View>



   


    )

}



const styles = StyleSheet.create({

  box: {backgroundColor: "white", padding: 20, borderWidth:2},

  text: { fontSize: 24, fontWeight: "bold", textAlign: "center", color: "white" }, 








}

)