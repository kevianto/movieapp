import React, { useState } from 'react'
import Button from '../Components/Common/Button'



function Home() {
  const [Movieid, setMovieid]=useState("1")
    const [Error,setError] =useState()
    
    
    const Handchange =(e)=> {
      setMovieid(Number(e.target.value))
      console.log(Number)
    }
      
    
  return (
 
    <div className=' bg-violet-500 max-w-full mx-auto my-12 p-8 gap-8 flex flex-col items-center justify-center min-h-screen'
    >
      
      <h1 className="text-yellow-400 font-extrabold animate-bounce">Welcome to Kevian`s movie watching site enjoy...</h1>
      <p className="text-lime-600 animate-pulse">the app is meant to provide more informatin about the plot, <br /> year of production, and actors of movies and series <br /> which are in the IMBD database</p>
      <Button title="Explore 👉👉 " color="red" sizes="small"
      id={Movieid}/>
    
    </div>
  )
}

export default Home
