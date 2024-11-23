import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
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
import { AuthProvider } from './Screens/AuthContext';
import * as React from 'react';
// import Screen05 from './Screens/Screen05'
const Stack = createNativeStackNavigator()
const CartIcon = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('OrderReview')}>
    <Image
      source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bde6bc8f651cf61321ec0099e2cf4be63eebb6c22290de91d939adee01da3550?placeholderIfAbsent=true&apiKey=aa16a4caa833425da6acc935c73d7b63' }}
      style={{ width: 24, height: 24, marginRight: 15 }}
      resizeMode="contain"
    />
  </TouchableOpacity>
);
export default function App() {

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='AuthScreen'
          screenOptions={({ navigation, route }) => ({

            headerRight: () => route.name !== 'AuthScreen' && <CartIcon navigation={navigation} />
            , headerTitle: '', // Ẩn tiêu đề
            headerBackTitleVisible: false,
          })}

        >
          <Stack.Screen name="Screen_01" component={Screen_01}
            options={{ headerBackTitleVisible: false, }}
          ></Stack.Screen>
          <Stack.Screen name="Screen_02" component={Screen_02}

          ></Stack.Screen>
          <Stack.Screen name="FoodSearchResults" component={FoodSearchResults}

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
    </AuthProvider >
  );
}