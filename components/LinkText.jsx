import { Text, StyleSheet, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";

const LinkText = ({ content, linkTo }) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
        if (linkTo === "/") {
          router.back(linkTo);
        } else {
          router.push(linkTo);
        }
      }}
    >
      <Text style={styles.linkText}>{content}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  linkText: {
    marginTop: 10,
  },
});

export default LinkText;
