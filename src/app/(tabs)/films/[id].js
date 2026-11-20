import { Stack, useLocalSearchParams } from "expo-router";
import { Chargement, Erreur, Vide } from "../../../components/EtatsReseau";
import { FilmsDetail } from "../../../components/FilmsDetail.js";
import { useFilm } from "../../../hooks/useFilm.js";

export default function FilmDetailScreen() {
  const { id } = useLocalSearchParams();
  const { statut, film, erreur, recharger } = useFilm(id);

  if (statut === "chargement") return <Chargement />;
  if (statut === "introuvable") return <Vide message="Film introuvable." />;
  if (statut === "erreur")
    return <Erreur message={erreur} onReessayer={recharger} />;

  return (
    <>
      {/* Le titre de l'en-tête devient le titre du film */}
      <Stack.Title>{film.titre}</Stack.Title>
      <FilmsDetail film={film} />
    </>
  );
}
