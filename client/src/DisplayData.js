import { useState } from "react";
import { useQuery, useLazyQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      username
      age
      nationality
      friends {
        name
        age
      }
    }
  }
`;

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      name
    }
  }
`;

const GET_MOVIE_BY_NAME = gql`
    query Movie($name: String!) {
        movie(name: $name){
           name
           yearOfPublication 
        }
    }
`

const DisplayData = () => {
  const [movieSearched, setMovieSearched] = useState("");
  const { loading, error, data } = useQuery(QUERY_ALL_USERS);
  const { data: moviesData } = useQuery(QUERY_ALL_MOVIES);
  const [fetchMovie, { data: movieSearchedData, error: movieSearchedError }] =
    useLazyQuery(GET_MOVIE_BY_NAME);

  if (loading) {
    return <div>Data is Loading...</div>;
  }
  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }
  if(movieSearchedError){
    console.log(movieSearchedError)
  }
  return (
    <div>
      {data &&
        data.users.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Username: {user.username}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Nationality: {user.nationality}</h1>
            </div>
          );
        })}
      {moviesData &&
        moviesData.movies.map((movie) => {
          return (
            <div>
              <h1>Movie: {movie.name}</h1>
            </div>
          );
        })}

      <div>
        <input
          type="text"
          placeholder="Enter the movie.."
          onChange={(e) => setMovieSearched(e.target.value)}
        />
        <button onClick={() => {
            fetchMovie({ variables: {
                name: movieSearched
            }})
        }}>Fetch Data</button>
        <div>
            {movieSearchedData && movieSearchedData.movie && (<div>
                <h1>Moviename: {movieSearchedData.movie.name}</h1>
                <h1>Year: {movieSearchedData.movie.yearOfPublication}</h1>
            </div>)}
            {movieSearchedError && (<div>
                <h1>Movie not found</h1>
            </div>)}
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
