import React from 'react'
import "./testimonial.css"
import { Datas } from './Datas'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Testimonial() {
  return (
    <div>
        <div>
        <h2 className="section_title text-center mt-5 ">My clients & Trainer say</h2>
           <div className="section_subtitle text-center ">Testimonial</div>
        </div>
        <Swiper className="testimonial container section   pt-5 "
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
             
              }}
              pagination={{
                clickable: true,
                autoplay:true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
    
        >
          
           <div className="testimonial_container ">
           {Datas.map(({id,image,title,description})=>{
                        return(
                            <>
                            <SwiperSlide className="testimonial_card" key={id}>
                                <img src={image}   alt="" className='testimonial_img mx-1'/>
                                <h3 className="testimonial_name px-3">{title}</h3>
                                <p className="testimonial_description">{description}</p>
                            </SwiperSlide>
                            </>
                        )
                    })}
           </div>
        </Swiper>
    </div>
  )
}

export default Testimonial
