import React, { useState } from "react";
import { View, Text, TextInput, Alert, Button } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import DateTimePicker from "@react-native-community/datetimepicker";
import { StatusBar } from "expo-status-bar";

type CreateYourAccountProps = {
  navigation: any;
};

const CreateYourAccount: React.FC<CreateYourAccountProps> = (props) => {
  const { navigation } = props;

  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const today = new Date(Date.now());
  const [dob, setDob] = useState<Date>(today);

  return (
    <View>
      <Text>Create Your Account</Text>

      <Text>Phone Number</Text>
      <PhoneInput
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="first"
        withShadow
        autoFocus
        textContainerStyle={{ paddingVertical: 0 }}
        onChangeFormattedText={(text) => {
          setPhoneNumber(text);
        }}
      />

      <Text>Email</Text>
      <TextInput onChangeText={(text) => setEmail(text)} value={email} />

      <Text>Date of Birth</Text>
      <DateTimePicker
        testID="dateTimePicker"
        timeZoneOffsetInMinutes={0}
        value={dob}
        mode="date"
        is24Hour={true}
        display="default"
        onChange={(_, date) => setDob(date || dob)}
        maximumDate={today}
      />

      <Button
        title="Next"
        onPress={() =>
          Alert.alert(
            "Confirm Your Birthdate",
            `You entered ${dob.toDateString()}. You can only change this once, so be sure it is accurate.`,
            [
              { text: "Go back" },
              {
                text: "Confirm",
                onPress: () => navigation.navigate("CreateYourProfile"),
              },
            ]
          )
        }
      />

      <StatusBar />
    </View>
  );
};

export default CreateYourAccount;
