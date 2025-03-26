import { Stack, router } from "expo-router";
import { useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

export default function Layout() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (userId && token) {
      router.replace("/home");
    } else {
      router.replace("/");
    }
  }, [token, userId]);

  const login = () => {
    setToken(token);
    setUserId(userId);
  };

  const logout = () => {
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
