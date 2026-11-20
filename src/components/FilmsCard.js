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
          <Text style={styles.noImageText}>{"Pas d'affiche"}</Text>
        </View>
      )}
      <View style={styles.infos}>
        <Text style={styles.title} numberOfLines={2}>
          {film.titre}
        </Text>
        <Text style={styles.meta}>
          {film.categorie} · {film.annee} · {film.duree} min
        </Text>
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  image: {
    width: 140,
    height: 80,
    borderRadius: 8,
  },
  noImage: {
    backgroundColor: "#e5e5e5",
    alignItems: "center",
    justifyContent: "center",
  },
  noImageText: {
    color: "#888",
  },
  pastille: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  infos: {
    flex: 1,
    gap: 6,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#111",
  },
  meta: {
    fontSize: 13,
    color: "#666",
  },
});
