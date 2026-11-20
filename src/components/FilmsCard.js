import { Image, StyleSheet, Text, View } from "react-native";

export function FilmsCard({ film }) {
  return (
    <View style={styles.container}>
      {film.image ? (
        <Image source={{ uri: film.image }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.noImage]}>
          <Text>{"Pas d'affiche"}</Text>
        </View>
      )}
      <Text style={styles.title}>{film.titre}</Text>
      <Text>
        {film.categorie} · {film.annee} · {film.duree} min
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  image: {
    width: 320,
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  noImage: {
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
