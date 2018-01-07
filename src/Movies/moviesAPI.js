const pets = [
  { id: "a234", name: "Hush", genre: "horror",
  opinion: "too creepy; do not watch" },
  { id: "a345", name: "Road Trip", genre: "comedy",
  opinion: "that weird skinny guy was cool" },
  { id: "b234", name: "Beauty and the Beast", genre: "animation",
  opinion: "classic" },
  { id: "cda2", name: "Toy Story 3", genre: "animation",
  opinion: "too sad; do not watch" },
  { id: "def4", name: "Scream", genre: "horror",
  opinion: "best horror film; not too scary" },
  { id: "def5", name: "Crazy Stupid Love", genre: "romcom",
  opinion: "ryan gosling's abs" },
  { id: "def6", name: "Sleepless in Seattle", genre: "romcom",
  opinion: "she is a stalker" },
  { id: "def7", name: "Friends With Benefits", genre: "romcom",
  opinion: "filler trash" },
  { id: "def8", name: "Bride of Chucky", genre: "horror",
  opinion: "funny" },
  { id: "def9", name: "Child's Play", genre: "horror",
  opinion: "too many scary movies on this list" },
  { id: "def0", name: "Clueless", genre: "comedy",
  opinion: "wear out the tape" },
  { id: "aef4", name: "Pride and Prejudice", genre: "romance",
  opinion: "cute, classic" },
  { id: "eft2", name: "The Matrix", genre: "action",
  opinion: "Keanu Reeves never ages." }
];

const getAll = () => pets;

const getOne = id => pets.find(pet => pet.id === id);

const getGenres = () => {
  let accumulator = [];
  pets.forEach(movie => {
    if (!accumulator.includes(movie.genre)) {
      accumulator.push(movie.genre)
    }
  })
  return accumulator;
}

const getByGenre = genre => {
  return pets.filter(movie => {
    return movie.genre === genre;
  })
}

export default {
  getOne,
  getAll,
  getGenres,
  getByGenre,
};
