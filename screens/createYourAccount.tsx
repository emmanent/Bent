import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  Button,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import DateTimePicker from "@react-native-community/datetimepicker";
import { StatusBar } from "expo-status-bar";
import styles from "./../globalStylesheet";
import BigBlueBotton from "../components/BigBlueButton";

type CreateYourAccountProps = {
  navigation: any;
};

const CreateYourAccount: React.FC<CreateYourAccountProps> = (props) => {
  const { navigation } = props;

  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const today = new Date(Date.now());
  const [dob, setDob] = useState<Date>(today);

  const formIsComplete =
    phoneNumber.length > 0 && email.includes("@") && dob !== today;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titleText}>Create Your Account</Text>

        <Text style={styles.formLabel}>Phone Number</Text>
        <PhoneInput
          defaultValue={phoneNumber}
          defaultCode="US"
          layout="first"
          textContainerStyle={{ paddingVertical: 0 }}
          onChangeFormattedText={(text) => {
            setPhoneNumber(text);
          }}
        />

        <Text style={styles.formLabel}>Email</Text>
        <TextInput
          style={{
            backgroundColor: "#4f4f4f",
            color: "white",
            padding: 10,
            margin: 10,
          }}
          placeholder="Email address"
          placeholderTextColor="#828282"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <Text style={styles.formLabel}>Date of Birth</Text>
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
      </ScrollView>

      <View style={styles.footer}>
        <BigBlueBotton
          disabled={!formIsComplete}
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
          text="Next"
        />
      </View>

      <StatusBar />
    </View>
  );
};

export default CreateYourAccount;
