import { View, Image, StyleSheet, Text } from "react-native";

const OfferPicture = ({ url, price, stylePhoto, stylePrice }) => {
  return (
    <View style={styles.photoView}>
      <Image source={{ uri: url }} style={stylePhoto} />
      <View style={stylePrice}>
        <Text style={styles.price}>{price} €</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  photo: {
    height: 200,
    width: "85%",
  },
  photoView: {
    width: "100%",
    alignItems: "center",
  },
  priceView: {
    backgroundColor: "black",
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: "absolute",
    bottom: 10,
    left: 30,
    width: 80,
    alignItems: "center",
  },
  price: {
    color: "white",
    fontSize: 18,
  },
});

export default OfferPicture;
