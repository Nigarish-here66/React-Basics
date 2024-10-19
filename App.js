import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Components for screens
function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Icon name="search" size={30} color="#900" />
      </View>
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
}

function AboutScreen() {
  return <View><Text>About Us</Text></View>;
}

function DetailsScreen() {
  return <View><Text>Details Page</Text></View>;
}

function NotificationsScreen() {
  return <View><Text>Notifications</Text></View>;
}

// Stack navigator for screens
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

// Tab navigator integrating HomeStack and other screens
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomeStack">
        <Tab.Screen name="HomeStack" component={HomeStack} options={{ title: 'Home' }} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles for UI components
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  box1: {
    borderColor: 'yellow',
    width: 100,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    borderColor: 'black',
    width: 100,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
  },
  box3: {
    borderColor: 'purple',
    width: 100,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
  },
});
