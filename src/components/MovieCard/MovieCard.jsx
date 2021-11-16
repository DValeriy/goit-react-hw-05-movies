import s from "./MovieCard.module.css";
import PropTypes from "prop-types";

const MovieCard = ({
  movieInfo: {
    genres,
    original_title,
    overview,
    poster_path,
    vote_average,
    release_date,
  },
}) => {
  const genresArr =
    genres?.map(({ name }) => <span key={name}> {name} </span>) || [];
  const rate = vote_average * 10;
  const img = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : `https://orten.in.ua/default-img.png`;
  return (
    <article className={s.cardWrap}>
      <div className={s.imgWrap}>
        <img className={s.img} src={img} alt={original_title} />
      </div>
      <div className={s.contentWrap}>
        <h2>
          {original_title}
          <span> ({release_date?.slice(0, 4)})</span>
        </h2>
        <p>
          User Score: <span> {rate}%</span>
        </p>
        <h3>Overview:</h3>
        <p>{overview}</p>
        <h3>Genres:</h3>
        <p>{genresArr}</p>
      </div>
    </article>
  );
};

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    original_title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};
export default MovieCard;
