import { View, StyleSheet, SafeAreaView } from "react-native";
import {
  Logo,
  Title,
  Input,
  Submit,
  Error,
  LinkText,
  LargeInput,
} from "../components/index.js";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [empty, setEmpty] = useState(false);
  const [exist, setExist] = useState(false);
  const [usernameExist, setUsernameExist] = useState(false);
  const [diffPasswords, setDiffPasswords] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.main}
        contentContainerStyle={styles.container}
      >
        <View>
          <Logo />
        </View>
        <Title content="Sign up" />
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
            placeholder="username"
            onChangeText={(text) => {
              setUsername(text);
            }}
            value={username}
            secureTextEntry={false}
          />

          <LargeInput
            placeholder="Describe yourself in a few words"
            onChangeText={(text) => {
              setDescription(text);
            }}
            value={description}
            style={styles.inputBox}
            multiline={true}
            numberOfLine={10}
            maxLength={250}
          />
          <Input
            placeholder="password"
            onChangeText={(text) => {
              setPassword(text);
            }}
            value={password}
            secureTextEntry={true}
          />
          <Input
            placeholder="confirm password"
            onChangeText={(text) => {
              setConfirmPassword(text);
            }}
            value={confirmPassword}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.submitView}>
          {empty && <Error content="Please fill all fields" />}
          {exist && <Error content="Email already exists" />}
          {usernameExist && <Error content="Username already exists" />}

          {diffPasswords && <Error content="Passwords don't match" />}
          <Submit
            content="Sign in"
            onPress={async () => {
              try {
                const response = await axios.post(
                  "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
                  {
                    email: email,
                    username: username,
                    description: description,
                    password: password,
                  }
                );

                console.log(response.data.token);
                console.log(response.data.id);
                if (response.status === 200) {
                  alert("Account created");
                }
              } catch (error) {
                console.log(error.response.data.error);
                if (
                  !password ||
                  !email ||
                  !username ||
                  !description ||
                  !confirmPassword
                ) {
                  setEmpty(true);
                }
                if (
                  error.response.data.error ===
                  "This username already has an account."
                ) {
                  setUsernameExist(true);
                }
                if (
                  error.response.data.error ===
                  "This email already has an account."
                ) {
                  setExist(true);
                }
                if (password !== confirmPassword) {
                  setDiffPasswords(true);
                }
              }
            }}
          />
          <LinkText content="Already have an account? Sign in" linkTo="/" />
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
    marginVertical: 10,
  },
  submitView: {
    alignItems: "center",
  },
  inputBox: {
    borderColor: "#FFC6CA",
    borderWidth: 1,
    height: 90,
  },
});
