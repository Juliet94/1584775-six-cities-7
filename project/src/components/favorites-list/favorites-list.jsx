import React from "react";
import FavoritesListItem from "../favotites-list-item/favorites-list-item";

function FavoritesList({favoriteOffers, favoritesUniqueCities}) {
  const favoriteCities = Array.from(favoritesUniqueCities);

  return (
    <ul className="favorites__list">
      {favoriteCities.map((city) =>
        <FavoritesListItem
          key={city}
          favoriteOffers={favoriteOffers.filter((offer) => offer.city.name === city)}
          favoriteCity={city}
        />
      )}
    </ul>
  )
}

export default FavoritesList;
