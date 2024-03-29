import React from 'react'
import './Services.css'
import { useState } from 'react'
function Services() {
  const [togglestate, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <>
      <section className="services section">
        <h2 className="section_title text-center pt-3 ">Services</h2>
        <div className="section_subtitle text-center pb-4">What i offer</div>
        <div className="services_container container grid">
          <div className="services_content">
            <div>
              <i class="fa-regular fa-floppy-disk services_icon"></i>
              <h3 className="service_title">Product <br />Designer</h3>
            </div>
            <span className="services_button" onClick={() => toggleTab(1)}>
              View More
              <i class="fa-solid fa-arrow-right"></i></span>

            <div className={togglestate === 1 ? "services_modal active-modal" : "services_modal"}>
              <div className="services_modal-content">
                <i class="fa-solid fa-xmark" onClick={() => toggleTab(0)}></i>

                <h4 className="services_modal-title">Product  Designer</h4>
                <p className="services_modal-desc">Service with more than 3 month
                  experience.Providing Quality work to clint and companies
                </p>

                <ul className="services_modal-service grid  p-0">
                  <li className="service_modal-service">
                    <i class="fa-regular fa-circle-check"></i>
                    <p className="services_modal-info">I develop the user interface.</p>
                  </li>
                  <li className="service_modal-service">
                    <i class="fa-regular fa-circle-check"></i>
                    <p className="services_modal-info">Web page development.</p>
                  </li>
                  <li className="service_modal-service">
                    <i class="fa-regular fa-circle-check"></i>
                    <p className="services_modal-info">I create ux element interactions.</p>
                  </li>
                  <li className="service_modal-service">
                    <i class="fa-regular fa-circle-check"></i>
                    <p className="services_modal-info">I position your company brand.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services_content">
            <div>
              <i class="fa-solid fa-code  services_icon"></i>
              <h3 className="service_title">Ui/Ux <br />Designer</h3>
            </div>
            <span className="services_button" onClick={() => toggleTab(2)}>View More
              <i class="fa-solid fa-arrow-right"></i> <br />
            </span>

            <div className={togglestate === 2 ? "services_modal active-modal" : "services_modal"}>
              <div className="services_modal-content">
                <i class="fa-solid fa-xmark" onClick={() => toggleTab(0)}></i>
                <h3 className="services_modal-title">Ui/Ux Designer</h3>
                <p className="services_modal-desc">Service with more than 3 month
                  experience.Providing Quality work to clint and companies
                </p>

                <ul className="services_modal-service d-grid p-0">
                  <li className="service_modal-service">
                    <i class="fa-regular fa-circle-check"></i>
                    <p className="services_modal-info">I develop the user interface.</p>
                  </li>
                  <li className="service_modal-service">
                    <i class="fa-regular fa-circle-check"></i>
                    <p className="services_modal-info">Web page development.</p>
                  </li>
                  <li className="service_modal-service">
                    <i class="fa-regular fa-circle-check"></i>
                    <p className="services_modal-info">I create ux element interactions.</p>
                  </li>
                  <li className="service_modal-service">
                    <i class="fa-regular fa-circle-check"></i>
                    <p className="services_modal-info">I position your company brand.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
