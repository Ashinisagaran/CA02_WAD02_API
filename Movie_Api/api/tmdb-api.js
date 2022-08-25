import fetch from 'node-fetch';

export const getUpcomingMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getPopularMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        ).then((response) => {
              if (!response.ok) {
                throw new Error(response.json().message);
              }
              return response.json();
            })
            .catch((error) => {
              throw error
            });
          };

export const getTopRatedMovies = () => {
return fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        ).then((response) => {
               if (!response.ok) {
                throw new Error(response.json().message);
               }
                 return response.json();
               })
                .catch((error) => {
                  throw error
               });
               };
        

//   export const getRecommendations = (args) => {
//     // console.log(args)
//   const [, idPart, ] = args.queryKey;
//   const { id } = idPart;
//     return fetch(
//        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
//        ).then((response) => {
//         if (!response.ok) {
//           throw new Error(response.json().message);
//         }
//         return response.json();
//         })
//         .catch((error) => {
//           throw error
//         });
//       };