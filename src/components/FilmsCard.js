import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useFavorisStore } from "../store/useFavorisStore";

export function FilmsCard({ film }) {
  const estFavori = useFavorisStore((s) => s.favorisIds.includes(film.id));
  const toggleFavori = useFavorisStore((s) => s.toggleFavori);

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
      <Pressable
        onPress={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleFavori(film.id);
        }}
        hitSlop={10}
        style={styles.pastille}
        accessibilityRole="button"
      >
        <Ionicons
          name={estFavori ? "heart" : "heart-outline"}
          size={22}
          color={estFavori ? "#FF5A5F" : "#222"}
        />
      </Pressable>
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
