import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '', // Missing searchTerm
  setSearchTerm: (term) => set({ searchTerm: term }), // Missing setSearchTerm
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
}));

export default useRecipeStore;
