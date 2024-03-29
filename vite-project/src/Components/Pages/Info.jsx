import React from 'react'

function Info() {
  return (
    <div>
       <div className="container-fluid p-0 ">
        <div className="row box_itme">
            <div className="  about_box">
                <i class="fa-solid fa-award about_icon"></i>
                <h2 className="about_title">Experience</h2>
                <div className="about_subtitle">3 Month Internship</div>
            </div>
            <div className=" about_box">
                <i class="fa-solid fa-briefcase about_icon"></i>
                <h2 className="about_title">Completed</h2>
                <div className="about_subtitle">5 Static Project & 2 Dynamic Project</div>
            </div>
            <div className=" about_box">
                <i class="fa-solid fa-headset about_icon"></i>
                <h2 className="about_title">Support</h2>
                <div className="about_subtitle">Online 24/7</div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Info
