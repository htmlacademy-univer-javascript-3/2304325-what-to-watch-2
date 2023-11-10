
type Props = {
  src: string;
}

const Card = ({src} : Props) => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img src={src} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
    </div>
    <h3 className="small-film-card__title">
      <a className="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
    </h3>
  </article>
);

export default Card;
