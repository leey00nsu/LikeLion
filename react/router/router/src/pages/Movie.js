import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { getMovie } from "../movie_data";

const Movie = () => {
  //url 파라미터
  const params = useParams();
  const movie = getMovie(parseInt(params.movieId));

  //쿼리스트링
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");

  const handleClick = () => {
    setSearchParams({ detail: detail === "true" ? false : true });
  };
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>감독 : {movie.director}</p>
      <p>카테고리 : {movie.category}</p>
      <button tyhpe="button" onClick={handleClick}>
        자세히
      </button>
      {detail === "true" ? <p>{movie.detail}</p> : " "}
    </div>
  );
};

export default Movie;
