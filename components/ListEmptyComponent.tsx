import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ListEmptyComponentProps {
  message?: string;
}

const ListEmptyComponent: React.FC<ListEmptyComponentProps> = ({
  message = "No items to display.",
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    height: 400,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});

export default ListEmptyComponent;
