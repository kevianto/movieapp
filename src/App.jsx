import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import NavBar from './Components/Common/NavBar'

function App() {
  

  return (
  <div className="bg-violet-500">
    <NavBar/>
<Router>
  <Routes>
  <Route path="/" element={<Home />} />

 <Route path="/movie/:id" element={<About />} />
  </Routes>
</Router>
  </div>

    
  )
}

export default App
