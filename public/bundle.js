/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "creatSiteButtonTemplate": () => (/* binding */ creatSiteButtonTemplate),
/* harmony export */   "creatSiteFilmCard": () => (/* binding */ creatSiteFilmCard),
/* harmony export */   "creatSiteFilmCardTemplate": () => (/* binding */ creatSiteFilmCardTemplate),
/* harmony export */   "creatSiteMenuTemplate": () => (/* binding */ creatSiteMenuTemplate),
/* harmony export */   "creatSiteStatisticTemplate": () => (/* binding */ creatSiteStatisticTemplate),
/* harmony export */   "creatSiteUserTitleTemplate": () => (/* binding */ creatSiteUserTitleTemplate),
/* harmony export */   "creatcontainerFilms": () => (/* binding */ creatcontainerFilms)
/* harmony export */ });

const creatSiteUserTitleTemplate = () => {
  return (
    `<section class="header__profile profile">
            <p class="profile__rating">Movie Buff</p>
            <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
        </section>
        `
  );
};

const creatSiteMenuFilters = (filters, isChecked) => {
  const {name, count} = filters;
  return (
    `
    <a href="#${name.split(` `)[0].toLowerCase()}" class="main-navigation__item ${isChecked ? `main-navigation__item--active` : ``}">${name} ${count !== undefined ? ` <span class="main-navigation__item-count">${count}</span>` : ``}</a>
    `
  )
};

const creatSiteMenuSort = (sort, isChecked) => {
  const {name} = sort;
  return (
    `
    <li><a href="#" class="sort__button ${isChecked ? `sort__button--active` : ``}">${name}</a></li>
    `
  )
};

const creatSiteMenuTemplate = (filters, sort) => {

  const filtersMarkUp = filters.map((it, i) => {
    return creatSiteMenuFilters(it, i == 0);
  }).join(`\n`);

  const sortMarkUp = sort.map((it,i) => {
    return creatSiteMenuSort(it, i == 0);
  }).join(`\n`);

  return (
    `<nav class="main-navigation">
            <div class="main-navigation__items">
              ${filtersMarkUp}
            </div>
            <a href="#stats" class="main-navigation__additional">Stats</a>
        </nav>

        <ul class="sort">
            ${sortMarkUp}
        </ul>
        `
  );
};

const creatcontainerFilms = () => {
  return (
    `
        <section class="films">
            <section class="films-list">
                <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
                <div class="films-list__container"></div>
            </section>
            <section class="films-list--extra">
                <h2 class="films-list__title">Top rated</h2>
                <div class="films-list__container"></div>
            </section>
            <section class="films-list--extra">
                <h2 class="films-list__title">Most commented</h2>
                <div class="films-list__container"></div>
            </section>
        </section>
        `
  );
};
const creatSiteFilmCardTemplate = (card) => {
  const {title, rating, year, duration, genre1, poster, description, comments} = card;
  return (
    `        
        <article class="film-card">
            <h3 class="film-card__title">${title}</h3>
            <p class="film-card__rating">${rating}</p>
            <p class="film-card__info">
                <span class="film-card__year">${year}</span>
                <span class="film-card__duration">${duration}m</span>
                <span class="film-card__genre">${genre1}</span>
            </p>
            <img src="${poster}" alt="" class="film-card__poster">
            <p class="film-card__description">${description}</p>
            <a class="film-card__comments">${comments} comments</a>
            <form class="film-card__controls">
                <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
                <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
                <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
            </form>
        </article>
        `
  );
};
const creatSiteButtonTemplate = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};
const creatSiteStatisticTemplate = () => {
  return (
    `<p>130 291 movies inside</p>`
  );
};


