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
  LargeInput,
  Eye,
} from "../../components/index.js";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext.js";

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
  const [view, setView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const data = useContext(AuthContext);
  const setToken = data.setToken;
  const setUserId = data.setUserId;

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
            secureTextEntry={view ? false : true}
          />
          <View style={styles.eyeView}>
            <Eye
              name={view ? "eye-with-line" : "eye"}
              setView={setView}
              view={view}
            />
          </View>
          <Input
            placeholder="confirm password"
            onChangeText={(text) => {
              setConfirmPassword(text);
            }}
            value={confirmPassword}
            secureTextEntry={view ? false : true}
          />
          <View style={styles.eyeView2}>
            <Eye
              name={view ? "eye-with-line" : "eye"}
              setView={setView}
              view={view}
            />
          </View>
        </View>
        <View style={styles.submitView}>
          {empty && <Error content="Please fill all fields" />}
          {exist && <Error content="Email already exists" />}
          {usernameExist && <Error content="Username already exists" />}
          {diffPasswords && <Error content="Passwords don't match" />}
          <View style={styles.submitButton}>
            <Submit
              content="Sign in"
              disabled={isLoading ? true : false}
              onPress={async () => {
                setIsLoading(true);
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

                  setToken(response.data.token);
                  setUserId(response.data.id);
                  if (response.status === 200) {
                    alert("Account created");
                  }
                  setIsLoading(false);
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
                  setIsLoading(false);
                }
              }}
            />
            {isLoading && <ActivityIndicator />}
          </View>
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
  eyeView: {
    position: "absolute",
    bottom: 25,
    right: 55,
  },
  eyeView2: {
    position: "absolute",
    bottom: 85,
    right: 55,
  },
  submitButton: {
    flexDirection: "row",
    gap: 10,
  },
});
