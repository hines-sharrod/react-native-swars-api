import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
import { Film } from "../../types";

export default function Tab() {
  const [films, setFilms] = useState<Film[]>([]);

  const fetchFilms = async () => {
    return fetch("https://swapi.info/api/films")
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    console.log(fetchFilms());
  }, []);

  return (
    <View style={styles.container}>
      <Text>Tab Films</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.YODA_GREEN,
  },
});
