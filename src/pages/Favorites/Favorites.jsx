import React from "react";
import FavoritesPage from "../../components/FavoritesPages/FavoritesPage";
import { FavoriteContainer, PageCont } from "./Favorites.styled";

const Favorites = () => {
  return (
    <FavoriteContainer>
      <PageCont>
        <FavoritesPage />
      </PageCont>
    </FavoriteContainer>
  );
};

export default Favorites;
