import { Stack, router } from "expo-router";
import { useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const isConnected = async () => {
    const resultToken = await AsyncStorage.getItem("token");
    const resultId = await AsyncStorage.getItem("userId");
    setToken(resultToken);
    setUserId(resultId);
  };

  useEffect(() => {
    isConnected();
    if (userId && token) {
      router.replace("/home");
    } else {
      router.replace("/");
    }
  }, [token, userId]);

  const login = async (token, userId) => {
    setToken(token);
    setUserId(userId);
    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("userId", userId);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("userId");
    setToken(null);
    setUserId(null);
  };

  return (
    <AuthContext.Provider
      value={{
        login: login,
        logout: logout,
        token: token,
        userId: userId,
        setToken: setToken,
        setUserId: setUserId,
      }}
    >
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </AuthContext.Provider>
  );
}
