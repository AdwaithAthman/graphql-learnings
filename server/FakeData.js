const UserList = [
  { id: 1, name: "User1", username: "user1", age: 25, nationality: "American" },
  { id: 2, name: "User2", username: "user2", age: 30, nationality: "British" },
  { id: 3, name: "User3", username: "user3", age: 35, nationality: "Canadian" },
  {
    id: 4,
    name: "User4",
    username: "user4",
    age: 40,
    nationality: "Australian",
    friends: [
      {
        id: 5,
        name: "User5",
        username: "user5",
        age: 45,
        nationality: "Indian",
      },
      {
        id: 6,
        name: "User6",
        username: "user6",
        age: 50,
        nationality: "German",
      },
    ],
  },
  { id: 5, name: "User5", username: "user5", age: 45, nationality: "Indian" },
  { id: 6, name: "User6", username: "user6", age: 50, nationality: "German" },
  { id: 7, name: "User7", username: "user7", age: 55, nationality: "French" },
  { id: 8, name: "User8", username: "user8", age: 60, nationality: "Italian" },
  { id: 9, name: "User9", username: "user9", age: 65, nationality: "Spanish" },
  {
    id: 10,
    name: "User10",
    username: "user10",
    age: 70,
    nationality: "Japanese",
    friends: [
      {
        id: 6,
        name: "User6",
        username: "user6",
        age: 50,
        nationality: "German",
      },
      {
        id: 7,
        name: "User7",
        username: "user7",
        age: 55,
        nationality: "French",
      },
    ],
  },
];

const MovieList = [
  {id: 1, name: "Movie1", yearOfPublication: 2000, isInTheaters: false},
  {id: 2, name: "Movie2", yearOfPublication: 2005, isInTheaters: true},
  {id: 3, name: "Movie3", yearOfPublication: 2010, isInTheaters: false},
  {id: 4, name: "Movie4", yearOfPublication: 2015, isInTheaters: true},
  {id: 5, name: "Movie5", yearOfPublication: 2020, isInTheaters: false},
  {id: 6, name: "Movie6", yearOfPublication: 2021, isInTheaters: true},
  {id: 7, name: "Movie7", yearOfPublication: 2022, isInTheaters: false},
  {id: 8, name: "Movie8", yearOfPublication: 2023, isInTheaters: true},
  {id: 9, name: "Movie9", yearOfPublication: 2024, isInTheaters: false},
  {id: 10, name: "Movie10", yearOfPublication: 2025, isInTheaters: true},
]

module.exports = { UserList, MovieList };
