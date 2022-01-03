const API_KEY = "4c983327de51a113d9b360d6c7d2e50b"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&languange=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumetaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

}
export default requests;
