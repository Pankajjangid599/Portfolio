
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_thm78vv', 
        'template_2xefqhc', 
        form.current, {
        publicKey: '9iQGB8WoVjt4Qh6a2',
      })
        e.target.reset();
  };
  return (
    <div>
      <section className="contact section" id='contact'>
      <h2 className="section_title text-center mt-5 ">Get in touch</h2>
           <div className="section_subtitle text-center ">Contact me</div>

           <div className="contact_container container d-grid mt-5">
              <div className="contact_content">
                <h3 className="contact_title pb-3 ">Talk to me</h3>

                <div className="contact_info">
                  <div className="contact_card">
                      <i class="fa-solid fa-envelope-circle-check"></i>
                      <div className="contact_card-title">Email</div>
                      <span className="contact_card-data">pankajjangid599@gmail.com</span>
                      <a href="mailto:pankajjangid599@gmail.com" className="contact_button">
                        write me <i class="fa-solid fa-arrow-right-long arrowright"></i>
                      </a>
                  </div>

                  <div className="contact_card">
                       <i class="fa-brands fa-square-whatsapp"></i>
                      <div className="contact_card-title">Whatsapp</div>
                      <span className="contact_card-data">9680713829</span>
                      <a href="https://api.whatsapp.com/send?
                        phone=9680713829&text=Hello, more information!" className="contact_button">
                        write me <i class="fa-solid fa-arrow-right-long"></i>
                      </a>
                  </div>

                  <div className="contact_card">
                     <i class="fa-brands fa-square-instagram"></i>
                      <div className="contact_card-title">Instagram</div>
                      <span className="contact_card-data">Pankajjangid599</span>
                      <a href="" className="contact_button">
                        write me <i class="fa-solid fa-arrow-right-long"></i>
                      </a>
                  </div>
                </div>
              </div>

              <div className="contact_content">
                <h3 className="contact_title pb-3">Write me your project</h3>

                <form form ref={form} onSubmit={sendEmail} className='contact_form'>
                    <div className="contact_form-div">
                      <label  className='contact_form-tag'>Name</label>
                      <input 
                      type="text" 
                      name='name' 
                      className='contact_form-input' 
                      placeholder='Insert your name' />
                    </div>

                    <div className="contact_form-div">
                      <label  className='contact_form-tag'>Mail</label>
                      <input 
                      type="email" 
                      name='email' 
                      className='contact_form-input' 
                      placeholder='Insert your email' />
                    </div>

                    <div className="contact_form-div contact_form-area">
                      <label  className='contact_form-tag'>Project</label>
                      <textarea name="project" id="" cols="30" rows="10"
                       className='contact_form-input' placeholder='write your project...'></textarea>
                    </div>

                    <button className="btn bg-dark text-white px-2 mt-3 sayhello ">Send Message<i class="fa-solid fa-paper-plane px-2"></i></button>
                </form>
              </div>
           </div>
      </section>

    </div>
  )
}

export default Contact
