import 'react-native-gesture-handler';
import React from "react";
import { View,Text ,StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/Home'
import Profile from './components/Profile'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
}


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function Stack1() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}


const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="homee" component={Home} />
      <Drawer.Screen name="profilee" component={Profile} />
    </Drawer.Navigator>
  );
}
export default function App(){
  return(<View style={[styles.container,styles.horizontal]}>
    <NavigationContainer>
    {/* <MyDrawer /> */}
    {/* <Stack1/> */}
    <MyTabs/>
    </NavigationContainer>
    <Text>his</Text></View>)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'column',
      justifyContent: 'space-around',
    
    },
  });