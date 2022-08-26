import React, { useEffect, useState } from 'react';
import MovieData from '../components/MovieData';
import { KEY } from '../Requests';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  const { movieName } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${movieName}&&page=1&include_adult=false`
      )
      .then((res) => {
        setMovie(res.data.results);
      });
  }, [movieName]);

  console.log(movie);

  return <MovieData movieData={movie[0]} />;
};

export default MovieInfo;
