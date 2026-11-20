import { useEffect, useState } from "react";
import { chargerFilm } from "../api/films";

// Charge UN film par son id depuis l'API (même principe que useFilms)
export function useFilm(id) {
  const [etat, setEtat] = useState({
    statut: "chargement",
    film: null,
    erreur: null,
  });
  const [essai, setEssai] = useState(0);

  useEffect(() => {
    let ignore = false; // devient true si l'écran part ou si l'id change

    chargerFilm(id)
      .then((film) => {
        if (!ignore) setEtat({ statut: "succes", film, erreur: null });
      })
      .catch((e) => {
        if (ignore) return;
        // L'API renvoie "introuvable" pour un id inconnu (404)
        const statut = e.message === "introuvable" ? "introuvable" : "erreur";
        setEtat({ statut, film: null, erreur: e.message });
      });

    return () => {
      ignore = true;
    };
  }, [id, essai]);

  function recharger() {
    setEtat({ statut: "chargement", film: null, erreur: null });
    setEssai((n) => n + 1);
  }

  return { ...etat, recharger };
}
