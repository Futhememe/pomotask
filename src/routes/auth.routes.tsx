import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MainScreen from '../screens/Main';
import OnboardScreen from '../screens/OnBoarding';

const Stack = createStackNavigator();

export function AuthRoutes() {

  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [userAccount, setUserAccount] = React.useState<string | null>('');

  const getUserAccount = async () => {
    const name = await AsyncStorage.getItem('@userName');
    setUserAccount(name);
  }

  if(isLoading) {
    return <AppLoading 
      startAsync={getUserAccount}
      onFinish={() => setIsLoading(false)}
      onError={console.warn}
    />
  }

  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
    >
      {userAccount ? (
        <Stack.Screen name="Home" component={MainScreen} />
      ) : (
        <>
          <Stack.Screen name="Onboard" component={OnboardScreen} />
          <Stack.Screen name="Home" component={MainScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}