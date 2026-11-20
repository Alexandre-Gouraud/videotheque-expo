import { useEffect, useState } from "react";
import { chargerFilms } from "../api/films";

export function useFilms() {
  const [etat, setEtat] = useState({
    statut: "chargement",
    films: [],
    erreur: null,
  });
  const [essai, setEssai] = useState({
    statut: "chargement",
    films: [],
    erreur: null,
  });

  useEffect(() => {
    let ignore = false; // devient true si l'écran part ou si un autre chargement démarre

    chargerFilms()
      .then((films) => {
        if (!ignore)
          setEtat({
            statut: films.length ? "succes" : "vide",
            films,
            erreur: null,
          });
      })
      .catch((e) => {
        if (!ignore)
          setEtat({ statut: "erreur", films: [], erreur: e.message });
      });

    return () => {
      ignore = true; // la réponse d'un ancien chargement sera ignorée
    };
  }, [essai]);
}
