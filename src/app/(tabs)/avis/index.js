import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Avis() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.title}>Avis</Text>
      </View>
      <Text style={styles.title}>Mes Avis</Text>
      <Text style={styles.text}>{"Aucun avis"}</Text>
      <Button
        title="Retour aux Films"
        onPress={() => router.navigate("/films")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#8becff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: "#666",
  },
});
