import axios from "axios";
// ^\?[a-z]*=

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
const setParams = () => ({ api_key: process.env.REACT_APP_API_KEY });

export const getTrendFilmRequest = async () => {
  // trend   https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>
  try {
    const response = await axios(`trending/movie/day?`, {
      params: { ...setParams() },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
    // throw error;
  }
};

export const getFilmInfo = async (id) => {
  //filminfo   https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>
  try {
    const response = await axios(`movie/${id}?`, {
      params: { ...setParams() },
    });
    return response;
  } catch (error) {
    console.log(error);
    // throw error;
  }
};

export const getFilmCastInfo = async (id) => {
  //castinfo   https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>
  try {
    const response = await axios(`movie/${id}/credits?`, {
      params: { ...setParams() },
    });
    return response.data.cast;
  } catch (error) {
    console.log(error);
    // throw error;
  }
};

export const getFilmReviewInfo = async (id) => {
  //reviewsinfo   https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>
  try {
    const response = await axios(`movie/${id}/reviews?`, {
      params: { ...setParams() },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
    // throw error;
  }
};

export const searchFilms = async (query) => {
  // searchfilm   https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query={}
  try {
    const response = await axios(`search/movie?`, {
      params: { ...setParams(), query },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
    // throw error;
  }
};
