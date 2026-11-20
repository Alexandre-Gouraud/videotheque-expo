// Les écrans d'attente, de liste vide et d'erreur, réutilisés partout.
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export function Chargement() {
  return (
    <View style={styles.centre}>
      <ActivityIndicator size="large" />
      <Text style={styles.gris}>Chargement…</Text>
    </View>
  );
}

export function Vide({ message }) {
  return (
    <View style={styles.centre}>
      <Text style={styles.gris}>{message}</Text>
    </View>
  );
}

export function Erreur({ message, onReessayer }) {
  return (
    <View style={styles.centre}>
      <Text style={styles.titre}>Impossible de charger les films</Text>
      <Text style={styles.gris}>{message}</Text>
      <Pressable onPress={onReessayer} style={styles.bouton}>
        <Text style={styles.boutonTexte}>Réessayer</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  centre: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 12,
  },
  titre: { fontSize: 18, fontWeight: "bold" },
  gris: { color: "gray", textAlign: "center" },
  bouton: {
    backgroundColor: "#FF5A5F",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  boutonTexte: { color: "#fff", fontWeight: "bold" },
});
