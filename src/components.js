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
export {
  creatSiteUserTitleTemplate,
  creatSiteMenuTemplate,
  creatcontainerFilms,
  creatSiteFilmCardTemplate,
  creatSiteButtonTemplate,
  creatSiteStatisticTemplate
};
