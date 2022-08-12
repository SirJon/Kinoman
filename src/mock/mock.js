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
  `Film-Noir`,
];

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`;

const mounth = [
  `January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`
];

const country = [
  `USA`,
  `Russia`,
  `Mexico`,
  `Ukraine`,
  `France`,
  `Germany`,
  `India`,
  `China`,
];

const people = [
  `Anthony Mann`,
  `Anne Wigton`,
  `Heinz Herald`, 
  `Richard Weil`,
  `Erich von Stroheim`, 
  `Mary Beth Hughes`, 
  `Dan Duryea`,
];

const emoji = [
  `./images/emoji/smile.png`,
  `./images/emoji/sleeping.png`,
  `./images/emoji/puke.png`,
  `./images/emoji/angry.png`,
];

const commentsText = [
  `Interesting setting and a good cast`,
  `Booooooooooring`,
  `Very very old. Meh`,
  `Almost two hours? Seriously?`,
];

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
};

const randomSentence = (string, length) => {
  const f = shuffle(string.split(`. `));
  return f.slice(0, getRandomNumber(1,length));
};

const randomElNum = (string, length) => {
  const f = shuffle(string);
  return f.slice(0, getRandomNumber(1,length));
};

const altEmoji = (emj) => {
  return (emj.split(`.png`).shift().split(`/`).pop());
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



const generateFilmComments = () => {
  return {
    emoji: `${randomEl(emoji)}`,
    // alt: emoji,
    comments: `${randomEl(commentsText)}`,
    author: `${randomEl(people)}`,
    day: `2022/${getRandomNumber(1,12)}/${getRandomNumber(1,30)} ${getRandomNumber(1,23)}:${getRandomNumber(1,59)}`,
  }
};

const ff = () => {
  let i = getRandomNumber(1, 4);
  while(i < 4){
    generateFilmComments();
    i++;
    console.log(i);
  }
};

console.log(ff());

export const generateFilmCard = () => {
  return {
    title: `${randomEl(title)}`,
    rating: `${getRandomNumber(10, 100)/10}`,
    day: `${getRandomNumber(1,30)}`,
    mounth: `${randomEl(mounth)}`,
    year: `${getRandomNumber(1920,1970)}`,
    duration: `${getRandomNumber(0,2)}h ${getRandomNumber(0, 59)}m`,
    genre1: `${randomEl(genre)}`,
    genre2: `${randomEl(genre)}`,
    genre3: `${randomEl(genre)}`,
    poster: `${randomEl(poster)}`,
    description: `${randomSentence(description, 5)}`,
    age: `${getRandomNumber(0,18)}+`,
    director: `${randomElNum(people, 1)}`,
    writers: `${randomElNum(people, 3)}`,
    actors: `${randomElNum(people, 5)}`,
    country: `${randomEl(country)}`,
    // comments: `${ff}`,
  };
};