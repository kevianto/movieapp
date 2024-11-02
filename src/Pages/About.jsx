import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function About() {
  const [data, setData] = useState(null); // Set an initial state to `null` to avoid undefined errors
  const { id } = useParams();
  const [title, setTitle] = useState('');

  const handleChange = (e) => { // Corrected function name
    setTitle(e.target.value);
    console.log(title);
  };

  const OMDBLink = import.meta.env.VITE_PUBLIC_OMDB_URL;
  const APIkey = import.meta.env.VITE_OMDB_API;

  async function fetchmovie() {
    const response = await fetch(`${OMDBLink}/?i=tt${id}&apikey=${APIkey}`);
    const movieData = await response.json();
    setData(movieData);
    console.log(movieData);
  }

  async function fetchmovie2() {
    const response = await fetch(`${OMDBLink}/?t=${title}&apikey=${APIkey}`);
    const movieData = await response.json();
    setData(movieData);
    console.log(movieData);
  }

  useEffect(() => {
    if (id) {
      fetchmovie(); // Fetch movie by ID if `id` exists
    } else if (title) {
      fetchmovie2(); // Fetch movie by title if `title` is set
    }
  }, [id, title]); // Adding `id` and `title` as dependencies

  return (
    <div
      className='max-w-full mx-auto my-12 p-8 gap-8 flex flex-col items-center justify-center min-h-screen'
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/movie-film-strip-blue-background_1017-33458.jpg?semt=ais_hybrid')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='flex flex-col items-center gap-4'>
        <input
          type='text'
          className='bg-blue-200 p-4 rounded-md text-lg text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400'
          onChange={handleChange} // Corrected to use `handleChange`
          placeholder='Search by title'
        />
        <button
          className='bg-lime-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200'
          onClick={fetchmovie2}
        >
          Search Movie
        </button>
      </div>
      
      {data && (
        <div className='flex flex-col items-center mt-8 text-center max-w-md'>
          <p className='text-pink-500 font-bold text-xl my-2 '>{data?.Title}</p>
          <p className='text-gray-200 text-base'>{data?.Actors}</p>
          <p className='text-gray-200 text-base'>{data?.Genre}</p>
          <img src={data?.Poster} alt="Movie poster" className='w-full max-h-96 rounded-md shadow-lg my-4' />
          
          <p className='text-gray-200 text-base'>{data?.Plot}</p>
        </div>
      )}
    </div>
  );
}

export default About;
