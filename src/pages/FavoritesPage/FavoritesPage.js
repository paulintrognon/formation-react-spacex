import React, { useEffect, useState } from 'react';
import Launches from '../../components/Launches'
import { listFavorites } from '../../services/favoriteService'

function FavoritesPage() {
  const [favorites, setFavorites] = useState()

  useEffect(() => {
    setFavorites(listFavorites());
  }, [favorites])

  return (
    <div>
      <Launches launches={favorites} />
    </div>
  );
}
export default FavoritesPage;
