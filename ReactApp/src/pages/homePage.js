import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getMovies} from '../api/tmdb-api';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import { Pagination } from '@mui/material';


const HomePage = (props) => {
  const [page, setPage] = useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['discover', page], getMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  const totalPages = data.total_pages;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
  <>
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
    <Pagination count={totalPages} page={page} variant="outlined" shape="rounded" onChange={(event, newPageNum) => setPage(newPageNum)}/>
   </>
);
};

export default HomePage;