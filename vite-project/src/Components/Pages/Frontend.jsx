import React from 'react'
import './Skill.css'
function Frontend() {
    return (
        <div>
            <div className="skills_content ">
                <h4 className="skill_title">Frontend Developer</h4>
                <div className="skills_box">
                    <div className="skill_group">
                        <div className="skill_data">
                            <i class="fa-solid fa-certificate"></i>
                            <div>
                                <h4 className="skills_title">HTML</h4>
                                <span className='skills_name'>Basic</span>
                            </div>
                        </div>
                        <div className="skill_data">
                            <i class="fa-solid fa-certificate"></i>
                            <div>
                                <h4 className="skills_title">CSS</h4>
                                <span className='skills_name'>Advance</span>
                            </div>
                        </div>
                        <div className="skill_data">
                            <i class="fa-solid fa-certificate"></i>
                            <div>
                                <h4 className="skills_title">JavaScript</h4>
                                <span className='skills_name'>Intermediate</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill_group">
                        <div className="skill_data">
                            <i class="fa-solid fa-certificate"></i>
                            <div>
                                <h4 className="skills_title">Bootstrap</h4>
                                <span className='skills_name'>Intermediate</span>
                            </div>
                        </div>
                        <div className="skill_data">
                            <i class="fa-solid fa-certificate"></i>
                            <div>
                                <h4 className="skills_title">Git</h4>
                                <span className='skills_name'>Intermediate </span>
                            </div>
                        </div>
                        <div className="skill_data">
                            <i class="fa-solid fa-certificate"></i>
                            <div>
                                <h4 className="skills_title">React</h4>
                                <span className='skills_name'>Intermediate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend
