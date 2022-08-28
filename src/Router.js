import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ClickHere from './authentication/ClickHere';
import UserLoginForm from './authentication/UserLoginForm';
import UserRegistration from './authentication/UserRegistration';
import RecruiterLogin from './authentication/RecruiterLogin';
import RecruiterRegistration from './authentication/RecruiterRegistration';
import HomeScreen from './screens/HomeScreen';


const Authentication = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ClickHere'>
      <Stack.Screen name="ClickHere" component={ClickHere} options={{ headerShown: false}}/>
      <Stack.Screen name="UserLoginForm" component={UserLoginForm} options={{ headerShown: false}}/>
      <Stack.Screen name="UserRegistration" component={UserRegistration} options={{ headerShown: false}} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false}} />

     <Stack.Screen name="RecruiterLogin" component={RecruiterLogin} options={{ headerShown: false}}/>
      <Stack.Screen name="RecruiterRegistration" component={RecruiterRegistration} options={{ headerShown: false}} />


    </Stack.Navigator>

    </NavigationContainer>
  )
}


export default Authentication


const styles = StyleSheet.create({})