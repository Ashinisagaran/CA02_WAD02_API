import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";

import AddMovieReviewPage from './pages/addMovieReviewPage';
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import PlaylistMoviesPage from "./pages/playlistMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import RecommendationsPage from "./pages/recommendationsPage";

import LoginPage from "./pages/loginPage";
import AuthProvider from "./components/authContext";
// import PrivateRoute from './components/privateRoute';
import AuthHeader from './components/authHeader';
import SignUpPage from "./pages/signUpPage";

import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});



const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthProvider>
      <AuthHeader />
      <ul>
            <li>
              <Link to="/" component={HomePage}>HomePage</Link>
            </li>
            {/* <li>
              <Link to="/movies/upcoming" component={UpcomingMoviesPage}>Upcoming Movies</Link>
            </li>
            <li>
              <Link to="/movies/popular" component={PopularMoviesPage}>Popular Movie</Link>
            </li> */}
          </ul>
        <SiteHeader />
        <MoviesContextProvider>
            {" "}
      <Switch>
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
        <Route exact path="/movies/playlist" component={PlaylistMoviesPage} />
        {/* New */}
        <Route exact path="/movies/popular" component={PopularMoviesPage} /> 
        <Route path="/movies/recommendations/:id" component={RecommendationsPage} />

         {/* Login & Signup */}

        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />

        <Route path="/movies/:id" component={MoviePage} />
        <Route exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
      </MoviesContextProvider>
      </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));