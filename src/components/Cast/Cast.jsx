import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { getFilmCastInfo } from "../../services/api";
import s from "./Cast.module.css";

const Cast = () => {
  const {
    params: { movieId },
  } = useRouteMatch();
  const { push } = useHistory();

  const [castInfo, setCastInfo] = useState([]);
  useEffect(() => {
    movieId &&
      getFilmCastInfo(movieId)
        .then((data) => {
          setCastInfo(data);
        })
        .catch((err) => push("/"));
  }, [movieId]);
  const castMarkUp =
    !!castInfo.length &&
    castInfo.map(({ character, name, profile_path }) => {
      const img = profile_path
        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
        : `https://orten.in.ua/default-img.png`;
      return (
        <article className={s.cardWrap} key={name}>
          <div className={s.imgWrap}>
            <img className={s.img} src={img} alt={name} />
          </div>
          <div className={s.contentWrap}>
            <p>
              Name:
              <span> {name}</span>
            </p>
            <p>
              Character:
              <span> {character}</span>
            </p>
          </div>
        </article>
      );
    });
  return <div>{castMarkUp}</div>;
};

export default Cast;
