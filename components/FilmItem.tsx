import { Film } from "@/types";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface FilmItemProps {
  item: Film;
}

const FilmItem: React.FC<FilmItemProps> = ({ item }) => {
  const filmId = item.url.split("/").pop();

  return (
    <Link href={`/films/${filmId}`} asChild>
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>Directed by: {item.director}</Text>
          <Text style={styles.date}>Release Date: {item.release_date}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2c3e50",
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ecf0f1",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#bdc3c7",
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: "#95a5a6",
  },
});

export default FilmItem;
