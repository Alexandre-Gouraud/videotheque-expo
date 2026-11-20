import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Chargement, Erreur, Vide } from "../../../components/EtatsReseau";
import { FilmsCard } from "../../../components/FilmsCard";
import { useFilms } from "../../../hooks/useFilms";
import { useFavorisStore } from "../../../store/useFavorisStore";

export default function FavorisScreen() {
  const favorisIds = useFavorisStore((s) => s.favorisIds);
  const { statut, films, erreur, recharger } = useFilms();

  if (statut === "chargement") return <Chargement />;
  if (statut === "erreur")
    return <Erreur message={erreur} onReessayer={recharger} />;
  const favoris = films.filter((l) => favorisIds.includes(l.id));

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      {favoris.length === 0 ? (
        <Vide message="Aucun favori. Touchez le cœur d’un film dans l'Accueil." />
      ) : (
        <FlatList
          data={favoris}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => <FilmsCard film={item} />}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
