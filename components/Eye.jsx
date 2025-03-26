import { View, Pressable, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const Eye = ({ name, setView, view }) => {
  return (
    <Pressable onPress={() => setView(!view)}>
      <Entypo name={name} size={22} color="grey" />
    </Pressable>
  );
};

export default Eye;
