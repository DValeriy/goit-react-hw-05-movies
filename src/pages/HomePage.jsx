import { useEffect, useState } from "react";
import { getTrendFilmRequest } from "../services/api";
import List from "../components/List";

const HomePage = () => {
  const [listOfFilms, setListOfFilms] = useState([]);
  useEffect(() => {
    getTrendFilmRequest().then((data) => setListOfFilms(data));
  }, []);
  return <List listOfFilms={listOfFilms} />;
};

export default HomePage;
