import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddAProfilePic from "./screens/addAProfilePic";
import CreateYourAccount from "./screens/createYourAccount";
import CreateYourProfile from "./screens/createYourProfile";
import TurnOnNotifications from "./screens/turnOnNotifications";
import Welcome from "./screens/welcome";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="CreateYourAccount"
          component={CreateYourAccount}
          options={{ title: "Create Your Account" }}
        />
        <Stack.Screen
          name="CreateYourProfile"
          component={CreateYourProfile}
          options={{ title: "Create Your Profile" }}
        />
        <Stack.Screen
          name="AddAProfilePic"
          component={AddAProfilePic}
          options={{ title: "Add A Profile Pic" }}
        />
        <Stack.Screen
          name="TurnOnNotifications"
          component={TurnOnNotifications}
          options={{ title: "Turn On Notifications" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
