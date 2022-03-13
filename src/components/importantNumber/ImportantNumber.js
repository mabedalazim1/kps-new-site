import './importantNumber.css'
import React, { useState } from 'react'
import AnimatedNumbers from "react-animated-numbers";

const ImportantNumber = ({ img }) => {
    const [num1, setNum1] = useState(65);
    const [num2, setNum2] = useState(97);
    const [num3, setNum3] = useState(32);
    const [num4, setNum4] = useState(100);
    return (
        <>
            <div className='numbers'>
                <p className='main-title'>أرقام هامة</p>
                <div
                    className='important-numbers'
                    style={ {

                        backgroundImage: `url(${img})`
                    } }
                >
                    <div className='overlay'>
                        <div className='container contant'>
                            <div className='row'>
                                <div className='col-md col-numbers'>
                                    <div className='icon-con'>
                                        <i className="far fa-bookmark"></i>
                                        <div className='text-no'>
                                            <AnimatedNumbers
                                                animateToNumber={ num1 }
                                                fontStyle={ { fontSize: 22 } }
                                                configs={ (number, index) => {
                                                    return { mass: 1, tension: 500 * (index + 1), friction: 150 };
                                                } }
                                            ></AnimatedNumbers>
                                        </div>
                                    </div>
                                    <p className='text-title'>معلم متخصص</p>
                                </div>
                                <div className='col-md col-numbers'>
                                    <div className='icon-con'>
                                        <i className="far fa-calendar-check"></i>
                                        <div className='text-no'>
                                            <AnimatedNumbers
                                                animateToNumber={ num2 }
                                                fontStyle={ { fontSize: 22 } }
                                                configs={ (number, index) => {
                                                    return { mass: 1, tension: 250 * (index + 1), friction: 150 };
                                                } }
                                            ></AnimatedNumbers>
                                        </div>
                                        <span className='prcent'>%</span>
                                    </div>
                                    <p className='text-title'>التحاق بالجامعات</p>
                                </div>
                                <div className='col-md col-numbers'>
                                    <div className='icon-con'>
                                        <i className="fas fa-medal"></i>
                                        <div className='text-no'>
                                            <AnimatedNumbers
                                                animateToNumber={ num3 }
                                                fontStyle={ { fontSize: 22 } }
                                                configs={ (number, index) => {
                                                    return { mass: 1, tension: 250 * (index + 1), friction: 150 };
                                                } }
                                            ></AnimatedNumbers>
                                        </div>
                                    </div>
                                    <p className='text-title'>فوز بالمسابقات</p>
                                </div>
                                <div className='col-md col-numbers'>
                                    <div className='icon-con'>
                                        <i className="far fa-calendar-check"></i>
                                        <div className='text-no'>
                                            <AnimatedNumbers
                                                animateToNumber={ num4 }
                                                fontStyle={ { fontSize: 22 } }
                                                configs={ (number, index) => {
                                                    return { mass: 1, tension: 250 * (index + 1), friction: 150 };
                                                } }
                                            ></AnimatedNumbers>
                                        </div>
                                        <span className='prcent'>%</span>
                                    </div>
                                    <p className='text-title'>نسبة النجاح</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
ImportantNumber.defaultProps ={
    img:"/assets/images/back-4.jpg"
}
export default ImportantNumber
