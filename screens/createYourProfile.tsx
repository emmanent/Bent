import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

type CreateYourProfileProps = {
  navigation: any;
};

const CreateYourProfile: React.FC<CreateYourProfileProps> = (props) => {
    const {navigation} = props;

  const [name, setName] = useState("");

  return (
    <View>
      <Text>Create Your Profile</Text>

      <Text>Name</Text>
      <TextInput onChangeText={(text) => setName(text)} value={name} />

      <Text>Pronouns</Text>
      {/* TODO: how to provide a list for the user */}

      <Text>Location</Text>
      {/* TODO: how to procure user location information */}

      <Button
        title="Next"
        onPress={() =>
            navigation.navigate("AddAProfilePic")
        }
      />

      <StatusBar />
    </View>
  );
};

export default CreateYourProfile;
