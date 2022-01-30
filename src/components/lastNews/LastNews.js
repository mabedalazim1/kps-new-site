
import './lastNews.css'
import FeaturedNews from '../featuredNews/FeaturedNews'

const LastNews = () => {


  return (
    <>
      <div className='last-news'>
        <div
          className='last-news-img'
          style={ {
            backgroundImage: `url("/assets/images/banner13.jpg")`
          } }
          >
            <h2 className='main-title'>أخر الأخبار</h2>
        </div>
        <div className='tab'>
          <FeaturedNews />
        </div>
        </div>
    </>
  )
}

export default LastNews
