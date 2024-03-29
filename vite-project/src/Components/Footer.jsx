import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer_container container">
                    <h1 className="footer_title">Pankaj</h1>

                    <ul className="footer_list">
                        <li>
                            <a href="#about" className='footer_link'>About</a>
                        </li>

                        <li>
                            <a href="#portfolio" className='footer_link'>Projects</a>
                        </li>

                        <li>
                            <a href="#testimonials" className='footer_link'>Testimonials</a>
                        </li>
                    </ul>

                    <div className="footer_social">
                        <a href="https://www.instagram.com/accounts/login/" className="footer_social-link">
                            <i class="fa-brands fa-square-instagram text-white"></i>
                        </a> <br />
                        <a href="https://github.com/Pankajjangid599/e-commerce.git" className="footer_social-link">
                            <i class="fa-brands fa-github text-white"></i>
                        </a> <br />
                        <a href="" className="footer_social-link">
                            <i class="fa-brands fa-square-whatsapp text-white"></i>
                        </a>

                    </div>
                    <span className='footer_copy'>@#169;Crypticalcoder. All rights reserved</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer
