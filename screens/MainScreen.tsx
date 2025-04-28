import { Text , View , TextInput, Button, StyleSheet, Pressable, Image, FlatList, ImageBackground} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types'; 
import DATA from '../DATA.json';
import CaseModal from '../components/CaseModal';
import imageMap from '../ImageMap';

type Props = NativeStackScreenProps<RootStackParamList, 'MainScreen'>;

type ItemProps = {

    image : any;
    title: string;
}

const Item = ({image, title}: ItemProps) => (
    <View  style = {styles.container}>
        <View style = {styles.imageContainer}>
      <ImageBackground source={image} style={ styles.image} />
      </View>
      <Text style = {styles.title}>{title}</Text>
      <CaseModal/>
    </View>
  ); 

export default function MainScreen( {navigation} : Props){

    return(

        <FlatList
        
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item image={imageMap[item.image]} title={item.title} />
        )}
        
      />

    )


}

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "maroon"

    },
    image: {
        height: 280,
        width: 280,
        borderColor: "black",
        resizeMode: "cover",
        borderRadius: 40
    },
    title: {
        fontFamily: "StardosRegular",
        fontSize: 40,
        color: "white",
        marginTop: 10,
        marginBottom: 10
    },
    imageContainer: {
         height: 310,
         width: 350,
         justifyContent: "center",
         alignItems: "center", 
         borderRadius: 40,
         marginTop: 15,
         borderColor: "#2F2F2F",
         borderWidth: 3

    }





})