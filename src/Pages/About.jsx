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
    fetchmovie()
  }, [])
  
  return (
    <div>
      hello movie {id}, {APIkey}
      <p>{data?.Title}</p>
      <img src={data?.Poster} alt="Movie poster" />
      <input type='text' className='bg-blue-200 p-4 text=lg' onChange = {e => handleCange(e)} placeholder='search by title' />
      <button className='bg-blue-500 text-white p-4' onClick={fetchmovie2}>Search movie</button>
    </div>
  )
}

export default About
