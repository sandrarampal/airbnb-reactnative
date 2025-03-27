import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Submit } from "../../components";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Profile = () => {
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <Submit content="Logout" onPress={logout} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
