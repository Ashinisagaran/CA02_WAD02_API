import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import Spinner from '../components/spinner';
import { getMovie, getUpcomingMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/playlistAdd";

const PlaylistMoviesPage = (props) => {
  const {playlist: movieIds } = useContext(MoviesContext);

  console.log(movieIds);

  // Create an array of queries and run in parallel.
  const playlistMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = playlistMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
        return <Spinner />;
      }
    
      const movies = playlistMovieQueries.map((q) => {
        q.data.genre_ids = q.data.genres.map(g => g.id)
        return q.data
      });
    
      const toDo = () => true;
    
      return (
        <PageTemplate
          title="My Playlist Movies"
          movies={movies}
          action={(movie) => {
            return (
                <AddToPlaylistIcon movie={movie} />
               
            );
          }}
        />
    );
    };

export default PlaylistMoviesPage;
