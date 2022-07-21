import {
  creatSiteUserTitleTemplate,
  creatSiteMenuTemplate,
  creatcontainerFilms,
  creatSiteFilmCardTemplate,
  creatSiteButtonTemplate,
  creatSiteStatisticTemplate
} from "./components.js";
import {generateFilters, generateSort} from "./mock/mock.js";

const render = (container, position, text) => {
  container.insertAdjacentHTML(position, text);
};
const headerBlock = document.querySelector(`.header`);
render(headerBlock, `beforeend`, creatSiteUserTitleTemplate());

const mainBlock = document.querySelector(`.main`);
const filters = generateFilters();
const sort = generateSort();
render(mainBlock, `beforeend`, creatSiteMenuTemplate(filters, sort));

render(mainBlock, `beforeend`, creatcontainerFilms());
const filmsBlock = document.querySelectorAll(`.films-list__container`);
for (let i = 0; i < 5; i++) {
  render(filmsBlock[0], `beforeend`, creatSiteFilmCardTemplate());
}
const filmsListBlock = document.querySelector(`.films-list`);
render(filmsListBlock, `beforeend`, creatSiteButtonTemplate());
for (let i = 0; i < 2; i++) {
  render(filmsBlock[1], `beforeend`, creatSiteFilmCardTemplate());
}
for (let i = 0; i < 2; i++) {
  render(filmsBlock[2], `beforeend`, creatSiteFilmCardTemplate());
}
const footerStatistics = document.querySelector(`.footer__statistics`);
render(footerStatistics, `beforeend`, creatSiteStatisticTemplate());
