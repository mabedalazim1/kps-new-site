import React, { useState, useEffect } from 'react'
import SchoolInfo from "./../../components/schoolInfo/SchoolInfo"
import LastNews from "./../../components/lastNews/LastNews"
import ImportantNumber from "./../../components/importantNumber/ImportantNumber"
import ImageSlider from "../../components/navBar/ImageSlider"
import { SliderData as slides } from './../../components/navBar/imgData'
import Footer from "../../components/footer/Footer"
import Testimonials from "../../components/testimonials/Testimonials"
import { getImgListData } from './../../admin/actions/listImagesData'
import { getAllImgCatogeryData } from './../../admin/actions/imgDataByCat'
import { useDispatch, useSelector } from 'react-redux' 
const Home = () => {
  const dispatch = useDispatch()
  const imgData = useSelector(satae => satae.imgCatogryData)
  const [testimonials, setTestimonials] = useState([])

  const fetchData = () => {
    dispatch(getImgListData(2))
    dispatch(getAllImgCatogeryData())
    window.scroll(0, 0)
  }

  const testData = () => {
    let testimonialsData = []
    imgData.map((item, index) => {
      if (item.imageCatogery.title === "Testimonials") {
        testimonialsData.push({ imgUrl: item.imgUrl, imgDesc: item.imgDesc })
      }
      return false
    }
    )
    setTestimonials(testimonialsData)
  }

  useEffect(() => {
    fetchData()
    document.title = process.env.REACT_APP_PAGE_TITLE
  }, [])
  useEffect(() => {
    if (imgData && imgData.length > 0) {
      testData()
    }
  }, [imgData])
  return (
    <>
      <div className='slider-con'>
        <img src='assets/images/logo.png' alt='logo' className='logo' />
        <ImageSlider slides={ slides } />
      </div>
      <SchoolInfo />
      <LastNews />
      <ImportantNumber />
      <Testimonials testimonials={ testimonials } />
      <Footer />
    </>
  )
}
export default Home;


