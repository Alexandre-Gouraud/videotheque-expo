import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FilmsCard } from "./FilmsCard.js";

// Composant d'affichage : reçoit un film déjà chargé et affiche sa fiche complète
export function FilmsDetail({ film }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FilmsCard film={film} />

      <View style={styles.bloc}>
        <Text style={styles.label}>Réalisation</Text>
        <Text style={styles.valeur}>{film.realisateur}</Text>
      </View>

      <View style={styles.bloc}>
        <Text style={styles.label}>Synopsis</Text>
        <Text style={styles.synopsis}>{film.synopsis}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  bloc: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    gap: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#FF5A5F",
  },
  valeur: { fontSize: 15 },
  synopsis: { fontSize: 15, lineHeight: 22 },
});
