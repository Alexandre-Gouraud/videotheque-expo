import { Link } from "expo-router";
import { FlatList, Pressable } from "react-native";
import { Chargement, Erreur, Vide } from "../../../components/EtatsReseau";
import { FilmsCard } from "../../../components/FilmsCard.js";
import ModeSource from "../../../components/ModeSource";
import { useFilms } from "../../../hooks/useFilms.js";

export default function HomeScreen() {
  const { statut, films, erreur, recharger } = useFilms();

  function etatSansListe() {
    if (statut === "chargement") return <Chargement />;
    if (statut === "erreur")
      return <Erreur message={erreur} onReessayer={recharger} />;
    return <Vide message="Aucun logement pour le moment." />;
  }
  return (
    <FlatList
      data={films}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={etatSansListe()}
      ListHeaderComponent={<ModeSource onChange={recharger} />}
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
