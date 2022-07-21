
export const creatSiteUserTitleTemplate = () => {
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

export const creatSiteMenuTemplate = (filters, sort) => {

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

export const creatcontainerFilms = () => {
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
export const creatSiteFilmCardTemplate = () => {
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
export const creatSiteButtonTemplate = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};
export const creatSiteStatisticTemplate = () => {
  return (
    `<p>130 291 movies inside</p>`
  );
};
