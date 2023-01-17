import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./../globalStylesheet";
import BigBlueBotton from "../components/BigBlueButton";

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
        <BigBlueBotton
          onPress={() => navigation.navigate("CreateYourAccount")}
          text="Sign Up"
        />
      </View>
      <StatusBar />
    </View>
  );
};

export default Welcome;
