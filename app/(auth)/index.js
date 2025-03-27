import {
  View,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import {
  Logo,
  Title,
  Input,
  Submit,
  Error,
  LinkText,
  Eye,
} from "../../components/index.js";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext.js";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [empty, setEmpty] = useState(false);
  const [unauthotized, setUnauthorized] = useState(false);
  const [view, setView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.main}
        contentContainerStyle={styles.container}
      >
        <View>
          <Logo style={styles.logo} />
        </View>
        <Title content="Sign in" />
        <View style={styles.form}>
          <Input
            placeholder="email"
            onChangeText={(text) => {
              setEmail(text);
            }}
            value={email}
            secureTextEntry={false}
          />
          <Input
            placeholder="password"
            onChangeText={(text) => {
              setPassword(text);
            }}
            value={password}
            secureTextEntry={view ? false : true}
          />

          <View style={styles.eyeView}>
            <Eye
              name={view ? "eye-with-line" : "eye"}
              setView={setView}
              view={view}
            />
          </View>
        </View>
        <View style={styles.submitView}>
          {empty && <Error content="Please fill all fields" />}
          {unauthotized && <Error content="Email or password incorrect" />}
          <View style={styles.submitButton}>
            <Submit
              content="Sign in"
              disabled={isLoading ? true : false}
              onPress={async () => {
                setIsLoading(true);
                try {
                  const response = await axios.post(
                    "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
                    {
                      email: email,
                      password: password,
                    }
                  );

                  login(response.data.token, response.data.id);
                  if (response.status === 200) {
                    alert("connexion successful");
                  }
                  setIsLoading(false);
                } catch (error) {
                  console.log(error.response.data.error);
                  if (!password || !email) {
                    setEmpty(true);
                  }
                  if (error.response.data.error === "Unauthorized") {
                    setUnauthorized(true);
                  }
                  setIsLoading(false);
                }
              }}
            />
            {isLoading && <ActivityIndicator />}
          </View>
          <LinkText content="No account ? Register" linkTo="/signup" />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  main: {
    width: "100%",
  },

  form: {
    width: "100%",
    alignItems: "center",
    marginVertical: 100,
  },
  submitView: {
    alignItems: "center",
  },
  eyeView: {
    position: "absolute",
    bottom: 25,
    right: 55,
  },

  submitButton: {
    flexDirection: "row",
    gap: 10,
  },

  logo: {
    width: 100,
    height: 130,
    resizeMode: "contain",
    marginTop: 40,
  },
});
