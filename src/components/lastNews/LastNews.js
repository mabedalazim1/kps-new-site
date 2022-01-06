import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import useWindowSize from '../../hooks/useWindowSize'
import './lastNews.css'
import Buttongroup from '../buttons/ButtonGroup'

const LastNews = () => {

  const {width} = useWindowSize()
  const [activeTab, setActiveTab] = useState(0)

  const animatProps = useSpring({
    from: { opacity: 0, y: 200 },
    to: { opacity: 1, y: 0 },
    config: { duration: 1000 }
 })
  const handleActiveTab=(index) => {
    setActiveTab(index)     
  }
  const titles = [
    "أخبار مميزة",
    "مناسبات",
    "مسابقات",
    "تكريم الظلاب"
  ]
  
  return (
    <>
      <div className='last-news'>
        <div
          className='last-news-img'
          style={{
            backgroundImage: `url("/assets/images/banner5.jpg")`
          }}
        >
          <div className='container tabs'>
            <Buttongroup
              buttons={ titles }
              handleActiveTab={ handleActiveTab}/>
          </div>
          <h2 className='main-title'>أخر الأخبار</h2>
        </div>
      </div>
      <div className='tab'>
        { width < 768 ?
          (<>
            <div>{titles[0]} </div>
            <div>{titles[1]} </div>
            <div>{titles[2]} </div>
            <div>{ titles[3] } </div>
          </>
            
        ):
          <>
            {activeTab=== 0 && (<div>{titles[0]} </div>)}
            {activeTab=== 1 && (<div>{titles[1]} </div>)}
            {activeTab=== 2 && (<div>{titles[2]} </div>)}
            {activeTab=== 3 && (<div>{titles[3]} </div>)}
          </>
        }
      </div>

    </>
  )
}

export default LastNews
