import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { FilmsCard } from "../../../components/FilmsCard.js";
import { films } from "../../../data/films.js";

export default function FilmDetail() {
  const { id } = useLocalSearchParams();
  const film = films.find((f) => f.id === id);

  if (!film) return <Text>Film introuvable</Text>;

  return (
    <View>
      <FilmsCard film={film} />
      <Text>{film.synopsis}</Text>
    </View>
  );
}
