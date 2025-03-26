import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Submit } from "../../components";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Profile = () => {
  const data = useContext(AuthContext);
  const setToken = data.setToken;
  const setUserId = data.setUserId;

  return (
    <SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <Submit
          content="Logout"
          onPress={() => {
            setToken(null);
            setUserId(null);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
