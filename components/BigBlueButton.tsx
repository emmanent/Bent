import { Pressable, StyleSheet, Text } from "react-native";

type BigBlueBottonProps = {
  onPress: () => void;
  text: string;
  disabled?: boolean;
};

const BigBlueBotton: React.FC<BigBlueBottonProps> = (props) => {
  const { onPress, text, disabled } = props;

  return (
    <Pressable
      style={disabled ? styles.buttonDisabled : styles.button}
      onPress={onPress}
    >
      <Text style={disabled ? styles.textDisabled : styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 20,
    textAlign: "center",
    backgroundColor: "#006ee6",
    borderRadius: 8,
  },
  buttonDisabled: {
    margin: 10,
    padding: 20,
    textAlign: "center",
    backgroundColor: "#003d80",
    borderRadius: 8,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
  textDisabled: {
    textAlign: "center",
    color: "#878787",
  },
});

export default BigBlueBotton;
