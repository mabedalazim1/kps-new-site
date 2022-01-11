
import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"

import "./styles.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
  EffectFade,Navigation,Pagination
} from 'swiper';

import {featuredData} from './../../data/data'
// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

const Slider = ()=> {
  

  return (
    <>
    <Swiper  dir="rtl" spaceBetween={10}  navigation={true}
      className="mySwiper">
        { featuredData.map((items, itemsIndex) => (
          <SwiperSlide key={ itemsIndex }>
            { items.map((item, index) => (
                 <div key={index} className="featured-news-item"> 
              <div className="featured-title">
                <h2>{ item.imgTitle }</h2>
              </div>
              <div  className="image">
                 <img src={item.imgUrl} alt="" />
              </div>
              <div  className="img-desc">
                    <span><h5>{item.imgDesc} </h5></span>
                    </div>
              </div>
            ))}
            
           
          </SwiperSlide>
        ))}
       
  </Swiper>
    </>
  )
}
export default Slider