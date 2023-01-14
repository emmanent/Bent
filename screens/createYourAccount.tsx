import React from "react";
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

type CreateYourAccountProps = {
  navigation: any;
}

const CreateYourAccount: React.FC<CreateYourAccountProps> = (props) => {
    return (
        <View>
          <Text>Create Your Account</Text>
          <StatusBar/>
        </View>
      );
}

export default CreateYourAccount;