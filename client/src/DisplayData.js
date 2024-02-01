import { useState } from "react";
import { useQuery, useLazyQuery, gql, useMutation } from "@apollo/client";

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
    movie(name: $name) {
      name
      yearOfPublication
    }
  }
`;

const CREATE_USER_MUTATION = gql`
mutation CreateUser($input: CreateUserInput!){
   createUser(input: $input){
    name 
    id
   }
}
`;

const DisplayData = () => {
  const [movieSearched, setMovieSearched] = useState("");

  //Create User States
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");

  const { loading, error, data, refetch } = useQuery(QUERY_ALL_USERS);
  const { data: moviesData } = useQuery(QUERY_ALL_MOVIES);
  const [fetchMovie, { data: movieSearchedData, error: movieSearchedError }] =
    useLazyQuery(GET_MOVIE_BY_NAME);
  
  const [createUser] = useMutation(CREATE_USER_MUTATION);

  if (loading) {
    return <div>Data is Loading...</div>;
  }
  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }
  if (movieSearchedError) {
    console.log(movieSearchedError);
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nationality"
          onChange={(e) => setNationality(e.target.value.toUpperCase())}
        />
        <button onClick={() => {
          createUser({ variables: {
            input: {
                name,
                username,
                age: Number(age),
                nationality
            }
        }});
        refetch();
        }}>Create User</button>
      </div>
      {data &&
        data.users.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Username: {user.username}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Nationality: {user.nationality.toUpperCase()}</h1>
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
        <button
          onClick={() => {
            fetchMovie({
              variables: {
                name: movieSearched,
              },
            });
          }}
        >
          Fetch Data
        </button>
        <div>
          {movieSearchedData && movieSearchedData.movie && (
            <div>
              <h1>Moviename: {movieSearchedData.movie.name}</h1>
              <h1>Year: {movieSearchedData.movie.yearOfPublication}</h1>
            </div>
          )}
          {movieSearchedError && (
            <div>
              <h1>Movie not found</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
