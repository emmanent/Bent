import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateYourAccount from "./screens/createYourAccount";
import Welcome from "./screens/welcome";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="CreateYourAccount" component={CreateYourAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
