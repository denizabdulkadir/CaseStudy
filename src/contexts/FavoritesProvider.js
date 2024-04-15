import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const savedFavorites = await AsyncStorage.getItem("favorites");
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    };

    loadFavorites();
  }, []);

  const toggleFavorite = async (product) => {
    const existingFavoriteIndex = favorites.findIndex((item) => item.id === product.id);
    let newFavorites;

    if (existingFavoriteIndex > -1) {
      newFavorites = [...favorites];
      newFavorites.splice(existingFavoriteIndex, 1);
    } else {
      newFavorites = [...favorites, product];
    }

    setFavorites(newFavorites);
    await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
