import { View, Text, StyleSheet } from "react-native";

const OfferTitle = ({ title }) => {
  return (
    <View style={styles.titleView}>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleView: {
    width: 230,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
  },
});

export default OfferTitle;
