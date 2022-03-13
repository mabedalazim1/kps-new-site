import './about.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllImgCatogeryData } from './../../admin/actions/imgDataByCat'
import React, { useState, useEffect } from 'react'
import Footer from './../../components/footer/Footer'
import ImportantNumber from './../../components/importantNumber/ImportantNumber'
import CoverSubPages from '../../components/coverSubPages/CoverSubPages';
import CertificateSlider from '../../components/slider/CertificateSlider';

const About = () => {
    const dispatch = useDispatch()
    const certificateData = useSelector(satae => satae.imgCatogryData)
    const [certificate, setCertificate] = useState([])



    const fetchData = () => {
        dispatch(getAllImgCatogeryData())
        window.scrollTo(0, 0)
    }

    const testData = () => {
        let data = []
        certificateData.map((item, index) => {
            if (item.imageCatogery.title === "Certificate") {
                data.push({ imgUrl: item.imgUrl, imgDesc: item.imgDesc })
            }
            return false
        }
        )
        setCertificate(data)
    }

    useEffect(() => {
        fetchData()
        document.title = process.env.REACT_APP_PAGE_TITLE_B + " عن المدرسة"
    }, [])
    useEffect(() => {
        if (certificateData && certificateData.length > 0) {
            testData()
        }
    }, [certificateData])

    const title = "مدرستنا"
    const background = {
        background: "url(/assets/images/IMG-Back-22.jpg)"
    }
    return (
        <main className='about-page' >
            <CoverSubPages
                title={ title }
                background={ background }
            />
            <div className="container about-text">
                <p className="main-title">كلمة ترحيب</p>
            </div>
            <div className="welcome">
                <div className="text">
                    <div>
                        <p className="text-icon-right">
                            <i className="fas fa-quote-right"></i>
                        </p>
                        <p className="text-con">
                            أنه من دواعى سرورنا قيامكم بزيارة موقع مدرستنا .. ونرحب بكم أعضاء فى
                            مجتمعنا التعليمي لنعمل سوياً على النهوض بالعملية التعليمية
                            . فرؤيتنا هى إعداد متعلم متميز علمياً و خلقياً منتمِ لوطنه، قادراً على استخدام
                            التكنولوجيا المتاحة.
                            ونتمنى أن نعمل سوياً على النهوض بمجتمعنا ومساعدة أبنانئنا على مواصلة التعلم
                            مدى الحياة .والتزالمهم بالخلق الحسن والتفوق دائماً، وأن تتشكل لديهم القدرة على الإبداع
                            و الابتكار ، ونغرس سوياً فى نفسوسهم الهوية الوطنية .
                            مدير المدرسة &nbsp; أ / &nbsp; أحمد محمد على حسانين
                        </p>
                        <p className="text-icon-left">
                            <i className="fas fa-quote-left"></i>
                        </p>
                    </div>
                </div>
                <img className="about-img" src="/assets/images/about-2.jpg" alt="img" />
            </div>


            <CertificateSlider certificate={ certificate } />
            <ImportantNumber img="/assets/images/IMG_importatnNm-1.jpg" />
            <Footer img="/assets/images/footer-2.jpg"/>
        </main>

    );
}

export default About;
