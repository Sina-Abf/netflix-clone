import React from 'react';

const MovieData = ({ movieData }) => {
  return (
    <div className="w-full h-screen text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-screen bg-gradient-to-r from-black" />
        <img
          loading="lazy"
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movieData?.backdrop_path}`}
          alt={movieData?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movieData?.title}</h1>
          <div className="my-4 flex items-center text-gray-400 text-sm gap-x-2">
            <p className="text-gray-400 text-sm border-r border-r-gray-400 px-2">
              {movieData?.release_date.slice(0, 4)}
            </p>
            <div className="border-r border-r-gray-400 px-2">
              <p className=" border-r border-r-gray-400 px-2 border border-gray-300">
                {movieData?.adult ? '+18' : '+13'}
              </p>
            </div>
            <p className="px-2">{movieData?.original_language.toUpperCase()}</p>
          </div>
          <p className="text-gray-400 text-sm">
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {movieData?.overview}
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieData;
