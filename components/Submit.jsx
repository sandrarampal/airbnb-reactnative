import { Text, Pressable, StyleSheet } from "react-native";

const Submit = ({ content, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text>{content}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: "red",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 30,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
});

export default Submit;
