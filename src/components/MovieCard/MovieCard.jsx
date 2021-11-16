import s from "./MovieCard.module.css";

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
  return (
    <article className={s.cardWrap}>
      <div className={s.imgWrap}>
        <img
          className={s.img}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={original_title}
        />
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
export default MovieCard;
