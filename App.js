// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { StyleSheet } from 'react-native';
// import { Home } from './src/pages/home/Home'

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer style = {styles.container}>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={ Home }
//           options={{
//             title: "Home",
//             headerShadowVisible: true,
//             headerBackVisible: false
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'fff',
//     alignItems: 'center',
//     justifyContent: 'center'
    
//   }

// });


import { useState, useEffect} from 'react'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 

import {Home} from './src/pages/home/Home' 
import {Login} from './src/pages/login/Login' 

export default function App() { 
const [isAuthenticated, setIsAuthenticated] = 
useState(false); 

const _searchUser = async () => { 
const userLogin = await AsyncStorage.getItem('') 
setIsAuthenticated(userLogin !== null) 
 } 

 useEffect(() => { 
 _searchUser(); 
 }, []) 

 return isAuthenticated ? <Home/> : <Login/> 
 } 
