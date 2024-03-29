import React from 'react'

function Backend() {
  return (
    <div>
        <div className="skills_content ">
            <h4 className="skill_title">Frontend Developer</h4>
            <div className="skills_box">
                <div className="skill_group"> 
                <div className="skill_data">
                     <i class="fa-solid fa-certificate"></i>
                  <div>
                        <h4 className="skills_title">MYSQL</h4>
                        <span className='skills_name'>Basic</span>
                  </div>
                </div>
                </div>
                <div className="skill_group"> 
                <div className="skill_data">
                     <i class="fa-solid fa-certificate"></i>
                  <div>
                        <h4 className="skills_title">SQL</h4>
                        <span className='skills_name'>Intermediate</span>
                  </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend
