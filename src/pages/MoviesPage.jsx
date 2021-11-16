import Searchbar from "../components/Searchbar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import queryString from "query-string";

import { searchFilms } from "../services/api";
import List from "../components/List";

const MoviesPage = () => {
  const [listOfFilms, setListOfFilms] = useState([]);
  const { search } = useLocation();
  const { query } = queryString.parse(search);

  useEffect(() => {
    query &&
      searchFilms(query).then((data) => {
        setListOfFilms(data);
      });
  }, [query, listOfFilms]);

  return (
    <>
      <Searchbar />
      {!!listOfFilms?.length && <List listOfFilms={listOfFilms} />}
    </>
  );
};

export default MoviesPage;
