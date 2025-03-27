import { View, StyleSheet, Pressable } from "react-native";
import {
  OfferPicture,
  OfferTitle,
  Rating,
  Avatar,
} from "../components/index.js";
import { useRouter } from "expo-router";

const Offer = ({ item }) => {
  const router = useRouter();
  return (
    <Pressable
      style={styles.oneOffer}
      onPress={() => {
        router.push({
          pathname: `/room/${item._id}`,
        });
      }}
    >
      <OfferPicture
        url={item.photos[0].url}
        price={item.price}
        stylePhoto={styles.photo}
        stylePrice={styles.priceView}
      />
      <View style={styles.details}>
        <View>
          <OfferTitle title={item.title} />
          <Rating ratingValue={item.ratingValue} reviews={item.reviews} />
        </View>
        <Avatar avatar={item.user.account.photo.url} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  oneOffer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },
  photo: {
    height: 200,
    width: "85%",
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
  details: {
    width: "85%",
    flexDirection: "row",
    paddingRight: 25,
    marginTop: 10,
    justifyContent: "space-between",
    gap: 30,
  },
});

export default Offer;
