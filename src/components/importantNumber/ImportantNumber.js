import './importantNumber.css'
const ImportantNumber = () => {
    return (
        <>
            <div className='numbers'>
                <p className='main-title'>أرقام هامة</p>
                <div
                    className='important-numbers'
                    style={ {
                        backgroundImage: `url(/assets/images/back-4.jpg)`
                    } }
                >
                    <div className='overlay'>
                        <div className='container contant'>
                            <div className='row'>
                                <div className='col-md col-numbers'>
                                    <div className='icon-con'>
                                    <i className="fas fa-bookmark"></i>
                                   <p className='text-no'>65</p>
                                    </div>
                                   
                                   <p className='text-title'>معلم متخصص</p> 
                                </div>
                                <div className='col-md col-numbers'>
                                    2
                                </div>
                                <div className='col-md col-numbers'>
                                    3
                                </div>
                                <div className='col-md col-numbers'>
                                    4
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImportantNumber
