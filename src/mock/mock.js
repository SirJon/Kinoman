const filtersName = [
  `All movies`, 
  `Watchlist`, 
  `History`, 
  `Favorites`,
];

const title = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `The Man with the Golden Arm`,
  `The Great Flamarion`,
  `Santa Claus Conquers the Martians`,
  `Made for Each Other`
];

const poster = [
  `./images/posters/the-dance-of-life.jpg`,
  `./images/posters/sagebrush-trail.jpg`,
  `./images/posters/the-man-with-the-golden-arm.jpg`,
  `./images/posters/santa-claus-conquers-the-martians.jpg`,
  `./images/posters/popeye-meets-sinbad.png`,
  `./images/posters/the-man-with-the-golden-arm.jpg`,
  `./images/posters/the-great-flamarion.jpg`,
  `./images/posters/santa-claus-conquers-the-martians.jpg`,
  `./images/posters/made-for-each-other.png`,
];

const genre = [
  `Musical`,
  `Western`,
  `Drama`,
  `Comedy`,
  `Cartoon`,
  `Mystery`,
];

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`;

const shuffle = (arrayOrig) => {
  const array = arrayOrig;
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const randomEl = (arr) => {
  return arr[Math.floor(Math.random()*arr.length)];
};

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomSentence = (string) => {
  const f = shuffle(string.split(`. `));
  return f.slice(0, getRandomNumber(1,5));
};

export const generateFilters = () => {
  return filtersName.map(it => {
    const result = {
        name: it,
      };
    if(it !== `All movies`) result.count = Math.floor(Math.random()*15);
    return result;
  });
};

const sortName = [
  `Sort by default`, 
  `Sort by date`, 
  `Sort by rating`, 
];

export const generateSort = () => {
  return sortName.map(it => {
    return  {
        name: it,
      };
  });
};

export const generateFilmCard = () => {
  return {
    title: `${randomEl(title)}`,
    rating: `${getRandomNumber(10, 100)/10}`,
    year: `${getRandomNumber(1920,1940)}`,
    duration: `${getRandomNumber(0,2)}h ${getRandomNumber(0, 59)}m`,
    genre: `${randomEl(genre)}`,
    poster: `${randomEl(poster)}`,
    description: `${randomSentence(description)}`,
    comments: `18`,
  }
}

