import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'

function Skills() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col text-center">
            <h2 className="about_title">Skills</h2>
            <div className="about_subtitle">My technical level</div>
          </div>
        </div>
      </div>
      <div className="container mb-5 mt-5">
        <div className="row">
          <div className="col-lg-6 col-sm-12 ">
              <Frontend/>
          </div>
          <div className="col-lg-6 col-sm-12">
            <Backend/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
