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
                        <div class='container contant'>
                            <div class='row'>
                                <div class='col-md col-numbers'>
                                    <div className='icon-con'>
                                    <i class="fas fa-bookmark"></i>
                                   <p className='text-no'>65</p>
                                    </div>
                                   
                                   <p className='text-title'>معلم متخصص</p> 
                                </div>
                                <div class='col-md col-numbers'>
                                    2
                                </div>
                                <div class='col-md col-numbers'>
                                    3
                                </div>
                                <div class='col-md col-numbers'>
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
