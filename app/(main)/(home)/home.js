import { View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Logo } from "../../../components/index.js";
import Offer from "../../../components/Offer.jsx";
import { useContext } from "react";
import OffersContext from "../../../context/OffersContext.js";

const Home = () => {
  const { data } = useContext(OffersContext);

  const listSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerLogo}>
        <Logo style={styles.logo} />
      </View>
      <View style={styles.offers}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <Offer item={item} />;
          }}
          keyExtractor={(item) => {
            return String(item._id);
          }}
          ItemSeparatorComponent={listSeparator}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
  },

  headerLogo: {
    width: "100%",
    alignItems: "center",
  },

  logo: {
    height: 50,
    width: 40,
    resizeMode: "contain",
    paddingTop: 10,
  },

  offers: {
    width: "100%",
  },

  separator: {
    height: 1,
    width: "85%",
    backgroundColor: "#CCC",
    marginLeft: 28,
  },
});

export default Home;
