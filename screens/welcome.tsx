import React from "react";
import { Button, Pressable, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./../globalStylesheet";

type WelcomeProps = {
  navigation: any;
};

const Welcome: React.FC<WelcomeProps> = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titleText}>Bent</Text>
        <Text style={styles.bodyText}>Find your queer community</Text>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable
          style={styles.bigBluebutton}
          onPress={() => navigation.navigate("CreateYourAccount")}
        >
          <Text style={styles.bigBlueButtonText}>Sign Up</Text>
        </Pressable>
      </View>
      <StatusBar />
    </View>
  );
};

export default Welcome;
