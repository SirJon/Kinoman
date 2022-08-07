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
  const {title, rating, year, duration, genre, poster, description, comments} = card;
  return (
    `        
        <article class="film-card">
            <h3 class="film-card__title">${title}</h3>
            <p class="film-card__rating">${rating}</p>
            <p class="film-card__info">
                <span class="film-card__year">${year}</span>
                <span class="film-card__duration">${duration}m</span>
                <span class="film-card__genre">${genre}</span>
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

const generateFilmCard = () => {
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

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map