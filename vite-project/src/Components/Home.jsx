import React from 'react'
import Social from './Pages/Social'
import Datas from './Pages/Data'
import Scrolldown from './Pages/Scrolldown'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Services from './Pages/Services'
import Qualification from './Pages/Qualification'
import Testimonial from './Pages/Testimonial'
import Contact from './Pages/Contact'
import Footer from './Footer'
function Home() {
  return (
    <div>
      <section className='home section mb-5' id='home'>
        <div className="home_container container  grid mt-5">
          <div className="row mt-5">
            <div className="col-lg-4 col-sm-6 "> <Social /></div>
            <div className="col-lg-4 col-sm-6 "> <Datas /></div>
            <div className="col-lg-4 col-sm-12 "> <div className="home_img"></div></div>
          </div>
          <Scrolldown />
        </div>
      </section>

      <section className='about_section'>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Testimonial/>
        <Contact/>
      
      </section>
     
    </div>
    
  )
}

export default Home
