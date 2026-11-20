import { create } from "zustand";

export const useFavorisStore = create((set) => ({
  favorisIds: [],
  toggleFavori: (id) =>
    set((state) => ({
      favorisIds: state.favorisIds.includes(id)
        ? state.favorisIds.filter((x) => x !== id)
        : [...state.favorisIds, id],
    })),
}));
