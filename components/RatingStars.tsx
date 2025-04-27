import { View, Pressable, Image, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { useState } from 'react';

type RatingProps = {
  style?: StyleProp<TextStyle | ViewStyle>;
}

export default function RatingStars({style} : RatingProps) {
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.container}>
      {[1,2,3,4,5].map((star) => (
        <Pressable key={star} onPress={() => setRating(star)}>
          <Image
            source={
              star <= rating
                ? require('../assets/icons/yellowStar.png')  
                : require('../assets/icons/whiteStar.png')   
            }
            style={styles.star}
          />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    justifyContent: 'center' 
  
  },
  star: { 
    width: 30,
     height: 30,
      marginHorizontal: 5 ,
    
    },
});