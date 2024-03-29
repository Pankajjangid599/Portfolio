import React from 'react'
import { Form } from 'react-router-dom'
import aboutimg from "../../assets/00.jpg"
import Info from './Info'
import CV from "../../assets/Cv.pdf"

function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5 pb-5">
            <h2 className='section_title'>About Me</h2>
            <span className='section_subtitile text-center'>My introduction</span>
          </div>
          <div className="col-lg-5 col-sm-12 ">
            <div className="about_img">
              <img src={aboutimg}  alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-sm-12 mt-5  text-center  ">
            <div className="about_data  ">
              <Info />
              <p className="about_des pt-3">Front End Developer,I Create Web page
                With ui / ux user <br /> interface ,I have 3 month experience and my
                office master <br />  is happy with the project i create
              </p>

              <a download="" href={CV} className='btn button bg-dark text-light py-3 mt-3'>Download CV<i class="fa-solid fa-file-pdf px-2 text-info"></i></a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About
