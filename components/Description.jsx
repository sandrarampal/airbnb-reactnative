import { View, Pressable, Text } from "react-native";
import { useState } from "react";

const Description = ({ text }) => {
  const [lines, setLines] = useState(true);
  return (
    <Pressable
      onPress={() => {
        setLines(!lines);
      }}
    >
      <Text numberOfLines={lines ? 3 : 0} style={{ padding: 20 }}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Description;
