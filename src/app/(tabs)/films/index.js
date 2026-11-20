import { Link } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Chargement, Erreur, Vide } from "../../../components/EtatsReseau";
import { FilmsCard } from "../../../components/FilmsCard.js";
import ModeSource from "../../../components/ModeSource";
import { CATEGORIES } from "../../../data/films";
import { useFilms } from "../../../hooks/useFilms.js";

// "Toutes" + les 3 catégories des données = 4 boutons
const OPTIONS = ["Toutes", ...CATEGORIES];

export default function HomeScreen() {
  const { statut, films, erreur, recharger } = useFilms();
  const [categorie, setCategorie] = useState("Toutes");

  // On ne stocke pas la liste filtrée : on la calcule à chaque rendu
  const filmsAffiches =
    categorie === "Toutes"
      ? films
      : films.filter((f) => f.categorie === categorie);

  function etatSansListe() {
    if (statut === "chargement") return <Chargement />;
    if (statut === "erreur")
      return <Erreur message={erreur} onReessayer={recharger} />;
    if (films.length > 0)
      return <Vide message="Aucun film dans cette catégorie." />;
    return <Vide message="Aucun film pour le moment." />;
  }

  return (
    <FlatList
      data={filmsAffiches}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={etatSansListe()}
      ListHeaderComponent={
        <View>
          <ModeSource onChange={recharger} />
          <View style={styles.ligne}>
            {OPTIONS.map((c) => (
              <Pressable
                key={c}
                onPress={() => setCategorie(c)}
                style={[styles.puce, c === categorie && styles.active]}
              >
                <Text
                  style={[styles.texte, c === categorie && styles.texteActif]}
                >
                  {c}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      }
      renderItem={({ item }) => (
        <Link href={`/films/${item.id}`} asChild>
          <Pressable>
            <FilmsCard film={item} />
          </Pressable>
        </Link>
      )}
    />
  );
}

const styles = StyleSheet.create({
  ligne: { flexDirection: "row", gap: 6, paddingBottom: 12, flexWrap: "wrap" },
  puce: {
    borderWidth: 1,
    borderColor: "#FF5A5F",
    borderRadius: 14,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  active: { backgroundColor: "#FF5A5F" },
  texte: { fontSize: 13, color: "#FF5A5F" },
  texteActif: { color: "#fff" },
});
