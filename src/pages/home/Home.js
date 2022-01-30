import SchoolInfo from "./../../components/schoolInfo/SchoolInfo"
import LastNews from "./../../components/lastNews/LastNews"
import ImportantNumber from "./../../components/importantNumber/ImportantNumber"
import ImageSlider from "../../components/navBar/ImageSlider"
import { SliderData as slides } from './../../components/navBar/imgData'
import Footer from "../../components/footer/Footer"
const Home = () => {
    return (
        <>
        <div className='slider-con'>
        <img src='assets/images/logo.png' alt='logo' className='logo' />
          <ImageSlider slides={slides} />
        </div>
            <SchoolInfo />
            <LastNews />
            <ImportantNumber />
           <Footer />
    </>
    )
}
export default Home;


