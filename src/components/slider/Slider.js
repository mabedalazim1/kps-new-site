
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


// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

const Slider = ({ catItems }) => {
  
  
  const URL = process.env.REACT_APP_SERVER_URL + "images/"
  return (
    <>
      <Swiper dir="rtl" spaceBetween={ 10 } navigation={ true }
        className="mySwiper">
        { catItems && catItems.length > 0 && catItems[0].imageCatogeries.map((item, index) => (
         
          <SwiperSlide key={ index }>

            <div key={ index } className="featured-news-item">
              <div className="img-desc">
                <span><h5>{ item.catDesc } </h5></span>
              </div>
              <div className="featured-title">
                <h2>{ item.title }</h2>
              </div>
              <div className="image">
                <img src={ URL + item.imageData[0].imgUrl } alt="" />
              </div>
               
            </div>
          </SwiperSlide>
            
        )) }

        { catItems.length === 0 &&
          <SwiperSlide>
           <div className="featured-news-item">
        <div className="img-desc">
            <span><h5> جارى التحميل</h5></span>
          </div>
          <div className="featured-title">
            <h2>أخر الأخبار</h2>
          </div>
          <div className="image">
            <img src='/assets/images/loading.gif' alt='' />
          </div>
         
        </div>
          </SwiperSlide>
       
          }
       
      </Swiper>
    </>
  )
}

export default Slider