
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
export const creatSiteFilmCardTemplate = (card) => {
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


export const creatSiteFilmCard = (card) => {
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