const movies = [
  {
    id: "1",
    title: "Terminator",
    genre: { _id: "12ab", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },

  {
    id: "2",
    title: "Spiderman",
    genre: { _id: "12abc", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-02-03T19:04:28.809Z"
  },
  {
    id: "3",
    title: "Die Hard",
    genre: { _id: "12abcd", name: "Action" },
    numberInStock: 3,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    id: "4",
    title: "Venom",
    genre: { _id: "12ab4", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },

  {
    id: "5",
    title: "Tesla",
    genre: { _id: "12abc5", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-02-03T19:04:28.809Z"
  },
  {
    id: "6",
    title: "Donot understand me",
    genre: { _id: "12abcd6", name: "Action" },
    numberInStock: 3,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    id: "7",
    title: "Terminator",
    genre: { _id: "12ab", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },

  {
    id: "8",
    title: "Spiderman",
    genre: { _id: "12abc", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-02-03T19:04:28.809Z"
  },
  {
    id: "9",
    title: "Die Hard",
    genre: { _id: "12abcd", name: "Action" },
    numberInStock: 3,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    id: "10",
    title: "Venom",
    genre: { _id: "12ab4", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}
