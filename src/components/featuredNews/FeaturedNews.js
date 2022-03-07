import './featuredNews.css'
import Slider from '../slider/Slider';
import SliderThree from '../slider/SliderThree';
import { useSelector } from "react-redux";

const FeaturedNews = () => {
  const catItems = useSelector(state => state.imgListData)

  return (
    <section className="featured-news">
      <div className="featured-news three">
        <Slider catItems={ catItems } />
      </div>
      <div className="featured-news wider">
        <SliderThree catItems={ catItems }/>
      </div>
    </section>
  )
}

export default FeaturedNews;