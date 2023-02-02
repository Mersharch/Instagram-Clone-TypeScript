import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Iconx from './components/Iconx';
import ExploreScreen from './screens/ExploreScreen';
import ReelsScreen from './screens/ReelsScreen';
import ShopScreen from './screens/ShopScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Image } from "react-native";



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

export default function App() {
  

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let src:string = '';

            if (route.name === 'Home') {
              src = focused
                ? require('./assets/images/icons8-home-24.png')
                : require('./assets/images/icons8-home-32.png');
            } else if (route.name === 'Explore'){
              src = focused
                ? require('./assets/images/icons8-search-50-(1).png')
                : require('./assets/images/icons8-search-50.png');
            } else if (route.name === 'Reels'){
              src = focused
                ? require('./assets/images/icons8-instagram-reels-50-(1).png')
                : require('./assets/images/icons8-instagram-reels-50.png');
            } else if (route.name === 'Shop'){
              src = focused
                ? require('./assets/images/icons8-shopping-bag-full-30.png')
                : require('./assets/images/icons8-instagram-shop-24.png');
            }else if (route.name === 'Profile'){
              src = focused
                ? require('./assets/images/prof1.jpg')
                : require('./assets/images/prof1.jpg');
            }

            // // You can return any component that you like here!
            return (route.name === 'Profile' ? (<Image source={src} style={{width:40, height:40, borderRadius:50}} />):(<Iconx src={src} />));
          },
          tabBarStyle: {
            paddingHorizontal: 8,
            backgroundColor: '#0f0f0f',
            borderTopWidth: 0,
            paddingVertical:5
          },
          tabBarShowLabel:false,
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Reels" component={ReelsScreen} />
        <Tab.Screen name="Shop" component={ShopScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    
    
  );
}



const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}


