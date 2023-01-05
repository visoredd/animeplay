export const getYearList = () => {
  let arr = [];
  for (let i = new Date().getFullYear(); i >= 1990; i--) {
    arr.push(i);
  }
  return arr;
};

export const getSeasonList = () => {
  return [
    {
      key: "FALL",
      season: "Fall",
    },
    {
      key: "SPRING",
      season: "Spring",
    },
    {
      key: "SUMMER",
      season: "Summer",
    },
    {
      key: "WINTER",
      season: "Winter",
    },
  ];
};
export const genreList = [
  "Action",
  "Adventure",
  "Cars",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mahou Shoujo",
  "Mecha",
  "Music",
  "Mystery",
  "Psychological",
  "Romance",
  "Sci-Fi",
  "Slice of Life",
  "Sports",
  "Supernatural",
  "Thriller",
];
