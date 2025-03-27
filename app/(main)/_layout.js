import { Tabs } from "expo-router";
import { useEffect, useState } from "react";
import axios from "axios";
import OffersContext from "../../context/OffersContext";

export default function MainLayout() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms"
      );
      setData(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <OffersContext.Provider
      value={{
        data: data,
        setData: setData,
      }}
    >
      <Tabs>
        <Tabs.Screen name="(home)" options={{ headerShown: false }} />
        <Tabs.Screen name="map" />
        <Tabs.Screen name="profile" />
      </Tabs>
    </OffersContext.Provider>
  );
}
