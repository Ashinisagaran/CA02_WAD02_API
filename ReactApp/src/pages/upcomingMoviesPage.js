import React, { useState } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/playlistAdd";
import { Pagination } from '@mui/material';

const UpcomingMoviesPage = (props) => {
  const [page, setPage] = useState(1);
  const {  data, error, isLoading, isError }  = useQuery(["upcomingMovies", page] , getUpcomingMovies)

  if (isLoading) {
        return <Spinner />
      }
    
      if (isError) {
        return <h1>{error.message}</h1>
      }  
      const movies = data.results;
      const totalPages = data.total_pages;

      // Redundant, but necessary to avoid app crashing.
      const playlist = movies.filter(m => m.playlists)
      localStorage.setItem('playlist', JSON.stringify(playlist))
     const addToPlaylist = (movieId) => true 
    
      return (
        <>
        <PageTemplate
          title="Upcoming Movies"
          movies={movies}
          action={(movie) => {
            return (

                <AddToPlaylistIcon movie={movie} />
               
            );
          }}
        />
        <Pagination size="large" count={totalPages} page={page} onChange={(event, newPageNum) => setPage(newPageNum)} />
        </>
    );
    };

export default UpcomingMoviesPage;

