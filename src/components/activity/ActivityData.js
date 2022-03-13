import ImportantNumber from '../importantNumber/ImportantNumber';
import Footer from '../footer/Footer';
import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import CoverSubPages from '../../components/coverSubPages/CoverSubPages';
import { getImgCatogeryData } from './../../admin/actions/imgDataByCat'

const ActivityData = () => {
    const URL = process.env.REACT_APP_SERVER_URL + "images/"
    const imgData = useSelector(state => state.imgCatogryData)
    const dispatch = useDispatch()
    const { id } = useParams() || 0
    const activityId = id.slice(1)

    const fetchData = () => {
        dispatch(getImgCatogeryData(activityId))
        window.scroll(0, 0)
    }

    useEffect(() => {
        document.title = process.env.REACT_APP_PAGE_TITLE_B + "أنشطة المدرسة"
    })
    useEffect(() => {
        fetchData()
    }, [])


    const title = "أنشطة المدرسة"
    const background = {
        background: "url(/assets/images/school-info.jpg)"
    }
    return (
        <main className='activity-page' >
            <CoverSubPages
                title={ title }
                background={ background }
            />
            <div className="container activity-text">
                <div className='title-con'>
                    { imgData && imgData.length > 0 &&
                        <p className='main-title'>{ imgData[0].imageCatogery.title }</p>
                    }
                </div>
                <div className='activity-con'>
                    { imgData && imgData.length > 0
                        && imgData[0].imageCatogery.title !== "Testimonials"
                        ?
                        imgData.map((item) => (
                        <div
                            key={ item.id }
                        >
                            <img
                                className='activity-img active-one'
                                src={ URL + item.imgUrl } alt="title"
                            />
                            <p className='active-one'>
                                { item.title }
                            </p>
                        </div>
                    ))
                        : <>
                            <img
                                className='activity-img'
                                src='/assets/images/loading.gif' alt='' />

                        </>
                    }
                </div>
            </div>
            <ImportantNumber img="/assets/images/IMG_importatnNm-4.jpg" />
            <Footer img="/assets/images/footer-4.jpg" />
        </main>
    );
}

export default ActivityData;
