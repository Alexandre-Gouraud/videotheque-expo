// Pour la démo : choisir le cas de la source simulée, puis recharger.
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MODES, choisirMode, modeActuel } from "../api/films";

export default function ModeSource({ onChange }) {
  const mode = modeActuel(); // relu à chaque rendu (l'erreur 500 revient seule à « succes »)

  function choisir(m) {
    choisirMode(m);
    onChange();
  }

  return (
    <View style={styles.ligne}>
      {MODES.map((m) => (
        <Pressable
          key={m}
          onPress={() => choisir(m)}
          style={[styles.puce, m === mode && styles.active]}
        >
          <Text style={[styles.texte, m === mode && styles.texteActif]}>
            {m}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ligne: { flexDirection: "row", gap: 6, paddingBottom: 12, flexWrap: "wrap" },
  puce: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 14,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  active: { backgroundColor: "#222", borderColor: "#222" },
  texte: { fontSize: 13 },
  texteActif: { color: "#fff" },
});
