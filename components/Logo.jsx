import logo from "../assets/img/logo-airbnb.png";
import { View, Image, StyleSheet } from "react-native";

const Logo = ({ style }) => {
  return <Image source={logo} style={style} />;
};

const styles = StyleSheet.create({});

export default Logo;
