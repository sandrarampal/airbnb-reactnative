import { TextInput, StyleSheet } from "react-native";

const Input = ({
  placeholder,
  onChangeText,
  value,
  style,
  secureTextEntry,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      style={[styles.input, style]}
      secureTextEntry={secureTextEntry}
      autoCapitalize="none"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#FFC6CA",
    marginBottom: 20,
  },
});

export default Input;
