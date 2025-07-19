import Colors from "@/constants/Colors";
import { Film } from "@/types";
import { useLocalSearchParams } from "expo-router";
import React, { useCallback, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

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
    <View style={styles.container}>
      <Text style={styles.title}>{film?.title}</Text>
    </View>
  );
};

export default DetailsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    padding: 20,
    borderWidth: 2,
    borderColor: Colors.JEDI_BLUE,
    borderRadius: 10,
    backgroundColor: "#ecf0f1",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
