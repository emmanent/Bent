import React from "react";
import { Button, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

type WelcomeProps = {
  navigation: any;
};

const Welcome: React.FC<WelcomeProps> = (props) => {
  const { navigation } = props;

  return (
    <View>
      <Text>Bent</Text>
      <Text>Find your queer community</Text>
      <Button
        title="Sign up"
        onPress={() => navigation.navigate("CreateYourAccount")}
      />
      <StatusBar />
    </View>
  );
};

export default Welcome;
