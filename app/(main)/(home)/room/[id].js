import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Logo,
  BackArrow,
  OfferPicture,
  OfferTitle,
  Rating,
  Avatar,
  Description,
} from "../../../../components/index.js";
import { useRouter } from "expo-router";
import OneOffer from "../../../../components/OneOffer.jsx";

const Room = () => {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/" + id
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <SafeAreaView style={styles.container2}>
      <ActivityIndicator />
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Pressable
            onPress={() => {
              router.back("/");
            }}
          >
            <BackArrow />
          </Pressable>
          <View style={styles.headerLogo}>
            <Logo style={styles.logo} />
          </View>
        </View>
        <View style={styles.offers}>
          <OfferPicture
            url={data.photos[0].url}
            price={data.price}
            stylePhoto={styles.photo}
            stylePrice={styles.priceView}
          />
          <View style={styles.details}>
            <View>
              <OfferTitle title={data.title} />
              <Rating
                ratingValue={data.ratingValue}
                reviews={data.reviews}
                stylePhoto={styles.photo}
              />
            </View>
            <Avatar avatar={data.user.account.photo.url} />
          </View>
          <Description text={data.description} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 77,
    paddingHorizontal: 10,
  },
  headerLogo: {
    alignItems: "center",
    width: "50%",
  },

  logo: {
    height: 50,
    width: 40,
    resizeMode: "contain",
    paddingTop: 10,
  },
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
  },
  offers: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  details: {
    width: "90%",
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },

  photo: {
    height: 300,
    width: "100%",
  },
  priceView: {
    backgroundColor: "black",
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: "absolute",
    bottom: 10,
    left: 0,
    width: 80,
    alignItems: "center",
  },
});

export default Room;
