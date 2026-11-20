// Pour la démo : choisir le cas de la source simulée, puis recharger.
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MODES, choisirMode, modeActuel } from "../api/films";

export default function ModeSource({ statut, onChange }) {
  const [mode, setMode] = useState(modeActuel());
  const [statutPrecedent, setStatutPrecedent] = useState(statut);

  if (statut !== statutPrecedent) {
    setStatutPrecedent(statut);
    setMode(modeActuel());
  }

  function choisir(m) {
    choisirMode(m);
    setMode(m);
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
