import React from "react";

const GenreFilm= { 

    fetchPopular: 'https://api.themoviedb.org/3/movie/popular?api_key=f9ac7a805563a418711063c76bd10794&language=fr&page=1',
    fetchAction: 'https://api.themoviedb.org/3/discover/movie?api_key=f9ac7a805563a418711063c76bd10794&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate',
    fetchComedy: 'https://api.themoviedb.org/3/discover/movie?api_key=f9ac7a805563a418711063c76bd10794&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate',
    fetchHoror: 'https://api.themoviedb.org/3/discover/movie?api_key=f9ac7a805563a418711063c76bd10794&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate',
    fetchRomance: 'https://api.themoviedb.org/3/discover/movie?api_key=f9ac7a805563a418711063c76bd10794&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate',
    fetchDocumentaries: 'https://api.themoviedb.org/3/discover/movie?api_key=f9ac7a805563a418711063c76bd10794&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate',

};

export default GenreFilm