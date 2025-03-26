import logo from "../assets/img/logo-airbnb.png";
import { View, Image, StyleSheet } from "react-native";

const Logo = () => {
  return <Image source={logo} style={styles.logo} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 130,
    resizeMode: "contain",
    marginTop: 40,
  },
});

export default Logo;
