import React, { useState } from "react";
import { View, Text, TextInput, Alert, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

type AddAProfilePicProps = {
  navigation: any;
};

const AddAProfilePic: React.FC<AddAProfilePicProps> = (props) => {
    const {navigation} = props;

  return (
    <View>
      <Text>Add A Profile Pic</Text>


      <StatusBar />
    </View>
  );
};

export default AddAProfilePic;
