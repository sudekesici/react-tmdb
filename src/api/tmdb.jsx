import axios from "axios";

const API_KEY = "374350c1766c4e09904ee017a349b69e";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
