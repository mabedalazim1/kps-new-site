
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
import { useEffect, useState } from "react";
import GroupData from './../../services/groupingData'

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);


const SliderThree = ({ catItems }) => {
    
  const [data, setData] = useState([])
  const URL = process.env.REACT_APP_SERVER_URL + "images/"
 
  const addData = () => {
    const data = GroupData.third(catItems)
    setData(data)
    }

  useEffect(() => {
    addData()
  },[catItems])
  console.log(data)
  return (
    <>
      <Swiper dir="rtl" spaceBetween={ 10 } navigation={ true }
        className="mySwiper">
        { data.length === 0 &&
          <SwiperSlide>
          <div className="featured-news-item">
           
            <div className="image">
                <img src="/assets/images/loading.gif" alt="" />
                
              </div>
          </div>
          </SwiperSlide> }
        { data && data.map((items,index) =>
            <SwiperSlide key={ index}>
              { items.map((item, index) => (
                <div key={ index } className="featured-news-item">
              <div key={ index }>
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
              </div>
            ))             
            } </SwiperSlide>
          )}
        </Swiper>
    </>
  )
}

export default SliderThree