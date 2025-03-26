import { Text, StyleSheet } from "react-native";

const Error = ({ content }) => {
  return <Text style={styles.error}>{content}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default Error;
