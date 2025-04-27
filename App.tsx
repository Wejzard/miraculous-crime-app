import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import AboutScreen from './screens/AboutScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import type { RootStackParamList } from '../miraculous-crime/types'; 
import { useFonts } from 'expo-font'; 


const Stack = createNativeStackNavigator<RootStackParamList>();



export default function App() {
  const [fontsLoaded] = useFonts({
    StardosRegular: require('./assets/fonts/StardosStencil-Regular.ttf'),
    StardosBold: require('./assets/fonts/StardosStencil-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // or a splash/loading screen
  }
  return (
    <NavigationContainer >
      
      <Stack.Navigator initialRouteName = "LoginScreen">

          <Stack.Screen name = "LoginScreen" component={LoginScreen}/>
          <Stack.Screen name = "RegisterScreen" component = {RegisterScreen} />
          <Stack.Screen name = "AboutScreen" component={AboutScreen}/>
          <Stack.Screen name = "ProfileScreen" component={ProfileScreen}/>

      </Stack.Navigator>
      
      
      </NavigationContainer>
  );
}