import Colors from "@/constants/Colors";
import { favoritesKey } from "@/constants/Keys";
import { Film } from "@/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useCallback, useEffect } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

const DetailsPage = () => {
  const { filmId } = useLocalSearchParams();
  const [film, setFilm] = React.useState<Film | null>(null);
  const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

  const fetchFilmDetails = useCallback(async () => {
    try {
      const response = await fetch(
        `https://www.swapi.info/api/films/${filmId}`
      );
      const data = await response.json();
      setFilm(data);
      return data;
    } catch (error) {
      console.error("Error fetching film details:", error);
    }
  }, [filmId]);

  const checkFavoriteStatus = useCallback(async () => {
    try {
      const favorites = await AsyncStorage.getItem(favoritesKey);
      if (favorites) {
        const favoriteFilms: Film[] = JSON.parse(favorites);
        setIsFavorite(
          favoriteFilms.some(
            (favorite) => favorite.episode_id === Number(filmId)
          )
        );
      }
    } catch (error) {
      console.error("Error checking favorite status:", error);
    }
  }, [filmId]);

  const toggleFavorite = useCallback(async () => {
    try {
      const favorites = await AsyncStorage.getItem(favoritesKey);
      const favoriteFilms: Film[] = favorites ? JSON.parse(favorites) : [];

      if (isFavorite) {
        // Remove from favorites
        const updatedFavorites = favoriteFilms.filter(
          (favorite) => favorite.episode_id !== Number(filmId)
        );
        await AsyncStorage.setItem(
          favoritesKey,
          JSON.stringify(updatedFavorites)
        );
      } else {
        // Add to favorites
        const filmToAdd = film ? { ...film, episode_id: Number(filmId) } : null;
        if (filmToAdd) {
          favoriteFilms.push(filmToAdd);
          await AsyncStorage.setItem(
            favoritesKey,
            JSON.stringify(favoriteFilms)
          );
        }
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Error toggling favorite status:", error);
    }
  }, [film, filmId, isFavorite]);

  useEffect(() => {
    if (filmId) {
      fetchFilmDetails();
      checkFavoriteStatus();
    }
  }, [checkFavoriteStatus, fetchFilmDetails, filmId]);

  return (
    <ScrollView style={styles.container}>
      {film && (
        <>
          <Stack.Screen
            options={{
              headerRight: () => (
                <TouchableOpacity onPress={toggleFavorite}>
                  <FontAwesome
                    name={isFavorite ? "heart" : "heart-o"}
                    size={24}
                    color={Colors.TATOOINE_SAND}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <Text style={styles.title}>{film.title}</Text>
          <Text style={styles.detail}>Episode: {film.episode_id}</Text>
          <Text style={styles.detail}>Director: {film.director}</Text>
          <Text style={styles.detail}>Producer: {film.producer}</Text>
          <Text style={styles.detail}>Release Date: {film.release_date}</Text>
          <Text style={styles.crawl}>{film.opening_crawl}</Text>
        </>
      )}
    </ScrollView>
  );
};

export default DetailsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    padding: 8,
    borderWidth: 2,
    borderColor: Colors.JEDI_BLUE,
    borderRadius: 10,
    backgroundColor: "#ecf0f1",
    marginBottom: 8,
  },
  detail: {
    fontSize: 18,
    color: "#34495e",
    marginVertical: 5,
  },
  crawl: {
    fontSize: 24,
    color: "#34495e",
    marginTop: 8,
    backgroundColor: "#ecf0f1",
    borderRadius: 5,
  },
});
