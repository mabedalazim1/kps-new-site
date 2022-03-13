import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

/// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import './certificate.css'
// import required modules
import { Pagination } from "swiper";
import { useState, useEffect } from "react";
import GroupData from "../../services/groupingData";

export default function CertificateSlider({ certificate }) {

    const [towCertificate, setTowCertificate] = useState([])

    const fetchData = () => {
        setTowCertificate(GroupData.towItems(certificate))
    }
    useEffect(() => {
        fetchData()
    }, [certificate])

    const URL = process.env.REACT_APP_SERVER_URL + "images/"
    return (
        <div className="certificate-slider">
            <div className='sub-title'>
                <p className="main-title">أنشطة مميزة</p>
            </div>
            <div className="certificate-one">
                <Swiper dir="rtl" pagination={ true } modules={ [Pagination] } className="mySwiper">
                    { certificate && certificate.length > 0 &&
                        certificate.map((item, index) => (
                            <SwiperSlide key={ index }>
                                <div className='container certificate-con'>
                                    <img
                                        className='certificate-img'
                                        src={ URL + item.imgUrl }
                                        alt=''
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="certificate-tow">
                <Swiper dir="rtl" pagination={ true } modules={ [Pagination] } className="mySwiper">
                    { towCertificate && towCertificate.length > 0 &&
                        towCertificate.map((items, itemsIndex) => (
                            <SwiperSlide key={ itemsIndex }>
                                { items.map((item, index) => (
                                    <div key={ index }
                                        className='container certificate-con'>
                                        <img
                                            className='certificate-img'
                                            src={ URL + item.imgUrl }
                                            alt=''
                                        />
                                    </div>
                                )) }
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>


        </div>
    );
}
