import React, { useState } from "react";
import { View, Text, Button, Image } from "react-native";
import * as ImagePicker from "react-native-image-picker"
import { StatusBar } from "expo-status-bar";

type AddAProfilePicProps = {
  navigation: any;
};

const AddAProfilePic: React.FC<AddAProfilePicProps> = (props) => {
  const { navigation } = props;

  const [pic, setPic] = useState<any>(null);

  return (
    <View>
      <Text>Add A Profile Pic</Text>

      <Text>
        Your profile pic is how others will get to know you, so use a face pic.
      </Text>

      <Image source={pic} />

      <Button
        title="Take a picture"
        onPress={async () => {
          const resp = await ImagePicker.launchCamera({ mediaType: "photo" });
          if (resp.didCancel) {
            console.log({code: resp.errorCode, message: resp.errorMessage})
          }
          if (resp.assets) {
            setPic(resp.assets[0].uri);
          }
        }}
      />

      <Button
        title="Open Camera Roll"
        onPress={async () => {
          const resp = await ImagePicker.launchImageLibrary({ mediaType: "photo" });
          if (!resp || resp?.errorCode) {
            throw new Error(`${resp.errorCode}`)
          }
          if (resp.assets) {
            setPic(resp.assets[0].uri);
          }
        }}
      />

      <StatusBar />
    </View>
  );
};

export default AddAProfilePic;
