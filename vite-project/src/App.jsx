import Navbar from './Components/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/Pages/About';
import Skills from './Components/Pages/Skills';
import Contact from './Components/Pages/Contact';
import Services from './Components/Pages/Services';
import Footer from './Components/Footer';
function App() {

  return (
    <>
      
        <BrowserRouter>
        <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
