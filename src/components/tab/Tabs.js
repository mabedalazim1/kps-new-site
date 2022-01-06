import React, { useState, useEffect, useRef } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import Tab from './Tab'
import './tab.css'


const Tabs = () => {
  const {width} = useWindowSize()
  const [height, setHeight] = useState(0)
  const [checked, setChecked] = useState("checked")
  const div_a = useRef(null)
  const div_b = useRef(null)
  const div_c = useRef(null)
  const div_d = useRef(null)
  const tabsMargin = useRef(null)
  const input_a = useRef(null)
  const tabContainer = useRef(null)
  
  const changeDivA = () => {
    setHeight(div_a.current.clientHeight+100) 
  }
  const changeDivB = () => {
    setHeight(div_b.current.clientHeight+100)
  }
  const changeDivC = () => {
     setHeight(div_c.current.clientHeight+100)
  }
  const changeDivD = () => {
    setHeight(div_d.current.clientHeight+100)
  }

  useEffect(() => {
    changeDivA()
})
  return (
    <>

      <div className='container tab-container'
        style={ { marginBottom: height } }
      ref={tabContainer}>
        <div className='tabs'>
          <input type='radio' name="tab" id="tabId_4" />
          <label htmlFor="tabId_4" onClick={changeDivD}> تكريم الظلاب </label>
          <input  type='radio' name="tab" id="tabId_3" />
          <label htmlFor="tabId_3" onClick={changeDivC}>مسابقات</label>
          <input  type='radio' name="tab" id="tabId_2" />
          <label htmlFor="tabId_2" onClick={changeDivB}> مناسبات </label>
          <input type='radio' name="tab" id="tabId_1"  defaultChecked={checked}
             onChange={() => setChecked(!checked)}/>
          <label htmlFor="tabId_1" onClick={changeDivA} ref={input_a}>أخبار مميزة</label>      
          <div className=
            'tab' ref={ tabsMargin }
           
          >
            <div></div>
           
            <div ref={div_a}>
              أخبار مميزة
             
            </div>
                      <div ref={ div_b }>
                      مناسبات
                      </div>
                      <div ref={ div_c }>
                      مسابقات
                    </div>
                    <div ref={ div_d }>
              تكريم الظلاب
              <br />
              <br />
              <br />
              <br />
            </div>
         
          </div>
        </div> 
      </div>
      <div>
        Tabs
      </div>
    </>
  )
}
export default Tabs
