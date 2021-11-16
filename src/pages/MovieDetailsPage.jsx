import { useEffect, useState } from "react";
import { Redirect, useHistory, useLocation, useRouteMatch } from "react-router";
import { Link, Route, Switch } from "react-router-dom";

import Button from "../components/Button/Button";
import MovieCard from "../components/MovieCard/MovieCard";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";

import { getFilmInfo } from "../services/api";

const MovieDetailsPage = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const {
    params: { movieId },
    url,
    path,
    isExact,
  } = useRouteMatch();
  const location = useLocation();
  const { push } = useHistory();

  useEffect(() => {
    movieId &&
      getFilmInfo(movieId)
        .then((response) => setMovieInfo(response.data))
        .catch((err) => push("/"));
  }, []);

  return (
    <>
      <Button />
      {!!Object.keys(movieInfo).length && <MovieCard movieInfo={movieInfo} />}
      <h4>Additional information:</h4>
      <Link
        to={{
          pathname: `/movies/${movieId}/credits`,
          state: {
            from: location.state?.from || "/",
          },
        }}
      >
        Cast
      </Link>
      <span> </span>
      <Link
        to={{
          pathname: `/movies/${movieId}/reviews`,
          state: {
            from: location.state?.from || "/",
          },
        }}
      >
        Reviews
      </Link>

      <Switch>
        <Route path={`${path}/credits`} exact>
          {" "}
          <Cast />
        </Route>
        <Route path={`${path}/reviews`} exact>
          <Reviews />
        </Route>
        {!isExact && <Redirect to={{ pathname: url, state: location.state }} />}
      </Switch>
    </>
  );
};

export default MovieDetailsPage;
