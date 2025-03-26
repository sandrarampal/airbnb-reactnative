import { View, StyleSheet, SafeAreaView } from "react-native";
import {
  Logo,
  Title,
  Input,
  Submit,
  Error,
  LinkText,
} from "../components/index.js";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [empty, setEmpty] = useState(false);
  const [unauthotized, setUnauthorized] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.main}
        contentContainerStyle={styles.container}
      >
        <View>
          <Logo />
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
            secureTextEntry={true}
          />
        </View>
        <View style={styles.submitView}>
          {empty && <Error content="Please fill all fields" />}
          {unauthotized && <Error content="Email or password incorrect" />}
          <Submit
            content="Sign in"
            onPress={async () => {
              try {
                const response = await axios.post(
                  "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
                  {
                    email: email,
                    password: password,
                  }
                );

                console.log(response.data.token);
                console.log(response.data.id);
                if (response.status === 200) {
                  alert("connexion successful");
                }
              } catch (error) {
                console.log(error.response.data.error);
                if (!password || !email) {
                  setEmpty(true);
                }
                if (error.response.data.error === "Unauthorized") {
                  setUnauthorized(true);
                }
              }
            }}
          />
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
});
