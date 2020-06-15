const favorites = loadFavorites();

/**
 * If given launch is not in favorites yet, it will be added.
 * If given launch is already in favorites, it will be removed.
 * @param launch 
 */
export function toggleFavorite(launch) {
  if (!isFavorite(launch)) {
    // Launch is not in favorites, we add it.
    favorites.push(launch);
  } else {
    // Launch is already in favorites, we remove it.
    favorites.some((favorite, index) => {
      if (favorite.flight_number === launch.flight_number) {
        favorites.splice(index, 1);
        return true;
      }
      return false;
    });
  }
  // We save the changes in the localstorage.
  saveFavorites();
}

/**
 * Returns an array of favorite launches.
 */
export function listFavorites() {
  return favorites;
}

/**
 * Return true if given launch is in favorite, false otherwise.
 * @param launch 
 */
export function isFavorite(launch) {
  return favorites.some(favorite => favorite.flight_number === launch.flight_number);
}

/**
 * Load favorites from localstorage.
 */
function loadFavorites() {
  const favoritesString = localStorage.getItem('favorites');
  if (!favoritesString) {
    return [];
  }
  return JSON.parse(favoritesString);
}

/**
 * Save favorites into localstorage.
 */
function saveFavorites() {
  const favoritesString = JSON.stringify(favorites);
  localStorage.setItem('favorites', favoritesString);
}
