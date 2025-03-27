import { Image, View, StyleSheet } from "react-native";

const Avatar = ({ avatar }) => {
  return <Image source={{ uri: avatar }} style={styles.avatar} />;
};

const styles = StyleSheet.create({
  avatar: {
    width: 80,
    height: 90,
    borderRadius: "50%",
  },
});

export default Avatar;
