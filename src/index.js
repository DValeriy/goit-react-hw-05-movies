import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// trend   https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>> page
// searchfilm   https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query={} page
//filminfo   https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>
//castinfo   https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>
//reviewsinfo   https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>> page

export const getTrendFilmRequest = async (querry = "lord", page = 2) => {
  axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
  const searchParams = {
    api_key: process.env.REACT_APP_API_KEY,
    page: page,
    // q: querry,
  };
  try {
    const response = await axios(`trending/movie/day?`, {
      params: { ...searchParams },
    });
    // console.log(response);
    // const gallery = response.data.hits;
    // const galleryTotal = response.data.total;
    return response;
    // return { gallery, galleryTotal };
  } catch (error) {
    console.log(error);
    // throw error;
  }
};
getTrendFilmRequest();
