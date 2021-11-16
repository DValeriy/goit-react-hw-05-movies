import { useEffect, useState } from "react";
import { getTrendFilmRequest } from "../services/api";
import List from "../components/List";
import { useHistory } from "react-router";

const HomePage = () => {
  const [listOfFilms, setListOfFilms] = useState([]);
  const { push } = useHistory();
  useEffect(() => {
    getTrendFilmRequest()
      .then((data) => setListOfFilms(data))
      .catch((err) => push("/"));
  }, []);
  return <List listOfFilms={listOfFilms} />;
};

export default HomePage;
