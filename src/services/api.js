import axios from "axios";
axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

// trend   https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>
// searchfilm   https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query={}
//filminfo   https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>
//castinfo   https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>
//reviewsinfo   https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>

const getTrandFilmRequest = () => {
  return axios(``).then((resp) => console.log(resp));
};
getTrandFilmRequest();
