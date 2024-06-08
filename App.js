import React,{ Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { creacteStackContainer, createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 
import TelaInicial from './screens/TelaInicial';
import TelaMinecraft from './screens/minecraft';
import TelaRoblox from './screens/roblox';
import TelaLethalCompany from './screens/lethalcompany';
import TelaDauntless from './screens/dauntless';

  const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="TelaMinecraft" component={TelaMinecraft} />
        <Stack.Screen name="TelaRoblox" component={TelaRoblox} />
        <Stack.Screen name="TelaLethalCompany" component={TelaLethalCompany} />
        <Stack.Screen name="TelaDauntless" component={TelaDauntless} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;