import Colors from "@/constants/Colors";
import { Film } from "@/types";
import { MaterialIcons } from "@expo/vector-icons"; // Make sure to import the icon library
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";

export default function Tab() {
  const [favorites, setFavorites] = useState<Film[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem("favorites");
      if (favorites) {
        setFavorites(JSON.parse(favorites));
      }
      return [];
    } catch (error) {
      console.error("Error fetching favorites:", error);
      return [];
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchFavorites().finally(() => setRefreshing(false));
  };

  const removeFavorite = async (filmId: number) => {
    try {
      const favorites = await AsyncStorage.getItem("favorites");
      if (favorites) {
        const favoriteFilms: Film[] = JSON.parse(favorites);
        const updatedFavorites = favoriteFilms.filter(
          (film) => film.episode_id !== filmId
        );
        await AsyncStorage.setItem(
          "favorites",
          JSON.stringify(updatedFavorites)
        );
        setFavorites(updatedFavorites);
      }
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchFavorites();
    }, [])
  );

  const renderItem = ({ item }: { item: Film }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <MaterialIcons
        name="delete"
        size={24}
        color={Colors.SITH_RED}
        onPress={() => removeFavorite(item.episode_id)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },

  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
  },
});
