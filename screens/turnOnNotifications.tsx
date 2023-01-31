import React from "react";
import { View, Text, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";

type AddAProfilePicProps = {
  navigation: any;
};

const AddAProfilePic: React.FC<AddAProfilePicProps> = (props) => {
  const { navigation } = props;

  return (
    <View>
      <Text>Turn On Notifications</Text>

      <Text>
        Bent is a community messaging app. For the best experience, turn on notifications so you don't miss messages.
      </Text>

      <Button
        title="Turn On Notifications"
        onPress={() => Alert.alert(
            "Bent would like to send you notifications",
            "Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.",
            // TODO: the Alert buttons should configure notification settings
            [
              { text: "Don't Allow" },
              {
                text: "Allow",
              },
            ]
          )}
      />

      <Button
        title="Skip for now"
      />

      <StatusBar />
    </View>
  );
};

export default AddAProfilePic;
