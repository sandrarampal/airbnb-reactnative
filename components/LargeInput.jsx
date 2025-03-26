import { TextInput, StyleSheet } from "react-native";

const LargeInput = ({
  placeholder,
  onChangeText,
  value,
  style,
  multiline,
  numberOfLine,
  maxlength,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      style={[styles.input, style]}
      autoCapitalize="none"
      multiline={multiline}
      numberOfLine={numberOfLine}
      maxlength={maxlength}
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

export default LargeInput;
