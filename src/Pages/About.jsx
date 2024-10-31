import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function About() {
  const [data, setdata]=useState()
  const {id}=useParams()
  const [title, setTitle] = useState('')
  const handleCange =(e) => {
    setTitle(e.target.value)
    console.log(title)
  }
  console.log(id)
  const OMDBLink=import.meta.env.VITE_PUBLIC_OMDB_URL
  const APIkey=import.meta.env.VITE_OMDB_API
  console.log(OMDBLink,APIkey)
  // const url=
  async function fetchmovie() {
    const response= await fetch(`${OMDBLink}/?i=tt${id}&apikey=${APIkey}`)
    const data = await response.json()
    setdata(data)
    console.log(data)
  }
  async function fetchmovie2() {
    const response= await fetch(`${OMDBLink}/?t=${title}&apikey=${APIkey}`)
    const data = await response.json()
    setdata(data)
    console.log(data)
  }
  useEffect(()=>{
    fetchmovie2()
  }, [])
  
  return (
    <div className='max-w-[55%] mx-auto my-45 p-8 gap-11 items-center justify-center max-h-[40%]'
    style={{
      backgroundImage: "url('https://img.freepik.com/free-vector/movie-film-strip-blue-background_1017-33458.jpg?semt=ais_hybrid')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh'
    }}>
     
      
      
      
      <input type='text' className='bg-blue-200 p-4 text=lg' onChange = {e => handleCange(e)} placeholder='search by title' />
      <button className='bg-blue-500 text-white p-4' onClick={fetchmovie2}>Search movie</button>
      <img src={data?.Poster} alt="Movie poster" className='my-45'/>
      <p className='text-red-500 text-bold'>{data?.Title}</p>

    </div>
  )
}

export default About
