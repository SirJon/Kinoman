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
const creatSiteMenuTemplate = () => {
  return (
    `<nav class="main-navigation">
            <div class="main-navigation__items">
                <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
                <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
                <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
                <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
            </div>
            <a href="#stats" class="main-navigation__additional">Stats</a>
        </nav>

        <ul class="sort">
            <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
            <li><a href="#" class="sort__button">Sort by date</a></li>
            <li><a href="#" class="sort__button">Sort by rating</a></li>
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
const creatSiteFilmCardTemplate = () => {
  return (
    `        
        <article class="film-card">
            <h3 class="film-card__title">Title</h3>
            <p class="film-card__rating">rating</p>
            <p class="film-card__info">
                <span class="film-card__year">1900</span>
                <span class="film-card__duration">0h 00m</span>
                <span class="film-card__genre">Genre</span>
            </p>
            <img src="" alt="" class="film-card__poster">
            <p class="film-card__description">description</p>
            <a class="film-card__comments">? comments</a>
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

const render = (container, position, text) => {
  container.insertAdjacentHTML(position, text);
};
const headerBlock = document.querySelector(".header");
render(headerBlock, "beforeend", (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.creatSiteUserTitleTemplate)());
const mainBlock = document.querySelector(".main");
render(mainBlock, "beforeend", (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.creatSiteMenuTemplate)());
render(mainBlock, "beforeend", (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.creatcontainerFilms)());
const filmsBlock = document.querySelectorAll(".films-list__container");
for (let i = 0; i < 5; i++) {
  render(filmsBlock[0], "beforeend", (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.creatSiteFilmCardTemplate)());
};
const filmsListBlock = document.querySelector(".films-list");
render(filmsListBlock, "beforeend", (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.creatSiteButtonTemplate)());
for (let i = 0; i < 2; i++) {
  render(filmsBlock[1], "beforeend", (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.creatSiteFilmCardTemplate)());
};
for (let i = 0; i < 2; i++) {
  render(filmsBlock[2], "beforeend", (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.creatSiteFilmCardTemplate)());
};
const footerStatistics = document.querySelector(".footer__statistics");
render(footerStatistics, "beforeend", (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.creatSiteStatisticTemplate)());
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map