const creatSiteFilmCard = (card) => {
  const {
    title, 
    rating, 
    day, 
    mounth,
    year, 
    duration, 
    genre1, 
    genre2, 
    genre3, 
    poster, 
    description, 
    comments, 
    age,
    director,
    writers,
    actors,
    country,
    emoji,
    alt
  } = card;
  return (
    ` 
    <section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="form-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="${poster}" alt="">

              <p class="film-details__age">${age}</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${title}</h3>
                  <p class="film-details__title-original">Original: ${title}</p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${rating}</p>
                </div>
              </div>

              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">${director}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${writers}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${actors}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${day} ${mounth} ${year}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${duration}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${country}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Genres</td>
                  <td class="film-details__cell">
                    <span class="film-details__genre">${genre1}</span>
                    <span class="film-details__genre">${genre2}</span>
                    <span class="film-details__genre">${genre3}</span>
                  </td>
                </tr>
              </table>

              <p class="film-details__film-description">
                ${description}
              </p>
            </div>
          </div>

          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
        </div>

        <div class="form-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">4</span></h3>

            <ul class="film-details__comments-list">
              <li class="film-details__comment">
                <span class="film-details__comment-emoji">
                  <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
                </span>
                <div>
                  <p class="film-details__comment-text">Interesting setting and a good cast</p>
                  <p class="film-details__comment-info">
                    <span class="film-details__comment-author">Tim Macoveev</span>
                    <span class="film-details__comment-day">2019/12/31 23:59</span>
                    <button class="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
              <li class="film-details__comment">
                <span class="film-details__comment-emoji">
                  <img src="./images/emoji/sleeping.png" width="55" height="55" alt="emoji-sleeping">
                </span>
                <div>
                  <p class="film-details__comment-text">Booooooooooring</p>
                  <p class="film-details__comment-info">
                    <span class="film-details__comment-author">John Doe</span>
                    <span class="film-details__comment-day">2 days ago</span>
                    <button class="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
              <li class="film-details__comment">
                <span class="film-details__comment-emoji">
                  <img src="./images/emoji/puke.png" width="55" height="55" alt="emoji-puke">
                </span>
                <div>
                  <p class="film-details__comment-text">Very very old. Meh</p>
                  <p class="film-details__comment-info">
                    <span class="film-details__comment-author">John Doe</span>
                    <span class="film-details__comment-day">2 days ago</span>
                    <button class="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
              <li class="film-details__comment">
                <span class="film-details__comment-emoji">
                  <img src="./images/emoji/angry.png" width="55" height="55" alt="emoji-angry">
                </span>
                <div>
                  <p class="film-details__comment-text">Almost two hours? Seriously?</p>
                  <p class="film-details__comment-info">
                    <span class="film-details__comment-author">John Doe</span>
                    <span class="film-details__comment-day">Today</span>
                    <button class="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
            </ul>

            <div class="film-details__new-comment">
              <div for="add-emoji" class="film-details__add-emoji-label"></div>

              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
              </label>

              <div class="film-details__emoji-list">
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
                <label class="film-details__emoji-label" for="emoji-smile">
                  <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                <label class="film-details__emoji-label" for="emoji-sleeping">
                  <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
                <label class="film-details__emoji-label" for="emoji-puke">
                  <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
                <label class="film-details__emoji-label" for="emoji-angry">
                  <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                </label>
              </div>
            </div>
          </section>
        </div>
      </form>
      </section>
        `
  );
};

/***/ }),

/***/ "./src/mock/mock.js":
/*!**************************!*\
  !*** ./src/mock/mock.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateFilmCard": () => (/* binding */ generateFilmCard),
/* harmony export */   "generateFilters": () => (/* binding */ generateFilters),
/* harmony export */   "generateSort": () => (/* binding */ generateSort)
/* harmony export */ });
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

const generateFilters = () => {
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

const generateSort = () => {
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

const generateFilmCard = () => {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ "./src/components.js");
/* harmony import */ var _mock_mock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock/mock.js */ "./src/mock/mock.js");



const filters = (0,_mock_mock_js__WEBPACK_IMPORTED_MODULE_1__.generateFilters)();
const sort = (0,_mock_mock_js__WEBPACK_IMPORTED_MODULE_1__.generateSort)();
// const filmCard = generateFilmCard();

const render = (container, position, text) => {
  container.insertAdjacentHTML(position, text);
};

const headerBlock = document.querySelector(`.header`);
render(headerBlock, `beforeend`, (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.creatSiteUserTitleTemplate)());

const mainBlock = document.querySelector(`.main`);
render(mainBlock, `beforeend`, (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.creatSiteMenuTemplate)(filters, sort));
render(mainBlock, `beforeend`, (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.creatcontainerFilms)());

const filmsBlock = document.querySelectorAll(`.films-list__container`);
for (let i = 0; i < 5; i++) {
  render(filmsBlock[0], `beforeend`, (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.creatSiteFilmCardTemplate)((0,_mock_mock_js__WEBPACK_IMPORTED_MODULE_1__.generateFilmCard)()));
}

const filmsListBlock = document.querySelector(`.films-list`);
render(filmsListBlock, `beforeend`, (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.creatSiteButtonTemplate)());
for (let i = 0; i < 2; i++) {
  render(filmsBlock[1], `beforeend`, (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.creatSiteFilmCardTemplate)((0,_mock_mock_js__WEBPACK_IMPORTED_MODULE_1__.generateFilmCard)()));
}
for (let i = 0; i < 2; i++) {
  render(filmsBlock[2], `beforeend`, (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.creatSiteFilmCardTemplate)((0,_mock_mock_js__WEBPACK_IMPORTED_MODULE_1__.generateFilmCard)()));
}

const footerStatistics = document.querySelector(`.footer__statistics`);
render(footerStatistics, `beforeend`, (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.creatSiteStatisticTemplate)());

const body = document.querySelector(`body`);
render(body, `beforeend`, (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.creatSiteFilmCard)((0,_mock_mock_js__WEBPACK_IMPORTED_MODULE_1__.generateFilmCard)()));
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map