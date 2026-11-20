import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { films } from "../../../data/films";
import { useFavorisStore } from "../../../store/useFavorisStore";

export default function FavorisScreen() {
  const favorisIds = useFavorisStore((s) => s.favorisIds);
  const favoris = films.filter((l) => favorisIds.includes(l.id));

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      {
        !favoris.length === 0 ?? (
          <Text message="Aucun favori. Touchez le cœur d’un film dans Explorer." />
        )

        // <FlatList
        //   data={favoris}
        //   keyExtractor={(item) => item.id}
        //   contentContainerStyle={{ padding: 16 }}
        //   renderItem={({ item }) => (
        //     <Link href={`/logements/${item.id}`} asChild>
        //       <Pressable>
        //         <LogementCard logement={item} />
        //       </Pressable>
        //     </Link>
        //   )}
        // />
      }
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
