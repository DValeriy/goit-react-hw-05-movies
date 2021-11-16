import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { getFilmReviewInfo } from "../../services/api";
import s from "./Reviews.module.css";

const Reviews = () => {
  const [reviewInfo, setReviewInfo] = useState([]);
  const {
    params: { movieId },
  } = useRouteMatch();
  const { push } = useHistory();

  useEffect(() => {
    movieId &&
      getFilmReviewInfo(movieId)
        .then((data) => {
          setReviewInfo(data);
        })
        .catch((err) => push("/"));
  }, [movieId]);

  const reviewMarkUp =
    reviewInfo.length &&
    reviewInfo.map(({ author, content }) => {
      return (
        <article className={s.contentWrap} key={author}>
          <p>
            Author:
            <span> {author}</span>
          </p>
          <p>{content}</p>
        </article>
      );
    });

  return (
    <div>
      {reviewInfo.length ? reviewMarkUp : <p>Sorry,no find reviews!!!</p>}
    </div>
  );
};

export default Reviews;
