// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function TestimonilsSlider({ testimonials }) {
    const URL = process.env.REACT_APP_SERVER_URL + "images/"
    return (
        <div className="testimonils-slider">
             <Swiper dir="rtl" pagination={ true } modules={ [Pagination] } className="mySwiper">
            { testimonials && testimonials.length > 0 && 
                testimonials.map((item, index) => (
                    <SwiperSlide key={ index}>
                    <div className='container testimonials-con'>
                        <img
                            className='testimonials-img'
                            src={URL + item.imgUrl}
                            alt=''
                        />
                        <div className="testimonials-text">
                            <p className='text-icon-right'>
                                <i className='fas fa-quote-right'></i>
                            </p>
                            <p>
                                {item.imgDesc}
                            </p>
                            <p className='text-icon-left'>
                                <i className='fas fa-quote-left'></i>
                            </p>
                        </div>

                    </div>
                </SwiperSlide>
                ))
                }
                { testimonials.length=== 0 && 
                            <SwiperSlide>
                            <div className='container testimonials-con'>
                                <img
                                    className='testimonials-img'
                                    src="/assets/images/loading.gif"
                                    alt=''
                                />
                                <div className="testimonials-text">
                                    <p>
                                        جارى التحميل ...
                                    </p>
                                </div>
        
                            </div>
                        </SwiperSlide>
                }
           
               
            </Swiper>
        </div>
    );
}
