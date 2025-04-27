import { Button, Text, TextInput, View, StyleSheet, Pressable, Modal, FlatList, Image, ScrollView} from 'react-native';
import { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import RatingStars from './RatingStars';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    description: `In this case what is actually interesting is that killer is never found but everybody suspects that the killer 
is actually Clown from the Town who is also a former F3 driver. Beside all of that family neighbour thinks that the Clown doesn't
have anything with her murder because he was her secret lover who loved her.In this case what is actually interesting is that killer is never found but everybody suspects that the killer 
is actually Clown from the Town who is also a former F3 driver. Beside all of that family neighbour thinks that the Clown doesn't
have anything with her murder because he was her secret lover who loved her.In this case what is actually interesting is that killer is never found but everybody suspects that the killer 
is actually Clown from the Town who is also a former F3 driver. Beside all of that family neighbour thinks that the Clown doesn't
have anything with her murder because he was her secret lover who loved her.`,
    image: require('../assets/images/orangeOne.png'),
  },
 
];
type ItemProps = {
  
  image: any;
  title: string;
  description: string; 
  
};

const Item = ({image, title, description}: ItemProps) => (
  <View style = {styles.dataContainer} >
    
  <View style = {styles.imageContainer}>

    <Image  source = {image} style = {styles.image} />

    </View>

    <Text  style = {styles.title}>{title}</Text>
  
  <View style = {styles.descriptionContainer}>
   <ScrollView >

    <Text style = {styles.description} >{description}</Text>
    
    </ScrollView>

    </View>
  
  </View>
);


export default function CaseModal(){
   
    const [modalVisible, SetModalVisible] = useState(false);

    return(
     <View style = {styles.buttonContainer}>
     <Pressable onPress = { ()=> SetModalVisible(true) }  style = {styles.button}  >

      <Text style = {styles.tekstual}> See more... </Text>
      
     </Pressable>
     
     
      <Modal visible = {modalVisible} >
    <View  style = {styles.modalContainer}>
      <FlatList  data={DATA}  
       
        renderItem={({item}) => <Item 
        image ={item.image}
        title={item.title}
        description = {item.description}
         />}
        keyExtractor={item => item.id}
         />



        
        <RatingStars style = { styles.rating  }/>
        
        <View style= {styles.VoteContainer} >
        <Text style = {styles.title}> Vote </Text>
        </View>

        <PrimaryButton title = 'Close Modal' onPress={ ()=> SetModalVisible(false)} style = {styles.closeModalButton} />

        </View>

      </Modal>
      
      </View>
      




    )


}

const styles = StyleSheet.create({

  button: {
   
    height: 40,
    width: 200,
    backgroundColor: "black",
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",


  },
  tekstual: {
    
    color: "white"

  },
  buttonContainer: {
    alignItems: "center"
  },

  image: {
    width: 250,
    height: 250,
    borderRadius: 40
  },

  dataContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
   
  

  },
  modalContainer: {
    backgroundColor: "maroon",
    flex: 1

  },
  closeModalButton: {
    alignSelf: "center",
    marginBottom: 30
  },
  imageContainer: {
    width: 350,
    height: 260,
    backgroundColor: "#2F2F2F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    marginTop: 10
  },
  title: {
    
    fontFamily: "StardosRegular",
    color: "white",
    fontSize: 30,
    marginTop: 10
  },
  description: {
   
    fontFamily: "StardosRegular",
    color: "white",
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,

  },
  descriptionContainer: {
    height: 250,
    width: 350,
    borderWidth: 5,
    borderColor: "#2F2F2F",
    borderRadius: 30
  },

  rating: {
     marginTop: 10
    
  },
  VoteContainer:{
    alignSelf: "center"
  }
  






})
 








