import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import MoreButton from '../buttons/MoreButton'
import './imageSlider.css'

function ImageSlider ({ slides }) {
  const [current, setCurrent] = useState(false)
  const [count, setCount] = useState(0)
  const textProps = useSpring({
    from: { opacity: 0, y: 200 },
    to: { opacity: 1, y: 0 },
    config: { duration: 2000 }
  })
  const btnProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2500 }
  })

  useEffect(() => {
    let timer = setInterval(() => {
      current ? setCount(1) : setCount(0)
      setCurrent(!current)
    }, 5000)

    return () => clearInterval(timer)
  }, [current, count])

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <>
      <section className='slider'>
        <div
          className='backGrouand'
          style={{
            backgroundImage: `url(${slides[count].image})`
          }}
        >
          <div className='overlay'></div>
          <div className='contant'>
            <div className='introduction-text'>
              <animated.div style={textProps}>
                <p>معاً نبنى مستقبل أبنائنا</p>
                <h1>
                  مدرسة <span>الكوثر </span>الخاصة
                </h1>
                <p>طريقك إلي المستقبل</p>
              </animated.div>
            </div>
            <animated.div style={ btnProps }>
              <div className='button'>
                <MoreButton link="/about" />
              </div>
            </animated.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ImageSlider
