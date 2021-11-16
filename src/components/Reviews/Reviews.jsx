import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { getFilmReviewInfo } from "../../services/api";
import s from "./Reviews.module.css";

const Reviews = () => {
  const [reviewInfo, setReviewInfo] = useState([]);
  const {
    params: { movieId },
  } = useRouteMatch();

  useEffect(() => {
    movieId &&
      getFilmReviewInfo(movieId).then((data) => {
        setReviewInfo(data);
      });
  }, [movieId]);

  const reviewMarkUp =
    reviewInfo.length > 0 &&
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
