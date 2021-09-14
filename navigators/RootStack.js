import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./../src/Login";
import Welcome from "./../src/Welcome";


const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          
            headerStyle: {
            backgroundColor: "transparent"
          },
          headerTintColor: "#1F2937",
          headerTransparent: true,
          headerTitle: '',
          headerLeftContainerStyle: {
              paddingLeft: 20
          }
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
