# Assignment 2 - Web API.

Name: Durgaashini

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + added in /tmdb/top_rated for router.get() = top rated movies
 + added in /tmdb/popular for router.get() = popular movies in api/movies

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

After cloning the repo, :-

1. run 'npm install'

2. Collect your API key from TMDB, and change the API key in '.env' file of the code. You should change you API key at this line of code -> 'REACT_APP_TMDB_KEY'. at React App and over in Movie_Api -> 'TMDB_KEY'.



## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

```bat
<!-- REACTAPP -->
REACT_APP_TMDB_KEY=<YOUR TMDB KEY>
FAST_REFRESH=false
SKIP_PREFLIGHT_CHECK=true

<!-- Movie_Api -->
NODE_ENV=development
PORT=8080
HOST=
MONGO_DB=YourMongoURL
SEED_DB=True
SECRET=<YourJWTSecret>
TMDB_KEY=<YOUR TMDB KEY>
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/movies/tmdb/upcoming | Get Upcoming Movies | N/A | N/A |
| /api/movies/tmdb/top_rated | Get Top Rated Movies | N/A | N/A |
| /api/movies/tmdb/popular | Get Popular Movies | N/A | N/A |
| ... | ... | ... | ... | ...


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

+ Unable to login so therefore unable to implement authentication. But if I could, it will be for favourites and playlist page.

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const login = (username, password) => {
        // console.log('/api/users')
        return fetch('/api/users', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({ username: username, password: password })
        }).then(res => res.json())
    };

   
    
    export const signup = (username, password) => {
        return fetch('api/users?action=register', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({ username: username, password: password })
        }).then(res => res.json())
    };
        
~~~