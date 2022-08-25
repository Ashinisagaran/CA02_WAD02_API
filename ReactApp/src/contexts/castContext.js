import React, { useState } from "react";

export const CastContext = React.createContext(null);

const CastContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [playlist, setPlaylist] = useState( [] )

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    setFavorites(newFavorites)
  };

  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  //NEW
  const addToPlaylist = (movie) => {
    let newPlaylist = [];
    if (!playlist.includes(movie.id)){
      newPlaylist = [...playlist, movie.id];
      setPlaylist(newPlaylist)
    }
    
    // console.log(playlist);
  };

return (
  <CastContext.Provider
    value={{
      favorites,
      playlist,
      addToFavorites,
      removeFromFavorites,
      addToPlaylist,
    }}
  >
    {props.children}
  </CastContext.Provider>
);
};


export default CastContextProvider;