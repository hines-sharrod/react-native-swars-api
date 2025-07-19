import Colors from "@/constants/Colors";
import { Film } from "@/types";
import { useLocalSearchParams } from "expo-router";
import React, { useCallback, useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const DetailsPage = () => {
  const { filmId } = useLocalSearchParams();
  const [film, setFilm] = React.useState<Film | null>(null);

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

  useEffect(() => {
    if (filmId) {
      fetchFilmDetails();
    }
  }, [fetchFilmDetails, filmId]);

  return (
    <ScrollView style={styles.container}>
      {film && (
        <>
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
    fontSize: 16,
    color: "#34495e",
    marginTop: 8,
    backgroundColor: "#ecf0f1",
    borderRadius: 5,
  },
});
