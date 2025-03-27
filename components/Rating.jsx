import { View, Text, StyleSheet } from "react-native";

const Rating = ({ ratingValue, reviews }) => {
  const ratingStar = (ratingValue) => {
    let rating = "";

    for (let i = 1; i <= 5; i++) {
      if (ratingValue >= i) {
        rating += "★";
      }

      if (ratingValue < i && rating.length < 5) {
        rating += "☆";
      }
    }

    return rating;
  };
  return (
    <View style={styles.ratingMain}>
      <View>
        <Text style={styles.stars}>{ratingStar(ratingValue)}</Text>
      </View>
      <Text>{reviews} reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingMain: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },

  stars: {
    color: "orange",
    fontSize: 20,
  },
});

export default Rating;
