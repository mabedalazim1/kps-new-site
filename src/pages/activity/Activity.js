import './activity.css'
import React, { useState } from 'react'
import ImportantNumber from '../../components/importantNumber/ImportantNumber';
import Footer from '../../components/footer/Footer';
import CoverSubPages from '../../components/coverSubPages/CoverSubPages';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getImgListData } from './../../admin/actions/listImagesData'

const Activity = () => {


    const activity = useSelector(state => state.imgListData)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const URL = process.env.REACT_APP_SERVER_URL + "images/"

    const fetchData = () => {
        dispatch(getImgListData(2))
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        document.title = process.env.REACT_APP_PAGE_TITLE_B + "أخر الأخبار"
    })
    useEffect(() => {
        fetchData()
    }, [])

    const handleClick = (item) => {
        navigate("/activity:" + item.id)
    }

    const title = "أخر الأخبار"
    const background = {
        background: "url(/assets/images/activity.jpg)"
    }
    return (
        <main className='activity-page' >

            <CoverSubPages
                title={ title }
                background={ background }
            />
            <div className="container activity-text">
                <div className='title-con'>
                     <p className='main-title'>أنشطة الطلاب</p>
                </div>

                <div className='activity-con'>
                    { activity && activity.length > 0 ? activity[0].imageCatogeries.slice(0).reverse().map((item, index) => (
                        <div
                            key={ index }>

                            <img
                                onClick={ () => handleClick(item) }
                                className='activity-img'
                                src={ URL + item.imageData[0].imgUrl } alt="title" />
                            <p onClick={ () => handleClick(item) }>
                                { item.title }
                            </p>
                        </div>
                    ))
                        :
                        <div>
                             <img src='/assets/images/loading.gif' alt=''/>
                        </div>
                    }
                </div>


            </div>
            <ImportantNumber img="/assets/images/IMG_importatnNm-3.jpg" />
            <Footer img="/assets/images/footer-3.jpg" />
        </main>
    );
}

export default Activity;
