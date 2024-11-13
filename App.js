import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CheckoutSelectLocation from './Screens/CheckoutSelectLocation';
import Screen_01 from './Screens/Screen_01'
import Screen_02 from './Screens/Screen_02'
import FoodSearchResults from './Screens/FoodSearchResults'
import RestaurantDetailsScreen from './Screens/RestaurantDetailsScreen'
import FoodDetails from './Screens/FoodDetails'
import CheckoutSelectOffers from './Screens/CheckoutSelectOffers'
import OrderReview from './Screens/OrderReview'
import OrderTrackingScreen from './Screens/OrderTrackingScreen'
import AuthScreen from './Screens/AuthScreen'
// import Screen05 from './Screens/Screen05'
const Stack = createNativeStackNavigator()
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='AuthScreen'
        headerShow={false}
      >
        <Stack.Screen name="Screen_01" component={Screen_01}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="Screen_02" component={Screen_02}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="FoodSearchResults" component={FoodSearchResults}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="RestaurantDetailsScreen" component={RestaurantDetailsScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="FoodDetails" component={FoodDetails}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="CheckoutSelectOffers" component={CheckoutSelectOffers}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="CheckoutSelectLocation" component={CheckoutSelectLocation}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="OrderReview" component={OrderReview}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="OrderTrackingScreen" component={OrderTrackingScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="AuthScreen" component={AuthScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}