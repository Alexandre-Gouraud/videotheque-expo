import { FlatList, Pressable } from "react-native";
import { Link } from "expo-router";
import { FilmsCard } from "../../../components/FilmsCard.js";
import { films } from "../../../data/films.js";

export default function Index() {
  return (
    <FlatList
      data={films}
      keyExtractor={(item) => item.id}
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
