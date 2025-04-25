import {Text, View, StyleSheet, Image} from 'react-native';
//import orangeOne from '../assets/orangeOne.png';
type CardProperties = {
    
  name: string,
  hp: number,
  img: any,
  element: string,
  moves: string,
  weakness: string


}

export default function PokemonCard({name, hp, img, element, moves, weakness} : CardProperties){
    return (


    <View style = {styles.card}>
    
      <View style = {styles.header}>
     
        <Text style = {styles.title}>{name}</Text>
         
         <View style = {styles.hp}>
         
           <Text>HP: {hp}</Text>
     
       
           </View>

           
         </View>

        <Image source = {img} style = {styles.img}/>

        <View style = {styles.element}>

          <Text>{element}</Text>

        </View>

       <Text>Moves:  {moves}
        </Text>
        
       <Text>Weaknesses: {weakness}
       </Text>
  

    </View>






    )
}
const styles = StyleSheet.create({
    card:{
      height: "70%",
      backgroundColor: "white",
      borderRadius: 16,
      borderWidth: 2,
      padding: 16,
      margin: 16,
      elevation: 5,
      
    },

    header: { flexDirection: "row"},

    hp: {position: "relative",
         marginLeft: "25%"},
    
    title: { fontSize: 20, 
             fontWeight: "bold" },
    
    img: {height: 190, 
          width: 170, 
          marginTop: 20, 
          alignSelf: "center"},
    
    element: {alignItems: "center",
      borderWidth: 2, 
      elevation: 10, 
      borderRadius: 15,
      borderColor: "red",
      height: 50,
      width: 100,
      justifyContent: "center", 
      backgroundColor: "white",
      marginTop: 15,
      alignSelf: "center"
      
          }

})