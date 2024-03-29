import React from 'react'
import './QUalification.css'
import { useState } from 'react'

function Qualification() {
    const [togglestate, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <div>
            <section className="qualification section mt-5">
                <h2 className="section_title text-center pt-3 ">Qualification</h2>
                <div className="section_subtitle text-center pb-4">My personel journey</div>
                <div className="qualification_container container">
                    <div className="qualification_tab d-flex">
                        <div className={togglestate == 1 ? "qualification_button qualification_active button--flex"
                            : "qualification_button button--flex"}  onClick={()=>toggleTab(1)} >
                            <i class="fa-solid fa-graduation-cap"></i> Education
                        </div>

                        <div className={togglestate == 2 ? "qualification_button qualification_active button--flex"
                            : "qualification_button button--flex"}  onClick={()=>toggleTab(2)}>
                            <i class="fa-solid fa-briefcase "></i> Experience
                        </div>
                    </div>

                    <div className="qualification_sections">
                        <div 
                             className={togglestate === 1 ? "qualification_content qualification_content-active" :
                                  "qualification_content "}
                                 
                                  >
                            <div className="qualification_data">
                                <div>
                                    <h3 className="qualification_title">12th standerd</h3>
                                    <span className="qualification_subtitle">TCA-SURAJGARH</span>
                                    <div className="qualification_calender">
                                        <i class="fa-regular fa-calendar"></i> 2017
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>

                            <div className="qualification_data">

                                <div></div>
                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification_title">CORE JAVA</h3>
                                    <span className="qualification_subtitle">OILAB-institute</span>
                                    <div className="qualification_calender">
                                        <i class="fa-regular fa-calendar"></i> 2023 -Last Year
                                    </div>
                                </div>
                            </div>

                            <div className="qualification_data">
                                <div>
                                    <h3 className="qualification_title">Bachelor of Arts.</h3>
                                    <span className="qualification_subtitle">PDSU-Sikar</span>
                                    <div className="qualification_calender">
                                        <i class="fa-regular fa-calendar"></i> 2023
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>

                            <div className="qualification_data">

                                <div></div>
                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification_title">React js Developer</h3>
                                    <span className="qualification_subtitle">OILAB-institute</span>
                                    <div className="qualification_calender">
                                        <i class="fa-regular fa-calendar"></i> 2023
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Qualification
