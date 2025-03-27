import {
  OfferPicture,
  OfferTitle,
  Rating,
  Avatar,
} from "../components/index.js";
import { View } from "react-native";

const OneOffer = ({ item }) => {
  return (
    <View>
      <OfferPicture url={item.photos[0].url} price={item.price} />
    </View>
  );
};

export default OneOffer;
